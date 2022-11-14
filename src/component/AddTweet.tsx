import React, { ChangeEvent, useState, useEffect} from "react";
import postService from "../services/authPost.service";
import { TweetInfo } from "../features/types";
import TweetList from "./TweetList";
import { PostInfo } from  "../features/types";
import { TweetItemProps } from  "../features/types";
import { TweetListProps } from  "../features/types";
import { DataCheck } from  "../features/types";

const AddTweet: React.FunctionComponent  = () => {

  let commentList = JSON.parse(localStorage.getItem("tweet") || '""')
  
  const [isTweetSend, setIsTweetSend] = useState(false)
  const [tweetBody, setTweetBody] = useState<TweetItemProps>({
    text: "",
    id: "",
    reply:null,
    tags:[],
  })
  const [postBody, setPostBody] = useState("")
  const [post, setPost] = useState({
    body: postBody,
    tags: [],
    reply: null,
  })


  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.currentTarget.value)
    
  }
  


 const data = JSON.parse(localStorage.getItem('user') || '""');

  const handleTweet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    post.body = postBody
    setPost(post)
    //setPost({...post, body:postBody})

    const {body, tags, reply} = post
    console.log(post)
    postService.tweetAPI( {body}, data.token)
    .then((res) => {
      let tweetId = res.data.tweet_id
      tweetBody.text= postBody  
      tweetBody.id = tweetId
      setTweetBody(tweetBody)
      console.log(tweetBody)
      commentList = !commentList ? [] : commentList;
      commentList.push(tweetBody)
      console.log(commentList)
      localStorage.setItem("tweet", JSON.stringify( commentList));
      console.log(res)
      setIsTweetSend(true)
      setPostBody("")

      return res.data;
    })
    .catch((er) => {
      console.log(er)
        if(er.response){
          console.log(er.response);
       }else if(er.request) {
          console.log(er.request)
        }else if (er.message){
          console.log(er.message)
       }
      })
  };
    

  return (
    <div className="container">
      { !isTweetSend &&
      <div>
        <label htmlFor="post">tweet</label>
          <textarea
          id="tweet"
          name="tweet"
          value={postBody}
          onChange={handleTweetChange}
          maxLength={parseInt("300")}
          >
          </textarea>
        <button type="submit" onClick={handleTweet}>send</button>
        </div>
        }
    </div>

  )    
};

export default AddTweet;