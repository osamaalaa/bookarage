import axios from "axios";
import { keys } from "../../config/keys";

export const _login = (data) => {
  return axios
    .post(keys.BASE_URL + "/auth/signin", data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
     console.log(e.response);
    });
};
