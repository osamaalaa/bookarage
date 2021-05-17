import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");


// Get Car History By QrCode
export const _getCarHistory = (data) => {
    return axios
      .post(keys.BASE_URL + "/Car/getCarHistory", data, {
        headers: { Authorization: "Bearer " + token.accessToken },
      })
      .then((res) => {
        console.log("The Response" , res.data)
        return res.data;
      })
      .catch((e) => {
       
        if (e.response.status === 401) {
          return { success: false, error: "token" };
        }
      });
  };
  