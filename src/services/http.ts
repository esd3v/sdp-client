import axios from 'axios';
import {
  API_ENDPOINT,
  API_TIMEOUT,
} from 'config';

export const get = params =>
  axios.get(API_ENDPOINT, {
    timeout: API_TIMEOUT,
    params: {
      ...params,
    },
  });
