import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");


// Insert a new offer
export const _createNewExternalUser = (data) => {
    return axios
      .post(keys.BASE_URL + "/ExternalUser/SendMessageForExternalUser", data, {
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
  