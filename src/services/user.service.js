import axios from "axios";
import { keys } from "../config/keys";
import authHeader from "./auth-header";

// const API_URL = 'http://localhost:5000/auth/log/';
const API_URL = `${keys.BASE_URL}/auth/log/`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
