import React, { ChangeEvent, useState, useEffect} from "react";
import PostService from "../services/authPost.service";

const DeleteInfo = () => {
  const [list, setList] = useState([])
  const data = JSON.parse(localStorage.getItem('user') || '""');
  PostService.likeAPI({tweet_id:"635cee08cc3d5e438ba412a4"}, data.token)
  .then((response) => {
    if (response.data) {
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




export default DeleteInfo;