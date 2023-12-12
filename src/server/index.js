import { message } from "antd";

import axios from "axios";
import Cookies from "js-cookie";
import { ENDPOINT, TOKEN } from "./../constants/index";

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
  headers: { Authorization: `Bearer ${Cookies.get(TOKEN)}` },
});

request.interceptors.response.use(
  (response) => response,
  (err) => {
    message.error(err.response.data.message);
    console.log(err.response.data.message);
    return Promise.reject(err);
  }
);

export default request;
