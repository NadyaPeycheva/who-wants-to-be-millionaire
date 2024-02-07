import axios from 'axios';
import config from './Config';

export default axios.create({
  baseURL: config.url,
  timeout: config.connectionTimeout,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});
