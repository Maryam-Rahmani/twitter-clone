import React, { ChangeEvent, useState, useEffect} from "react";
import AddTweet from "./AddTweet"
import TweetList from "./TweetList";


const CreateTweetBox = () => {
  
  const [isTrue, setIsTrue] = useState(false)


const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault()
  setIsTrue((per) => !per)
}

  return (
    <div>
      {isTrue && 
        <AddTweet/> 
      }
      <button type="button" id="buttonTweet" onClick={handleClick}>tweet</button>
    </div>
  )
}




export default CreateTweetBox;