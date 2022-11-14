import React from "react";
import TweetItem from "./TweetItem";
import { TweetListProps } from "../features/types";
import CreateTweetBox from "./createTweetBox";
import AddTweet from "./AddTweet";


const TweetList: React.FunctionComponent<TweetListProps> = ({
  postList,
}) => {
  const date = Date.now().toString()
 
  return (
    <div className="container">
      {postList.map((el) => (
          <TweetItem
          text={el.text}
          id={el.id}
          key={date}
        /> 
    ))}
    </div>
  );
};

export default TweetList;
