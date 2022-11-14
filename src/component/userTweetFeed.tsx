import React, { ChangeEvent, useState, useEffect} from "react";
import postService from "../services/authPost.service";

const FeedInfo = () => {
  const [list, setList] = useState([])
  const data = JSON.parse(localStorage.getItem('user') || '""');
  postService.feedAPI(data.token)
  .then((response) => {
    if (response.data) {
      localStorage.setItem("feed", JSON.stringify(response.data));
      console.log(response.data)
      setList(response.data)
    }
    return response.data;
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

    return (
      <div>
  {list}
      </div>
    )
 }




export default FeedInfo;