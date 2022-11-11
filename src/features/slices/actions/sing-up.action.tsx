import {createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message";
import authService from "../../../services/auth.service";
import { UserInfo } from "../../types"; 

export const singUp = createAsyncThunk(
  "auth/singUp",
  async ({ username, email, password }:UserInfo, thunkAPI) => {
    try {
      const response = await authService.singUpAPI({username, email, password});
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
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