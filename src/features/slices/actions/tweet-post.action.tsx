import {createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message";
import authService from "../../../services/auth.service";
import { TweetInfo } from "../../types"; 

export const tweet = createAsyncThunk(
  "auth/tweet",
  async ({ body, tags, reply }: TweetInfo, thunkAPI) => {
    try {
      const response = await authService.tweetAPI({body, tags, reply});
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

