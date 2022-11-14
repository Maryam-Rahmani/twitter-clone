import Axios from 'axios'
import { UserInfo } from '../features/types';
import { LoginInfo } from '../features/types';
import { UserName } from '../features/types';


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
      let token= response.data.token
      localStorage.setItem("user", JSON.stringify({ token, username }));
      
    }
    return response.data;
  });
 }
  
const logoutAPI = () => {
  localStorage.removeItem("user");
};

const userInfoAPI = (x:string) =>
  Axios.get(API_URL + 'user/' + x)

const followAPI = ({username} :UserName, token: string) =>
Axios.put(API_URL + 'follow/', {username}, {headers: { jwt: token }})

const authService = {
  singUpAPI ,
  loginAPI,
  logoutAPI,
  userInfoAPI,
  followAPI,
};

export default authService;