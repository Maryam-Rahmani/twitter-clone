import React, { useState} from "react";
import { CommentProps } from "../features/types"
import { TweetItemProps } from "../features/types"
import AddTweet from "./AddTweet";
import CreateTweetBox from "./createTweetBox";

const mystyle={
  width: "18rem",
  height: "18rem",
  border:"solid 2px #1c7207b6" ,
  display: "flex",
  flexDirection: "column",
  gap:"20px",
  borderRadius: "5px" ,
  justifyContent: "center",
}



const TweetItem: React.FunctionComponent<CommentProps> = ({text, id}) => {
  const [isTrue, setIsTrue] = useState(false)
 
  let tweet= JSON.parse(localStorage.getItem("tweet") || '""')

  const addTweet = (e: React.MouseEvent<HTMLElement>) => {

    e.preventDefault()
    setIsTrue((per) => !per)
    tweet.map((element: TweetItemProps , index:number) => {
      if (element.id === id){
        tweet[index].reply = tweet[index].id
        if (text.charAt(0) ==="@" && text.length < 9 ) {
          tweet[index].tags.push(text)
         }
        localStorage.setItem("tweet", JSON.stringify(tweet));
      }
    })
    
    
   
  };

  return (
    <div className="card" id={id}>
      <div className="card body" style={mystyle} id={id + "-text"}>
       <div>{text}</div> 
        <button type="submit" style={{width: "100px"}} onClick={addTweet}>comment</button>
      </div>
    </div>
  )    
};

export default TweetItem;