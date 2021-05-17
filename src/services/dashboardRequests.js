import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");

export const _getAllRequests = async () => {
  return axios.get(keys.BASE_URL + "/requests/");
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
      console.log("Error" , e)
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};

// Get requests by status ID
export const _getRequestsByStatusID = async (serviceProviderID, statusID) => {
  console.log("serviceProvider" , serviceProviderID)
  return axios
    .post( 
      keys.BASE_URL + "/requests/getServiceProvidersRequestsById",
      {
        SERVICE_PROVIDER_ID: serviceProviderID,
        STATUS_ID: statusID,
      }
      
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log("Error" , e)
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};

// =======================================================================


// getAllInvoicesByServiceProviderId
export const _getAllInvoicesByServiceProviderId = async (serviceProviderID) => {
  console.log("serviceProvider" , serviceProviderID)
  return axios
    .post( 
      keys.BASE_URL + "/invoices/getAllInvoicesByServiceProviderId",
      {
        SERVICE_PROVIDER_ID: serviceProviderID
      }
      
    )
    .then((res) => {

      return res.data;
    })
    .catch((e) => {
      console.log("Error" , e)
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};


export const _getAllInvoicesPaidByServiceProviderId = async (serviceProviderID) => {
  console.log("serviceProvider" , serviceProviderID)
  return axios
    .post( 
      keys.BASE_URL + "/invoices/getAllInvoicesPaidByServiceProviderId",
      {
        SERVICE_PROVIDER_ID: serviceProviderID
      }
      
    )
    .then((res) => {

      return res.data;
    })
    .catch((e) => {
      console.log("Error" , e)
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};

// Get service provider information
export const _getServiceProviderInfo = (providerID) => {
  return axios
    .post(
      keys.BASE_URL + "/services/getServicesForProvideById",
      { SERVICE_PROVIDER_ID: providerID }
      
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};

export const _UpdatePaymentInvoiceToPaid = (invoiceId) => {
  return axios
    .post(
      keys.BASE_URL + "/invoices/UpdatePaymentInvoiceToPaid",
      { INVOICE_ID: invoiceId }
      
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
    });
};

export const _getRequestsCountByStatus = (providerID) => {
  return axios
    .post(
      keys.BASE_URL + "/requests/getRequestsCountByStatus",
      { SERVICE_PROVIDER_ID: providerID },
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
        },
      }
    )
    .then((res) => {
      console.log("response Count" , res.data)
      return res.data;
    })
    .catch((e) => {
      
      if (e.response.success === "false") {
        localStorage.clear()
        // return { success: false, error: "token" };
      }
    });
};


export const _getCarModels = () => {
  return axios.get(keys.BASE_URL + "/car/getAllMakeCars").then((res) => {
    return res.data;
  });
};

// Confirm request by service provider
export const _confirmRequestByServiceProvider = (requestID) => {
  return axios
    .post(
      keys.BASE_URL + "/requests/confirmRequestByServiceProvider",
      { REQUEST_ID: requestID },
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
export const _CompleteRequestByServiceProvider = (requestID) => {
  return axios
    .post(
      keys.BASE_URL + "/requests/CarCompletedAtServiceProvider",
      { REQUEST_ID: requestID },
      { headers: { Authorization: "Bearer " + token.accessToken } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
       
      // if (e.response.status === 401) {
      //   return { success: false, error: "token" };
      // }
      console.log(e)
    });
};
// Update request status
export const _updateRequestStatus = (data) => {
  return axios
    .post(keys.BASE_URL + "/requests/updateRequestWithStatusId", data, {
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

// Create invoice
export const _createInvoice = (requestId) => {
  return axios
    .post(
      keys.BASE_URL + "/requests/CreateInvoice",
      { REQUEST_ID: requestId },
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
