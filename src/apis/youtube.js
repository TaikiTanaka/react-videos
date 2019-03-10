import axios from 'axios';
const KEY = 'AIzaSyDI0K3aBr4e6VS_NTNf5wsjorihUwP_kR8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults: 5,
    key: KEY
  }
});
