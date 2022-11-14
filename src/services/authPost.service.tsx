import { TweetInfo } from '../features/types';
import Axios from "axios";
import { LikeInfo } from  "../features/types";

const API_URL ='http://82.115.16.153:4000/api/';
 
const tweetAPI = ({body, tags, reply}:TweetInfo, token: string) =>
  Axios.post(API_URL + 'tweet', {body, tags, reply}, {headers: { jwt: token }})

const feedAPI = (token: string) =>
  Axios.post(API_URL + 'feed', {}, {headers: { jwt: token }})

const threadAPI = (tweetId: string) =>
  Axios.get(API_URL + 'tweet/' + tweetId)

const likeAPI = ({ tweet_id }: LikeInfo, token: string) =>
  Axios.put(API_URL + 'like/', { tweet_id }, {headers: { jwt: token }})

const deleteAPI = ({ tweet_id }: LikeInfo, token: string) =>
  Axios.put(API_URL + 'delete_tweet/', { tweet_id }, {headers: { jwt: token }})

const postService = {
  tweetAPI,
  feedAPI,
  threadAPI,
  likeAPI,
  deleteAPI,
};

export default postService