import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getAllEvents = async () => {
  return axios.get(keys.BASE_URL + "/events/getAllEvents");
};
// Insert a new offer
export const _createNewEvent = (data) => {
    return axios
      .post(keys.BASE_URL + "/events/InsertNewEvent", data, {
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
  