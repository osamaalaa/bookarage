import axios from "axios";
import { keys } from "../config/keys";

let token = JSON.parse(localStorage.getItem("user") || "[]");

export const _updateProfile = async (data) => {
  return await axios
    .post(keys.BASE_URL + "/profile/UpdateUserProfileData", data, {
      headers: { Authorization: "Bearer " + token.accessToken },
    })
    .then((res) => {
      return res.data;
    });
};

export const _uploadProfileImage = async (data) => {
  return await axios
    .post(keys.BASE_URL + "/profile/updateImageProfile", data, {
      headers: { Authorization: "Bearer " + token.accessToken },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
       return
    });
};

export const updateDataLocalStorage = (data) => {
  const loadedJson = JSON.parse(localStorage.getItem("user") || "[]");

  const json = {
    ...loadedJson,
    USER_IMAGE_PATH: data.image,
    firstname: data.firstName,
    lastname: data.lastName,
    nationality: data.nationality,
    phonenumber: data.phone,
    email: data.email,
  };

  localStorage.setItem("user", JSON.stringify(json));
};
