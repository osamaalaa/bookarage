import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Icon  } from "@material-ui/core";
import UpdateIcon from '@material-ui/icons/Update';
//import { Icon } from "@material-ui/core";
import { _getRequestsByStatusID  , _getAllInvoicesByServiceProviderId , _UpdatePaymentInvoiceToPaid} from "../../../../services/dashboardRequests";
import { useHistory } from "react-router-dom";
import StateContext from "../../../../component/context/stateContext";
import SweetAlert from "react-bootstrap-sweetalert";

import InvoiceCreatedModal from "../tabsComponents/InvoiceCreatedModal";

import SuccessModal from "../../../../shared/successModal";
//SweetAlert

const InvoicesCreatedTab = () => {
  const [state, setState] = useState({
    default_date: "",
    alert_confirm : false,
    success_confirm: true,
    dynamic_title: "",
    dynamic_description: "",
  });
  
  const [appointmentData, setAppointmentData] = useState([]);
  const [invoiceId, setInvoiceId] = useState("");
  //const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const { showModal, setShowModal } = useContext(StateContext);
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
      field: "PAYMENT_STATUS",
      headerName: "Payment Status",
      width: 180,
      renderCell: (params) => {
        return (
          <p
          className={`${
            params.value === null ? "badge badge-soft-warning font-size-12" : "badge badge-soft-success font-size-12"
          }`}
          >
           {params.value === null ? "Not Paid" : params.value} 
          </p>
        );
      },
    },
    {
      field: "Invoice Paid",
      width: 160,
      renderCell: (params) => {
        const onClick = () => {
         setState({ alert_confirm: true })
         console.log("clicked", params.id);
   
         setInvoiceId(params.id)
         _UpdatePaymentInvoiceToPaid(params.id).then((res) => {
          if (res.success) {
            console.log("osama")
            setShowModal({ modalName: "sucess", data: null });
          }
          // window.location.reload();
        
        });
          // setLoading(true);

          //  console.log("clicked");
          //  setShowModal({
          //   modalName: "invoiceCreated"
          // });
          // console.log("OSAMA")
          // setLoading(false);
          // console.log("alertConfirm", state.alert_confirm);
         

        };
        return (
          // <Icon className="view-icon" onClick={onClick}>
          //   visibility
          // </Icon>
          <div Style="margin-left: 31px;">
              
              <UpdateIcon className="view-icon" onClick={onClick}></UpdateIcon> 
              
          </div>
          
        );
      },
    },
  ];

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 10) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getAllInvoicesByServiceProviderId(serviceProviderID.SERVICE_PROVIDER_ID).then(
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
          res.result.map((resp) => {
            return appData.push({
              id: resp.INVOICE_ID,
              status: "Sent To The Customer",
              customer: resp.firstname + " " + resp.lastname,
              phonenumber: resp.phonenumber,
              OFFER_PERCENTAGE: resp.OFFER_PERCENTAGE + " %",
              REQUEST_COST: resp.REQUEST_COST + " AED",
              time: resp.ESTIMATION_TIME,
              SERVICE_COST: resp.SERVICE_COST + " AED",
              CAR_RECOVERY_COST: resp.CAR_RECOVERY_COST + " AED",
              PAYMENT_STATUS_ID: resp.PAYMENT_STATUS_ID,
              PAYMENT_STATUS: resp.PAYMENT_STATUS
            });
          });

          console.log("INVOICE_CREATED " , res.result)
          setAppointmentData(appData);
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, [updateRequests, history]);



  // Handle on change date

  const handleDefault = (date) => {

    setState({ ...state, default_date: date });

  };
  const handleOnClickUpdateInvoice = (invoiceId) => {

    
    // setUpdateNow("");
     
   
  };
  return (
    <React.Fragment>
    {/* <SuccessModal /> */}
    <TabPane tabId="11" className="p-3">
       {/* {state.alert_confirm ? (
            <SweetAlert
            title="Are you sure?"
            warning
            showCancel
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={
              handleOnClickUpdateInvoice(invoiceId)
                

            }
            onCancel={() =>
                setState({
                    alert_confirm: false,
                })
            }
            >
            The invoice Will be updating to paid 
            </SweetAlert>
        ) : null} */}
      {/* <InvoiceCreatedModal /> */}
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Inovices Paid</h3>
            <div className="d-flex align-items-center">
              <img src={dateIcon} alt="date" className="mr-2" />
              <span>Fitler By Date</span>
              <div className="date-filter-input ml-3"> 
                <DatePicker
                  className="date-input"
                  selected={state.default_date}
                  onChange={handleDefault}
                  placeholderText="From"
                />
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
    </React.Fragment>
  );
};

export default InvoicesCreatedTab;
