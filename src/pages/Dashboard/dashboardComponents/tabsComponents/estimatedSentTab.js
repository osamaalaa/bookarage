import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Icon } from "@material-ui/core";
import { _getAllInvoicesPaidByServiceProviderId , _getRequestsByStatusID  , _updateRequestStatus, _getAllInvoicesByServiceProviderId , _UpdatePaymentInvoiceToPaid } from "../../../../services/dashboardRequests";
import { useHistory } from "react-router-dom";
import StateContext from "../../../../component/context/stateContext";
import UpdateIcon from '@material-ui/icons/Update';
const EstimatedSentTab = () => {
  const [state, setState] = useState({
    default_date: "",
  });
  const { updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const [appointmentData, setAppointmentData] = useState([
    {
      id: 2,
      CAR_MODAL: "honda",
      customer: "yehia",
      phonenumber: "01000",
      service: "repair",
      time: "22 jan",
      technician: "",
      status: "desc",
      arrived: "Arrived",
      Diagnosis: 2,
    },
  ]);
  const history = useHistory();
  const { setShowModal } = useContext(StateContext);

  const columns = [
    { field: "id", headerName: "Invoice Id", width: 180 },
   
    {
      field: "status",
      headerName: "Status",
      width: 250,
      renderCell: (params) => {
        return (
          <p
            className={`tableStatus ${
              params.value === "Invoice Created" ? "yellowColor" : "greenColor"
            }`}
          >
            {params.value}
          </p>
        );
      },
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 180,
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      sortable: true,
      width: 180,
    },
    {
      field: "CAR_MAKE",
      headerName: "Car Make",
      sortable: true,
      width: 180,
    },
    {
      field: "CAR_MODAL",
      headerName: "Car Modal",
      sortable: true,
      width: 180,
    },
    {
      field: "CAR_PLATE_NUMBER",
      headerName: "Plate Number",
      sortable: true,
      width: 180,
    },

   
    {
      field: "time",
      headerName: "Complete Date",
      sortable: true,
      width: 180,
    },
  
    {
      field: "SERVICE_COST",
      headerName: "Service Cost",
      width: 180,
    },
    {
      field: "CAR_RECOVERY_COST",
      headerName: "Car Recovery Cost",
      width: 180,
    },
    {
      field: "OFFER_PERCENTAGE",
      headerName: "Offer Percentage",
      width: 180,
    },
    {
      field: "REQUEST_COST",
      headerName: "Request Cost",
      width: 180,
    },
    {
      field: "REQUEST_STATUS_NAME",
      headerName: "Payment Status",
      width: 180,
      renderCell: (params) => {
        console.log("STATUS" , params)
        return (
          <p
          className={`${
            params.value === "Completed" ? "badge badge-soft-warning font-size-12" : "badge badge-soft-success font-size-12"
          }`}
          >
           {params.value === "Completed" ? "Not Paid" : params.value} 
          </p>
        );
      },
    },
  
  ];

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getAllInvoicesPaidByServiceProviderId(serviceProviderID.SERVICE_PROVIDER_ID).then(
        (res) => {
          
          if (!res.success) {
            if (res.error === "token") {
              history.push("/login");
              return;
            }
            setAppointmentData([]);
            return; 
          }
          
          let appData = [];

          console.log("Invoice" , res)
          res.result.map((resp) => {
            return appData.push({
              id: resp.INVOICE_ID,
              status: "Paid From Customer",
              customer: resp.firstname + " " + resp.lastname,
              phonenumber: resp.phonenumber,
              OFFER_PERCENTAGE: resp.OFFER_PERCENTAGE + " %",
              REQUEST_COST: resp.REQUEST_COST + " AED",
              time: resp.ESTIMATION_TIME,
              SERVICE_COST: resp.SERVICE_COST + " AED",
              CAR_RECOVERY_COST: resp.CAR_RECOVERY_COST + " AED",
              PAYMENT_STATUS_ID: resp.PAYMENT_STATUS_ID,
              PAYMENT_STATUS: resp.PAYMENT_STATUS,
              CAR_MAKE: resp.CAR_MAKE,
              CAR_MILEAGE : resp.CAR_MILEAGE,
              CAR_MODAL: resp.CAR_MODAL,
              CAR_PLATE_NUMBER: resp.CAR_PLATE_NUMBER,
              CAR_YEAR: resp.CAR_YEAR,
              REQUEST_ID: resp.REQUEST_ID,
              REQUEST_STATUS_NAME: resp.REQUEST_STATUS_NAME
            });
          });
            console.log("AppData: " , appData)
          setAppointmentData(appData);
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, [history]);

  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };
  return (
    <TabPane tabId="8" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">

          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Invoice Paid</h3>
            <div className="d-flex align-items-center">
              <img src={dateIcon} alt="date" className="mr-2" />
              <span>Fitler By Date</span>
              <div className="date-filter-input ml-3">
                
                <DatePicker
                  className="date-input"
                  selected={state.default_date}
                  onChange={handleDefault}
                  placeholderText="From" />
                <img src={arrowDate} alt="date" className="mr-2 date-arrow" />

              </div>

              <div className="date-filter-input ml-3">
                <DatePicker
                  className="date-input"
                  selected={state.default_date}
                  onChange={handleDefault}
                  placeholderText="To"
                />
                <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <DataGrid rows={appointmentData} columns={columns} pageSize={5} />
          </div>
        </Col>

      </Row>

    </TabPane>
  );
};

export default EstimatedSentTab;
