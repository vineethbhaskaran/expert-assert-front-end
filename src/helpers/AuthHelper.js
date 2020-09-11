import axios from "axios";
import * as config from "../config";

const accessToken = localStorage.getItem(config.JWT_TOKEN_NAME);
const authAxios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default authAxios;
