import {createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";


export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logoutAPI();
});
