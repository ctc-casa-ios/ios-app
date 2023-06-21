import axios from 'axios';

export default axios.create({
  // baseURL would be the production URL of server
  // every time ngrok is run, unique URL is given and so this key will need to be updated each time
  baseURL: 'https://7d88-24-246-9-231.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
