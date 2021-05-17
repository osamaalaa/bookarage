//import React from "react";
import axios from "axios";
import { keys } from "../config/keys";
//import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
let token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getUsersTransactions = async (walletID) => {
  return await axios
    .post(
      keys.BASE_URL + "/wallet/getWithdrawHistory",
      { SERVICE_PROVIDER_ID: walletID },
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

export const _getBalanceForServiceProvider = async (ServiceProviderId) => {
  return await axios
    .post(
      keys.BASE_URL + "/online-payment/getBalanceForServiceProvider",
      { SERVICE_PROVIDER_ID: ServiceProviderId },
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

// ==================================================================================
export const _getPaymentForServiceProvider = async (ServiceProviderId) => {
  return await axios
    .post(
      keys.BASE_URL + "/online-payment/getPaymentForServiceProvider",
      { SERVICE_PROVIDER_ID: ServiceProviderId },
      {
        headers: { Authorization: "Bearer " + token.accessToken },
      }
    )
    .then((res) => {
      console.log("The Response" , res.data)
      return res.data;
    })
    .catch((e) => {
      //  (e);
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};
// =====================================================================================
// =====================================================================================
export const _getCharsForServiceProvider = async (ServiceProviderId) => {
  return await axios
    .post(
      keys.BASE_URL + "/online-payment/getCharsForServiceProvider",
      { SERVICE_PROVIDER_ID: ServiceProviderId },
      {
        headers: { Authorization: "Bearer " + token.accessToken },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      //  (e);
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};


export const _getRequestWithDrawByServiceProvider = async (ServiceProviderId) => {
  return await axios
    .post(
      keys.BASE_URL + "/online-payment/getRequestWithDrawByServiceProvider",
      { SERVICE_PROVIDER_ID: ServiceProviderId },
      {
        headers: { Authorization: "Bearer " + token.accessToken },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      //  (e);
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};
// =====================================================================================
export const _RequestWithdraw = async (data) => {
  return await axios
    .post(keys.BASE_URL + "/wallet/insertReqWithdraw", data, {
      headers: { Authorization: token.accessToken },
    })
    .then((res) => {
      console.log(res);
    });
};

// =====================================================================================
export const _InsertRequestWithdraw = async (data) => {
  return await axios
    .post(keys.BASE_URL + "/online-payment/insertReqWithdraw", data, {
      headers: { Authorization: token.accessToken },
    })
    .then((res) => {
      return res.data;
    });
};

export const _getAllServicesByUserId = async () => {
  return await axios
    .post(
      keys.BASE_URL + "/requests/getAllRequestsForSpecificUser",
      { USER_ID: token.id },
      { headers: { Authorization: "Bearer " + token.accessToken } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};

export const _getServiceProviderID = async (user_id) => {
  return axios
    .post(
      keys.BASE_URL + "/services/getServiceProvidersByUserId",
      { USER_ID: user_id },
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    )
    .then((res) => {
      localStorage.setItem(
        "serviceProviderData",
        JSON.stringify(res.data.result[0])
      );

      return { success: true };
    })
    .catch((e) => {
      console.log(e.response);
      // localStorage.clear();
      // history.push("/pages-lock-screen");
      // return <Redirect to="/pages-lock-screen" />;
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }

      //  (e);
    });
};

// Get all countries
export const _getAllCountries = () => {
  return axios
    .get(keys.BASE_URL + "/cities/getAllcitiesAndCountries")
    .then((res) => {
      return res.data;
    });
};

// Get cities as per country name
export const _getCities = (countryName) => {
  return axios
    .post(keys.BASE_URL + "/cities/getCitiesByCountryName", {
      COUNTRY_NAME: countryName,
    })
    .then((res) => {
      return res.data;
    });
};

// Get all brands
export const _getAllBrands = () => {
  return axios
    .get(keys.BASE_URL + "/Brands/getAllBrands")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response);
    });
};


// get All Default Services
export const _getAllDefaultServices = () => {
  return axios
    .get(keys.BASE_URL + "/Services/getAllDefaultServices")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.response);
    });
};