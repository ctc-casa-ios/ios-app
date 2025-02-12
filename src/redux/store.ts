import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/slices/authSlice';
import createScreenReducer from 'src/slices/createScreenSlice';
import userReducer from 'src/slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    createScreen: createScreenReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
