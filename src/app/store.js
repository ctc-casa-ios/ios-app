import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import createScreenReducer from '../slices/createScreenSlice'
import { create } from 'tailwind-react-native-classnames'

export default configureStore({
  reducer: {
    counter: counterReducer,
    createScreen: createScreenReducer,
  }
})