import axios from 'axios';

export default axios.create({
  // baseURL would be the production URL of server
  // every time ngrok is run, unique URL is given and so this key will need to be updated each time
  baseURL: 'https://3fd7-64-229-252-232.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
