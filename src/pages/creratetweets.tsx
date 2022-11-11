import React from "react";
import TweetPost from "./tweetpost";
import { TweetListProps } from "../features/types";



const postList: React.FunctionComponent<TweetListProps> = ({
  postList,
}) => {
  return (
    <div className="w-100">
      {postList.map((el) => (
        <TweetPost
          key={el.id}
          todo={el}
        />
      ))}
    </div>
  );
};

export default postList;
