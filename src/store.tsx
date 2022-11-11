import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/slices/authslice"
import messageReducer from "./features/slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;