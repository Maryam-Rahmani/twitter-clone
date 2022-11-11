import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TweetPost from "./tweetpost";

const ProfilePage = () => {
  const { user: currentUser } = useSelector((state:any) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role:string, index:number) => <li key={index}>{role}</li>)}
      </ul>
      
      <TweetPost>

      </TweetPost>
    </div>
  );
};

export default ProfilePage;