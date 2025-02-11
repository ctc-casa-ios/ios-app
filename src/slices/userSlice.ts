import { createSlice } from '@reduxjs/toolkit';

// define a TS type for the state
export interface UserState {
  id: number;
  display_name: string;
  email: string;
}

// create an initial state for our reducer with that type
const initialState: UserState = {
  id: 0,
  display_name: '',
  email: '',
};

// create the slice and pass in the initial state
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.id = action.payload.id;
      state.display_name = action.payload.display_name;
      state.email = action.payload.email;
    },
  },
});

// export actions
export const { updateUser } = userSlice.actions;
// export selectors for the state
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
