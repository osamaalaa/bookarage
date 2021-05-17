import axios from "axios";
import { keys } from "../../config/keys";

export const _addNewAccount = async (data) => {
  
  return axios
    .post(keys.BASE_URL + "/auth/signup", data, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
       console.log(e.response.data);

      return { success: false, message: e.response.data.message };
    });
};

export const _insertServiceProvider = async (data) => {
  return axios
    .post(keys.BASE_URL + "/services/InsertServiceProvider", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response);
    });
};

export const _insertServiceProviderLicense = (data) => {
  return axios
    .post(
      keys.BASE_URL + "/services/InsertServiceProviderLicenseModified",
      data,
      {
        headers: { "Content-type": "multipart/form-data" },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return { success: false, error: e };
    });
};

export const _sendVerificationCode = (phone) => {
  return axios
    .post(keys.BASE_URL + "/auth/sendVerificationCodeToPhoneNumber", phone)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response);
    });
};
