import Axios from 'axios';
import {APP_URL} from '../../config/config';

const url = APP_URL.concat('user');
export const postLogin = data => {
  return {
    type: 'GET_TOKEN',
    payload: Axios.post(url.concat('/'), data),
  };
};
