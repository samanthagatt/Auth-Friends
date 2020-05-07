import axios from "axios";
import { getAuthToken } from "./cookiesUtil";

export const axiosWithAuth = function() {
  // create a new instance of axios with the config  object built into it
  return axios.create({
    headers: {
      authorization: getAuthToken()
    },
    baseURL: "http://localhost:5000"
  });
}();
