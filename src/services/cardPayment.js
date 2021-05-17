import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

// Get offer types
export const _getOffersType = () => {
  return axios
    .get(keys.BASE_URL + "/offers/getOffersType", {
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

// Insert a new Card
export const _createNewCard = (data) => {
  return axios
    .post(keys.BASE_URL + "/wallet/insertCardWallet", data, {
      headers: { Authorization: "Bearer " + token.accessToken },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
   
      if (e.response.status === 401) {
        return { success: false, error: "Cannot Insert Card" };
      }
    });
};
// ==================================================================
// getWalletDataByUserId
export const _getWalletDataByUserId = (userId) => {
  return axios.post(keys.BASE_URL + '/wallet/getWalletDataByUserId', { USER_ID: userId }, { headers: { Authorization: 'Bearer ' + token.accessToken } }).then(res => {
    return res.data
  }).catch(e => {
  
    if (e.response.status === 401) {
      return { success: false, error: "token" };
    }

  })
}
// ==================================================================
// Delete brand
export const _deleteOffers = (offerId) => {
  return axios
    .post(
      keys.BASE_URL + "/offers/DeleteOffersByOfferId",
      {
        OFFER_ID: offerId,
      },
      { headers: { Authorization: "Bearer " + token.accessToken } }
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


