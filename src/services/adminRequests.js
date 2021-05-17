import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getAllUsers = async () => {
  return axios.get(keys.BASE_URL + "/user/getAllUsersData", {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  }).then((res) => {
    return res.data;
  })
  .catch((e) => {
     console.log(e.response);
  });
};

export const _getAllRoles = async () => {
    return axios.get(keys.BASE_URL + "/roles/getAllRoles", {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    }).then((res) => {
      return res.data;
    })
    .catch((e) => {
       console.log(e.response);
    });
    
  };
// Get all requests count

export const _getAllRequestsCount = async () => {
  return axios
    .get(keys.BASE_URL + "/requests/getRequestsCount", {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response);
    });
};


// getAllUsersCount
export const _getAllUsersCount = async () => {
    return axios
      .get(keys.BASE_URL + "/users/getCountOfUsers", {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  
  // getAllUsersCar
export const _getCountOfCars = async () => {
    return axios
      .get(keys.BASE_URL + "/users/getCountOfCars", {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  
