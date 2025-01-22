import { configureStore } from '@reduxjs/toolkit';
import createScreenReducer from 'src/slices/createScreenSlice';

export default configureStore({
  reducer: {
    createScreen: createScreenReducer,
  },
});
