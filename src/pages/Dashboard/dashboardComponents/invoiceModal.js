import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Icon, TextArea } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
import { useHistory } from "react-router-dom";
import { Col, Card, CardBody , Table } from "reactstrap";
//import DateTimePicker from "react-datetime-picker";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import PartsForm from "./components/partsForm";
import { Fragment } from "react";
import { Dropdown } from 'semantic-ui-react'
import {
  _getRequestsByStatusID,
  _CompleteRequestByServiceProvider,
} from "../../../services/dashboardRequests";
import { _getOffersByProviderID } from "../../../services/offersRequests";
import { _createNewInvoice , _getInvoiceByInvoiceId} from "../../../services/invoiceRequests";
const InvoiceModal = () => {
  const [open, setOpen] = useState(false);
  const { showModal } = useContext(StateContext);
  const [partsCount, setPartsCount] = useState([1]);
  const [data, setData] = useState([]);
  const { setShowModal, updateRequests, setUpdateRequests } = useContext(
    StateContext
  );

  const [state, setState] = useState({
    date: new Date(),
    time: null,
    parts: true,
    serviceCost: "",
    serviceDetails: "",
    carRecoveryCost: "",
    requestCost: "",
    offerId: "",
    loading: false,
    estimationTime: new Date(),
    serviceVat: "",
    serviceFees: "",
  });

  const history = useHistory();
  useEffect(() => {

    
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "invoice") {
      if (showModal.data !== null) {

        setData(showModal.data);
       
      } else {
        setData("");
      }
      setOpen(true);
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };


  }, [showModal]);

  const handleChangeDate = (e, { value }) => {
    setState({ ...state, date: value });
  };
  const handleChangeTime = (e, { value }) => {
    setState({ ...state, time: value });
  };
  const handleOnChangeCheckbox = (e, { checked, value }) => {
    if (checked) {
      setState({ ...state, parts: true });
    } else {
      setState({ ...state, parts: false });
    }
  };

  const handleOnClickAddMore = () => {
    const newPart = partsCount[partsCount.length - 1] + 1;
    setPartsCount((prev) => [...prev, newPart]);
  };
 
  const handleOnClickSubmit = () => {
    setState({ ...state, loading: true });

    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );



 


  
  };
  
  console.log("Invoice Data Modal: " , data)
  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body details">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon name="times" />
          </div>
          <div className="title-container">
            <p>Invoice # {data.INVOICE_ID}</p>
          </div>
          <div className="summary-container">
            <div className="row justify-content-center">
                                <Col lg={12}>
                                  <Card className="checkout-order-summary">
                                    <CardBody>
                                     
                                      <div className="table-responsive">
                                        <Table className="table-centered mb-0 table-nowrap">
                                          <thead>
                                            <tr>
                                              <th
                                                className="border-top-0"
                                                style={{ width: "110px" }}
                                                scope="col"
                                              >
                                                Customer Name
                                              </th>
                                              <th
                                                className="border-top-0"
                                                scope="col"
                                              >
                                                Phone Number
                                              </th>
                                             
                                              
                                              <th
                                                className="border-top-0"
                                                scope="col"
                                              >
                                                Price
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <h5 className="font-size-14 text-truncate text-dark">
                                                  {data.firstname + " " + data.lastname}
                                                </h5>
                                              </td>
                                              <td>
                                                <h5 className="font-size-14 text-truncate text-dark">
                                                  {data.phonenumber}
                                                </h5>
                                              </td>
                                            
                                            </tr>

                                            <tr>
                                              <td colSpan="2">
                                                <h6 className="m-0 text-right">
                                                  Sub Total:
                                                </h6>
                                              </td>
                                              <td> {data.REQUEST_COST} AED</td>
                                            </tr>
                                            <tr>
                                              <td colSpan="3">
                                                <div className="bg-soft-primary p-3 rounded">
                                                  <h5 className="font-size-14 text-primary mb-0">
                                                    <i className="fas fa-percent mr-2"></i>{" "}
                                                    VAT{" "}
                                                    <span className="float-right">

                                                    
                                                           
                                                           {data.SERVICE_VAT}{" "}  % 
                                                    </span>
                                                  </h5>
                                                </div>
                                              </td>

                                             
                                            </tr>
                                            <td colSpan="3">
                                                <div className="bg-soft-primary p-3 rounded">
                                                  <h5 className="font-size-14 text-primary mb-0">
                                                    <i className="fas fa-percent mr-2"></i>{" "}
                                                    Service Fees{" "}
                                                    <span className="float-right">
                                                    {data.SERVICE_FEES}{" "}  %
                                                    </span>
                                                  </h5>
                                                </div>
                                              </td>
                                              <tr>
                                              <td colSpan="2">
                                                <h6 className="m-0 text-right">
                                                  TOTAL REQUEST :
                                                </h6>
                                              </td>
                                              <td> {data.TOTAL_REQUEST} AED</td>
                                            </tr>
                                              
                                          </tbody>
                                        </Table>
                                        
                                      </div> 
                                    </CardBody>
                                  </Card>
                                </Col>
                              </div>
         
          </div>
          <div className="modal-action-btn">
            <Button content="Mark As Completed" onClick={handleOnClickSubmit} />
            <Button content="Cancel" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
