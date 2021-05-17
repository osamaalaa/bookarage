import axios from "axios";
import { keys } from "../config/keys";
import { _getServiceProviderID } from "./axiosRequests";

const API_URL = `${keys.BASE_URL}/auth/`;

class AuthService {
  login(phonenumberOrEmail, password) {
    console.log(process.env.PUBLIC_URL);
    return axios
      .post(API_URL + "signin", {
        phonenumberOrEmail,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          _getServiceProviderID(response.data.USER_ID).then((res) => {
            console.log(res);
          });
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        console.log("AuthTher");
        console.log(response.data);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
