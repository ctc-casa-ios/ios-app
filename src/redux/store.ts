import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/slices/authSlice';
import createScreenReducer from 'src/slices/createScreenSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createScreen: createScreenReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
