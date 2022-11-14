import React, {useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AddTweetProps } from "../features/types";
import TweetList from "../component/TweetList";
import CreateTweetBox from "../component/createTweetBox";
import { DataCheck } from "../features/types"
import FeedInfo from "../component/userTweetFeed";
import FollowInfo from "../component/follow"
import LikInfo from "../component/like"
import DeleteInfo from "../component/like"
import authService from "../services/authUser.service"
import { useNavigate } from "react-router-dom";
import "./profilecss.css"

const ProfilePage = () => {
  let navigate = useNavigate();
  let commentList = JSON.parse(localStorage.getItem("tweet") || '""')
  const { user: currentUser } = useSelector((state:any) => state.auth);

  const logOut = () => {
    authService.logoutAPI()
    navigate("/");
    window.location.reload();
  }
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="buttonInfo">
        <button type="button" id="buttonLog" onClick={logOut}>logout</button>
        <CreateTweetBox/>
        <TweetList
          postList={commentList}
        />
      </div>
    </div>
  );
};

export default ProfilePage;