import React, { useState, useEffect, ChangeEvent} from "react";
import { useDispatch, useSelector } from "react-redux";

import { tweet } from "../features/slices/actions/tweet-post.action";
import { clearMessage } from "../features/slices/message";
import { TweetInfo } from "../features/types";
import { AppDispatch } from "../features/types";



const TweetPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [postBody, setPostBody] = useState("")
  const [post, setPost] = useState<TweetInfo>({
    body: postBody,
    tags: [],
    reply: null,
  })
  
  const { message } = useSelector((state:any) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.currentTarget.value)
  }
  
  const handleTweet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const {body, tags, reply} = post

    dispatch(tweet({ body, tags, reply }))
    .unwrap()
    .then(() => {
      setPost(post)
      if (post.body.charAt(0) === "@"){
        tags.push(post.body)
      }
      post.reply = message
      window.location.reload();
    })
    .catch((res) => {
      console.log(res)
    });
   
  };

  return (
    <div id={message}>
        <label htmlFor="post">tweet</label>
        <textarea
        id="tweet"
        name="tweet"
        value={postBody}
        onChange={handleTweetChange}
        maxLength={parseInt("300")}
        >
        </textarea>
      <div id="-text">{postBody}</div>
      <button type="submit" onClick={handleTweet}>comment</button>
    </div>

  )    
};

export default TweetPost;