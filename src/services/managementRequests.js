import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

// Update Shop Information
export const _updateShopInfo = (data) => {
  return axios
    .post(keys.BASE_URL + "/services/UpdateServiceProviderData", data, {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
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

// Get All brands by service provider id
export const _getAllBrandsByServiceProviderId = (providerId) => {
  return axios
    .post(
      keys.BASE_URL + "/Brands/GetAllBrandsByServiceProviderId",
      {
        SERVICE_PROVIDER_ID: providerId,
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

// Get All DefaultService by service provider id
export const _getAllDefaultServiceByServiceProviderId = (providerId) => {
  return axios
    .post(
      keys.BASE_URL + "/Services/GetAllDefaultServicesByServiceProviderId",
      {
        SERVICE_PROVIDER_ID: providerId,
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



// Add brand
export const _addBrand = (data) => {
  return axios
    .post(keys.BASE_URL + "/Brands/InsertServiceProviderBrands", data, {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
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

// Add Default Service
export const _addDefaultService = (data) => {
  return axios
    .post(keys.BASE_URL + "/services/InsertServiceProviderDefaultServices", data, {
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
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

// ============================================================================================



// Delete brand
export const _deleteBrand = (brandId) => {
  return axios
    .post(
      keys.BASE_URL + "/Brands/DeleteServiceProviderBrands",
      {
        PROVIDER_BRAND_ID: brandId,
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
// DeleteServiceProviderDefaultService
export const _DeleteServiceProviderDefaultService = (defaultServiceId) => {
  return axios
    .post(
      keys.BASE_URL + "/Services/DeleteServiceProviderDefaultService",
      {
        PROVIDER_DEFAULT_ID: defaultServiceId,
      },
      { headers: { Authorization: "Bearer " + token.accessToken } }
    )
    .then((res) => {
      console.log("RESPONSE DELETE " , res)
      return res.data;
    })
    .catch((e) => {
       
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};


// Delete Service
export const _deleteService = (serviceId) => {
  return axios
    .post(
      keys.BASE_URL + "/services/DeleteServiceProviderServices",
      {
        SERVICE_PROVIDERS_SERVICES_ID: serviceId,
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





// Get all services
export const _getAllServices = () => {
  return axios
    .get(keys.BASE_URL + "/services/getAllServices", {
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

export const _getAddress = () => {
  return axios
    .get(`https://geolocation-db.com/json/`, {
      
    })
    .then((res) => {
      return res.data;
      
    })
    .catch((e) => {
        console.log("error")
    });
};

// Add service by service provider id
export const _AddServiceByServiceProviderId = (data) => {
  return axios
    .post(
      keys.BASE_URL + "/services/insertServicesForServiceProviderById",
      data,
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

// Get service by provider id
export const _getServicesByProviderId = (providerId) => {
  return axios
    .post(
      keys.BASE_URL + "/services/getServicesForProvideById",
      {
        SERVICE_PROVIDER_ID: providerId,
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


// Get service by provider id
export const _updateLogoShop = (providerId , serviceProviderLogo) => {
  return axios
    .post(
      keys.BASE_URL + "/serviceProvider/updateLogoShop",
      {
        SERVICE_PROVIDER_ID: providerId,
        serviceProviderLogo: serviceProviderLogo,
      },
      { headers: { Authorization: "Bearer " + token.accessToken } }
    )
    .then((res) => {
      return res.result;
    })
    .catch((e) => {
      
      if (e.response.status === 401) {
        return { success: false, error: "token" };
      }
    });
};
