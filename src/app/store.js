import { configureStore } from '@reduxjs/toolkit'
import createScreenReducer from '../slices/createScreenSlice'

export default configureStore({
  reducer: {
    createScreen: createScreenReducer,
  }
})