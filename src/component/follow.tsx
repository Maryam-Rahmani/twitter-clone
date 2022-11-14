import React, { ChangeEvent, useState, useEffect} from "react";
import authService from "../services/authUser.service";

const FollowInfo = () => {
  const [list, setList] = useState([])
  const data = JSON.parse(localStorage.getItem('user') || '""');
  authService.followAPI({username:"usercamp1"}, data.token)
  .then((response) => {
    if (response.data) {
      localStorage.setItem("follow", JSON.stringify(response.data));
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




export default FollowInfo;