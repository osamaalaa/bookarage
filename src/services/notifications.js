import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getNotifications = async () => {
  console.log("token==========================", token.accessToken);
  return axios
    .get(keys.BASE_URL + "/notifications/getNotifications", {
      headers: {
        Authorization: "Bearer " + token.accessToken,
        // Authorization: `Bearer ${token.accessToken}`,
      },
    })
    .then((res) => {
      console.log("=======================>>>> ", res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};
