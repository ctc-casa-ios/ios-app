import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import authApi from '../api/auth';
import { navigate } from '../navigationRef';

//
// typescript
type State = {
  isSignedIn: boolean;
  errorMessage: string;
  token: string;
};

type Action =
  | { type: 'addError'; payload?: string }
  | { type: 'signin'; payload?: any }
  | { type: 'signout'; payload?: string }
  | { type: 'clearErrMsg'; payload: void };

type Dispatch = (action: Action) => any;
//
//

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addError':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { isSignedIn: true, errorMessage: '', token: action.payload };
    case 'signout':
      return { isSignedIn: false, errorMessage: '', token: null };
    case 'clearErrMsg':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch: Dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('mainFlow', {});
    } else {
      navigate('loginFlow', {});
    }
  };
};

// login
const signin = (dispatch: Dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign in with email and password
    // if request succeds, modify our state and say we are authenticated
    // if fails, show some error message
    const params = {
      user: {
        email,
        password,
      },
    };
    try {
      const response = await authApi.post('/users/sign_in', params);
      console.log(response.headers);
      console.log(response.headers.authorization);
      dispatch({
        type: 'signin',
        payload: response.headers.authorization,
      });
      await AsyncStorage.setItem('token', response.headers.authorization);
      navigate('mainFlow', {});
    } catch (err) {
      dispatch({
        type: 'addError',
        payload: 'Something went wrong with sign in.',
      });
      //console.log(err);
    }
  };
};

// logout
const signout = (dispatch: Dispatch) => {
  return async () => {
    // modify state so we are signed out
    try {
      const token = await AsyncStorage.getItem('token');
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await authApi.get('/users/sign_out', config);
      await AsyncStorage.removeItem('token');
      dispatch({
        type: 'signout',
      });
      navigate('loginFlow', {});
    } catch (err) {
      console.log(err);
    }
  };
};

// clear error message
const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clearErrMsg' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, tryLocalSignin, clearErrorMessage },
  { isSignedIn: false, errorMessage: '', token: null }
);
