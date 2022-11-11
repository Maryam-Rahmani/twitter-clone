import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Component } from "react";

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({reducer:rootReducer})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch:() => AppDispatch = useDispatch



export interface UserInfo {
  email: string;
  username: string;
  password: string;
}

export interface LoginInfo{
  username: string;
  password: string;
}

export interface TweetInfo {
  body: string
  tags: string[]
  reply: null | string
}

export interface PostInfo{
  id: string
  body:string
}

export interface TweetListProps {
  postList: Component[];
 
}