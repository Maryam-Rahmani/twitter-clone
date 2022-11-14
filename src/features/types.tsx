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
  tags?: string[]
  reply?: null | string
}
export interface TweetItemProps {
  text: string
  id: string
  reply:null,
  tags:string[],
}
export interface CommentProps{
  text: string
  id: string
}
export interface TweetListProps {
  postList: Array<CommentProps> 
}

export interface AddTweetProps {
  onAdd: () => void;
}

export interface PostInfo{
  body: string
}
export interface LikeInfo{
  tweet_id: string
}

export interface UserName{
  username: string
}

export interface DataCheck{
  item?: Array<TweetItemProps>
  isTrue: boolean
}
