import Axios from 'axios'
import { UserInfo } from '../features/types';
import { LoginInfo } from '../features/types';
import { TweetInfo } from '../features/types';

const API_URL ='http://82.115.16.153:4000/api/';

const singUpAPI = ({ email, username, password }: UserInfo) =>
  Axios.post(API_URL + 'signup', {
    email,
    username,
    password,
  }
  )

 const loginAPI = ({ username, password }: LoginInfo) =>{
  Axios.post(API_URL +'login', {
    username,
    password,
  })
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
 }
  
const logoutAPI = () => {
  localStorage.removeItem("user");
};


export const tweetAPI = ({ body, tags, reply }: TweetInfo) => 
  Axios.post(API_URL + 'tweet', {
    body,
    tags,
    reply
  })

  
  

const authService = {
  singUpAPI ,
  loginAPI,
  logoutAPI,
  tweetAPI,
};

export default authService;