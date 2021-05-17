import axios from "axios";
import { keys } from "../config/keys";

const token = JSON.parse(localStorage.getItem("user") || "[]");


// Insert a new offer
export const _createNewInvoice = (data) => {
    return axios
      .post(keys.BASE_URL + "/invoices/insertInvoice", data, {
        headers: { Authorization: "Bearer " + token.accessToken },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
       
      
      });
  };
  

  export const _getInvoiceByInvoiceId = async (invoiceId) => {
    console.log("InvoiceId Request" , invoiceId)
    return axios
      .post( 
        keys.BASE_URL + "/invoices/getInvoiceByInvoiceId",
        {
          INVOICE_ID: invoiceId
        }
        
      )
      .then((res) => {
        console.log("res invoice request " , res.data)
        return res.data;
      })
      .catch((e) => {
        console.log("Error" , e)
        // if (e.response.status === 401) {
        //   return { success: false, error: "token" };
        // }
      });
  };