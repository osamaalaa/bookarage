//import React from "react";
import axios from "axios";
import { keys } from "../config/keys";
//import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
let token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getCarMaintenceByUserCarId = async (userCarId) => {
  return await axios
    .post(
      keys.BASE_URL + "/Car/getCarMaintenceByUserCarId",
      { USER_CAR_ID: userCarId },
      {
        headers: { Authorization: "Bearer " + token.accessToken },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};
