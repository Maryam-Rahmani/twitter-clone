import Axios from 'axios'
import { TweetInfo } from '../../features/types';

const API_URL ='http://82.115.16.153:4000/api/';

export const tweetAPI = ({ body, tags, reply }: TweetInfo) => {
  Axios.post(API_URL + 'tweet', {
    body,
    tags,
    reply
  })
}
  
  