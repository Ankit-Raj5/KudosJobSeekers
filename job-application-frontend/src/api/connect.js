import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kudosjobseekers.onrender.com',
});

export default instance;
