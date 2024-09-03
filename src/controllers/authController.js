import axios from "axios";
import { getAuthInfo } from "../utils/localStorageFunctions";

export const api = axios.create({
  baseURL: process.env.REACT_APP_DSP_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getAuthInfo() && getAuthInfo().token}`,
  },
});
export const login = (data) => {
  return api({
    method: "POST",
    data,
    url: "/users/login",
  });
};
