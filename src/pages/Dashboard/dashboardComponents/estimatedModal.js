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
import { _createNewInvoice } from "../../../services/invoiceRequests";
const EstimatedModal = () => {
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
  const [activeOffers, setActiveOffers] = useState([
    {
      key: 0,
      text: 'No Offer',
      value: '0',
      image: {
        avatar: true , src: ''
      }
    }
  ]);
  const history = useHistory();
  useEffect(() => {
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getOffersByProviderID(serviceProviderID.SERVICE_PROVIDER_ID).then(
      (res) => {

        console.log("OffersInInvoice: " , res.result)
        if (!res.success) {
          if (res.error === "token") {
            history.push("/login");
            return;
          }
          return;
        }
        let activeData = [];
        // let inActiveData = []

        res.result.map((offer , index) => {
          
            activeOffers.push({
              key: offer.OFFER_ID,
              text: offer.OFFER_NAME + "" + offer.DISCOUNT_PERCENTAGE + " %",
              value: offer.DISCOUNT_PERCENTAGE,
              image: {
                avatar: true , src: offer.OFFER_IMAGE
              }
            });
        
          return activeOffers;
        });
        // setActiveOffers([{
        //   key: activeData.OFFER_ID,
        //   text: activeData.OFFER_NAME,
        //   value: activeData.OFFER_ID,
        //   image: {
        //     avatar: true , src: activeData.OFFER_IMAGE
        //   }
        // }]);

      }
    );
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "estimated") {
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


    const newInvoice = {

      USER_ID: data.UserId,

      SERVICE_ID: data.SERVICE_NAME,

      OFFER_PERCENTAGE: state.offerId,

      SERVICE_PROVIDER_ID: serviceProviderID.SERVICE_PROVIDER_ID,

      REQUEST_COST: 
        (parseFloat(state.carRecoveryCost) +
        parseFloat(state.serviceCost)) * ((100 - parseFloat(state.offerId)) /
        100) 
      ,
      SERVICE_COST: state.serviceCost,
      ESTIMATION_TIME: state.estimationTime,
      INVOICE_SERVICE_DETAILS: state.serviceDetails,
      CAR_RECOVERY_COST: state.carRecoveryCost,
      REQUEST_ID: data.id,
      USER_CAR_ID: data.CarId,
      SERVICE_FEES: state.serviceFees,
      SERVICE_VAT: state.serviceVat
      
    };



    _createNewInvoice(newInvoice).then((res) => {

      console.log("HAT EL INVOICE " , newInvoice)
    
      // localStorage.setItem("invoice", JSON.stringify(res.result));

      setState({ ...state, loading: false });

      setShowModal({ modalName: "success", data: { type: "null" } });

    });

    // ===================================+Toggle+========================================
    console.log("REQUEST ID : " , data.id)
      _CompleteRequestByServiceProvider(data.id).then((res) => {
    

        setUpdateRequests(3);
        window.location.reload();

      });

    // ===================================================================================


  
  };
  const handleOnChangeOffer = (e, data) => {
    setState({
      ...state,
      offerId: data.value,
    })

 }

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body details">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon name="times" />
          </div>
          <div className="title-container">
            <p>Invoice For ReqNo# {data.id}</p>
          </div>
          <div className="form-content">
            <Form>
              <p>Finish And Delivery Time</p>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form.Group widths="equal">
                  <Form.Field className="dateTimeStyle">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal" 
                      id="date-picker-inline"
                      label="Date"
                      value={state.date}
                      onChange={handleChangeDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }} 
                      disabled
                    />
                  </Form.Field>
                  <Form.Field className="dateTimeStyle">
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time"
                      value={state.time}
                      onChange={handleChangeTime}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Form.Field>
                  <Form.Field className="dateTimeStyle">
                   
                  </Form.Field>
                </Form.Group>
              </MuiPickersUtilsProvider>
              <p>Car Details</p>
              <Form.Group widths="equal">
                  <Form.Field>
                    <Form.Input label="Car Make" type="text" value={data.CAR_MAKE} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Input label="Car Modal" type="text" value={data.CAR_MODAL} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Input label="Car Year" type="text" value={data.CAR_YEAR} />
                  </Form.Field>
              </Form.Group>

              <Form.Group widths="equal">
                 <Form.Field>
                    <Form.Input label="Car Color" type="text" value={data.CAR_COLOR}/>
                    
                  </Form.Field>
                  <Form.Field>
                    <Form.Input label="Car Plate Number" type="text"  value={data.CAR_PLATE_NUMBER} />
                    
                  </Form.Field>
                  <Form.Field>
                    <Form.Input label="Car Description" type="text" value={
                                          data.CAR_MAKE +
                                          " , " +
                                          data.CAR_MODAL +
                                          " , " +
                                          data.CAR_YEAR
                                        }/>
                    
                  </Form.Field>
              </Form.Group>
              <p>Service Details</p>
              <Form.Group widths="equal">  
                 <Form.Field>
                    <Form.Input label="Service Name" type="text" value={data.SERVICE_NAME} />
                    
                  </Form.Field>
                  <Form.Field>
                    <Form.Input label="Service Cost (AED)" type="number" value={state.serviceCost}
                                       
                                       onChange={(e) =>{
                                        e.preventDefault()
                                       setState({ ...state, 
                                        
                                        serviceCost: e.target.value })
                                       }}/>
                    
                  </Form.Field>
                  <Form.Field >
                    <Form.Input label="Car Recovery Cost (AED)" type="number" value={state.carRecoveryCost}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            carRecoveryCost: e.target.value,
                                          })
                                        } />
                    
                  </Form.Field>
             </Form.Group>
             <Form.Group widths="equal">  
                 <Form.Field>
                                        
                 <Dropdown
                          labeled= {true}
                          placeholder='Apply Offer %'
                          fluid
                          selection
                          options={activeOffers}
                          Style=" margin-top: 23px;"
                          // defaultValue={activeOffers}
                          onChange={handleOnChangeOffer}
                          
                        />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input label="Request Cost in AED" type="number" value={
                                          (parseFloat(state.carRecoveryCost) +
                                          parseFloat(state.serviceCost)) * ((100 - parseFloat(state.offerId)) /
                                          100) 
                                        }
                                        
                                         />
                    
                  </Form.Field>
                 
             </Form.Group>

             <Form.Group widths="equal">  
                 <Form.Field>
                       <Form.Input label="Service Fee %" type="number" value={state.serviceFees}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            serviceFees: e.target.value,
                                          }) } />            
               
                  </Form.Field>
                  <Form.Field>
                              <Form.Input label="Service VAT %" type="number" value={state.serviceVat}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            serviceVat: e.target.value,
                                          }) }
                                        />
                    
                  </Form.Field>
                 
             </Form.Group>


              <Form.Field>
                <label htmlFor="details">Service Details</label>
                <TextArea
                  rows={3}
                  id="details"
                  placeholder="Details"
                  value={state.serviceDetails}
                  onChange={(e) =>
                    setState({
                      ...state,
                      serviceDetails: e.target.value,
                    })
                  }
                ></TextArea>
              </Form.Field>
            </Form>
          </div>

          <div className="summary-container">
            <div className="row justify-content-center">
                                <Col lg={12}>
                                  <Card className="checkout-order-summary">
                                    <CardBody>
                                      <div className="p-3 bg-light mb-4">
                                        <h5 className="font-size-14 mb-0">
                                          Invoice Details{" "}
                                          <span className="float-right ml-2">
                                            # { data.id  }
                                          </span>
                                        </h5>
                                      </div>
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
                                                  {data.customer}
                                                </h5>
                                              </td>
                                              <td>
                                                <h5 className="font-size-14 text-truncate text-dark">
                                                  {data.phonenumber}
                                                </h5>
                                              </td>
                                              
                                              <td>{  ((parseFloat(state.carRecoveryCost) +
                                          parseFloat(state.serviceCost)) * ((100 - parseFloat(state.offerId)) /
                                          100)) || 0 } AED</td>
                                            </tr>

                                            <tr>
                                              <td colSpan="2">
                                                <h6 className="m-0 text-right">
                                                  Sub Total:
                                                </h6>
                                              </td>
                                              <td>{  ((parseFloat(state.carRecoveryCost) +
                                          parseFloat(state.serviceCost)) * ((100 - parseFloat(state.offerId)) /
                                          100)) || 0 } AED</td>
                                            </tr>
                                            <tr>
                                              <td colSpan="3">
                                                <div className="bg-soft-primary p-3 rounded">
                                                  <h5 className="font-size-14 text-primary mb-0">
                                                    <i className="fas fa-percent mr-2"></i>{" "}
                                                    VAT{" "}
                                                    <span className="float-right">

                                                      {/* {((parseFloat(state.carRecoveryCost) +
                                          parseFloat(state.serviceCost)) * ((100 - parseFloat(state.offerId)) /
                                          100) * 0.1 /2) || 0}{" "} */}
                                                           
                                                           {state.serviceVat}{" "}  % 
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
                                                    {state.serviceFees}{" "}  %
                                                    </span>
                                                  </h5>
                                                </div>
                                              </td>
                                              
                                              
                                          </tbody>
                                        </Table>
                                        
                                      </div> 
                                    </CardBody>
                                  </Card>
                                </Col>
                              </div>
         
          </div>
          <div className="modal-action-btn">
            <Button content="Save" onClick={handleOnClickSubmit} />
            <Button content="Cancel" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatedModal;
