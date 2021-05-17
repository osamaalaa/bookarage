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

// Insert a new offer
export const _createNewOffer = (data) => {
  return axios
    .post(keys.BASE_URL + "/offers/InsertOffersByServiceProvider", data, {
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

// Get offers by provider ID
export const _getOffersByProviderID = (providerID) => {
  return axios.post(keys.BASE_URL + '/offers/getOffersByProviderId', { SERVICE_PROVIDER_ID: providerID }, { headers: { Authorization: 'Bearer ' + token.accessToken } }).then(res => {
      console.log("Offers DAta" , res)
    
    return res.data
  }).catch(e => {
    
    if (e.response.status === 401) {
      return { success: false, error: "token" };
    }
  })
}

// Get inActive offers by provider ID
export const _getInActiveOffersByProviderID = (providerID) => {
  return axios.post(keys.BASE_URL + '/offers/getInActiveOffersByProviderId', { SERVICE_PROVIDER_ID: providerID }, { headers: { Authorization: 'Bearer ' + token.accessToken } }).then(res => {
    return res.data
  }).catch(e => {
    
    if (e.response.status === 401) {
      return { success: false, error: "token" };
    }
  })
}

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




export const _deleteInActiveOffers = (offerId) => {
  return axios
    .post(
      keys.BASE_URL + "/offers/DeleteInActiveOffersByOfferId",
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

export const _UpdateOfferToActiveMode = (offerId) => {
  return axios
    .post(
      keys.BASE_URL + "/offers/UpdateOfferToActiveMode",
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