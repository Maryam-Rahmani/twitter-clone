import {createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message";
import authService from "../../../services/auth.service";
import { LoginInfo } from "../../types"; 

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password}: LoginInfo, thunkAPI) => {
    try {
      const data = await authService.loginAPI({username, password});
      return { user: data };
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
