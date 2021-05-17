import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

// Get offer types
export const _getUsers = () => {
  return axios
    .get(keys.BASE_URL + "/user/getAllUsersData", {
      headers: { Authorization: "Bearer " + token.accessToken },
    })
    .then((res) => {
 
      return res.data;
    })
    .catch((e) => {
       
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};


