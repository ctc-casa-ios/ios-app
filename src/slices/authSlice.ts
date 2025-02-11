import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import routeRequest from 'src/authBase/routeRequest';
import { createAppAsyncThunk } from 'src/redux/withTypes';

// define a TS type for the state
export interface AuthState {
  isSignedIn: boolean;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  id: string;
  display_name: string;
  email: string;
}

export const signIn = createAppAsyncThunk(
  'auth/signIn',
  async (credentials: { email: string; password: string }) => {
    const data = await routeRequest('/api/v1/users/sign_in', {
      email: credentials.email,
      password: credentials.password,
    });
    if (data) {
      try {
        await AsyncStorage.setItem('auth_token', data.token);
        return data;
      } catch {
        return Promise.reject(new Error('Error storing data in AsyncStorage'));
      }
    } else {
      return Promise.reject(new Error('Sign-in failed, not storing data'));
    }
  }
);

export const signOut = createAppAsyncThunk('auth/signOut', async () => {
  try {
    await AsyncStorage.removeItem('auth_token');
  } catch (err) {
    return err;
  }
});

// create an initial state for our reducer with that type
const initialState: AuthState = {
  isSignedIn: false,
  token: null,
  status: 'idle',
  error: null,
  id: '',
  display_name: '',
  email: '',
};

// create the slice and pass in the initial state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.isSignedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.display_name = action.payload.display_name;
      state.email = action.payload.email;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Error during signin: ' + action.error;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.isSignedIn = false;
      state.status = 'idle';
      state.token = null;
      state.id = '';
      state.display_name = '';
      state.email = '';
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Error during signout: ' + action.error;
    });
  },
});

// export selectors for the state
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
