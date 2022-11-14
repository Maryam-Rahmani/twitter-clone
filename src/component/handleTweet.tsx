import React, { ChangeEvent, useState} from "react";
import postService from "../services/authPost.service";
import { TweetItemProps } from  "../features/types";


let commentList = JSON.parse(localStorage.getItem("tweet") || '""')
const data = JSON.parse(localStorage.getItem('user') || '""');

const HandleTweet = (comment: string, check:boolean)=> {

  const [tweetBody, setTweetBody] = useState<TweetItemProps>({
    text: "",
    id: "",
    reply:null,
    tags:[],
  })

  const [post, setPost] = useState({
    body: "",
    tags: [],
    reply: null,
  })

  post.body = comment
  setPost(post)
  //setPost({body:comment, tags:[], reply:null})
  const {body, tags, reply} = post
  console.log(post)
  postService.tweetAPI( {body}, data.token)
  .then((res) => {
    let tweetId = res.data.tweet_id
    //tweetBody.text = comment
    //tweetBody.id = tweetId
    //setTweetBody({text:comment, id:tweetId, tags:[], reply:null})
    //if (check) {
     // tweetBody.reply = tweetId
     // if (comment.charAt(0) ==="@" && comment.length < 9 ) {
      //  tweetBody.tags.push(comment)
      //}
     // setTweetBody(tweetBody)
    //}
    //console.log(tweetBody)
    //commentList = !commentList ? [] : commentList;
    //commentList.push(tweetBody)
   // console.log(commentList)
   // localStorage.setItem("tweet", JSON.stringify( commentList));
    console.log(res)
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
  
export default HandleTweet;