import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Icon } from "semantic-ui-react";
// import { Icon } from "semantic-ui-react";

import {
  _getRequestsByStatusID,
  _CompleteRequestByServiceProvider,
} from "../../../../services/dashboardRequests";

import { useHistory } from "react-router-dom";

import { _getOffersByProviderID } from "../../../../services/offersRequests";

import StateContext from "../../../../component/context/stateContext";

import {
  Form,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

import { _createNewInvoice } from "../../../../services/invoiceRequests";

import {
  Card,
  CardBody,
  TabContent,
  NavItem,
  NavLink,
  Label,
  Input,
  Progress,
} from "reactstrap";

// import UiButtons from "../pages/UI Elements/ui-buttons";
import classnames from "classnames";

const WorkInProgressTab = (props) => {
  const [state, setState] = useState({
    default_date: "",
    serviceProviderID: "",
    serviceId: "",
    offerId: "",
    requestCost: "",
    estimationTime: "",

    userId: "",
    serviceCost: "",
    serviceDetails: "",
    carRecoveryCost: "",

    loading: false,
  });
  const { setShowModal, updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const { className } = props;
  const [modal, setModal] = useState(false);
  //const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);
  const [activeOffers, setActiveOffers] = useState([]);

  const toggle = () => setModal(!modal);
  const toggleTabProgress = (tab) => {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 5) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(20);
        }
        if (tab === 2) {
          setprogressValue(40);
        }
        if (tab === 3) {
          setprogressValue(60);
        }
        if (tab === 4) {
          setprogressValue(80);
        }
        if (tab === 5) {
          setprogressValue(100);
        }
      }
    }
  };
  const [appointmentData, setAppointmentData] = useState([
    // {
    //   id: 3,
    //   CAR_MODAL: "Honda civic",
    //   customer: "Yehia Fouad",
    //   phonenumber: "+201000676611",
    //   service: "Repair",
    //   time: "27 Jan 2020",
    //   technician: "",
    //   arrived: "Arrived",
    //   details: 3,
    // },
  ]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "status",
      headerName: "Status",
      width: 250,
      renderCell: (params) => {
        return (
          <p
            className={`tableStatus ${
              params.value === "In Progress" ? "yellowColor" : "greenColor"
            }`}
          >
            {params.value}
          </p>
        );
      },
    },
    {
      field: "CAR_MODAL",
      headerName: "Car Model",
      width: 180,
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
      field: "SERVICE_NAME",
      headerName: "Service",
      width: 180,
    },
    {
      field: "time",
      headerName: "Estimated Time",
      sortable: true,
      width: 180,
    },
    {
      field: "UserId",
      headerName: "UserId",
      sortable: true,
      width: 180,
    },
    {
      field: "arrived",
      headerName: "Arrived",
      width: 180,
    },
    {
      field: "details",

      width: 120,
      renderCell: (params) => {
        
        const onClick = () => {
          console.log(params.row);
          const index = appointmentData.findIndex(
            (obj) => obj.REQUEST_ID === params.value
          );
          console.log(index);
          setShowModal({
            modalName: "details",
            data: {
              requestId: params.row.id,
              type: "inProgress",
              data: params.row,
            },
          });
        };
        return (
          <div className="view-container">
            <Icon name="eye" onClick={onClick} />
          </div>
        );
      },
    },
    {
      field: "CarReady",

      width: 120,
      renderCell: (params) => {
        const onClick = () => {
          // ==================+Toggle+========================================
          // _CompleteRequestByServiceProvider(params.row.id).then((res) => {
          //    console.log(res)
          //   if (res.success) {
          //     const arr = [...appointmentData];
          //     const index = appointmentData.findIndex(
          //       (obj) => obj.id === params.value
          //     );
          //     arr.splice(index, 1);
          //     setAppointmentData(arr);
          //     setUpdateRequests(3);
          //   }
          // });
          console.log(appointmentData);
          setModal(!modal);
          // ==================================================================
        };
        const onClickModal = () => {
          console.log("osama", params.row.id);

          setState({ ...state, loading: true });

          const serviceProviderID = JSON.parse(
            localStorage.getItem("serviceProviderData") || "[]"
          );
          console.log("DATE", state.estimationTime);

          const newInvoice = {

            USER_ID: appointmentData[0].UserId,

            SERVICE_ID: appointmentData[0].service,

            OFFER_PERCENTAGE: state.offerId,

            SERVICE_PROVIDER_ID: serviceProviderID.SERVICE_PROVIDER_ID,

            REQUEST_COST: state.requestCost,

            SERVICE_COST: state.serviceCost,

            ESTIMATION_TIME: state.estimationTime,

            INVOICE_SERVICE_DETAILS: state.serviceDetails,

            CAR_RECOVERY_COST: state.carRecoveryCost,

            REQUEST_ID: appointmentData[0].id,

            USER_CAR_ID: appointmentData[0].CarId
            
          };

          _createNewInvoice(newInvoice).then((res) => {
            console.log("responce Create Invoice", res);
            // localStorage.setItem("invoice", JSON.stringify(res.result));

            setState({ ...state, loading: false });

            setShowModal({ modalName: "success", data: { type: "null" } });

          });

          // ===================================+Toggle+========================================

          _CompleteRequestByServiceProvider(params.row.id).then((res) => {
            const arr = [...appointmentData];

            const index = appointmentData.findIndex(
              (obj) => obj.id === params.value
            );

            arr.splice(index, 1);

            setAppointmentData(arr);

            setUpdateRequests(3);
            window.location.reload();

          });

          // ===================================================================================


          setModal(false);
        };
        const onChangeFunc = e => {
          e.preventDefault();
          this.setState({ email: e.target.value });
        };
        // console.log("Osama" , appointmentData[0].customer)
        return (
          // <Button className="view-icon" onClick={onClick}>
          //   Confirm
          // </Button>
          // <p>Confirm</p>
          // <Icon className="view-icon" name="angle right" />
          <div className="confirmTableAction" onClick={onClick}>
            <p>Finished</p>
            <Icon className="view-icon" name="angle right" />
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Invoice Details</ModalHeader>
              <ModalBody>
                {/* ====================================Create Invoice======================= */}
                <Row>
                  <Col lg="12">
                    <Card>
                      <CardBody>
                        <div id="progrss-wizard" className="twitter-bs-wizard">
                          <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: activeTabProgress === 1,
                                })}
                                onClick={() => {
                                  toggleTabProgress(1);
                                }}
                              >
                                <span className="step-number">01</span>
                                <span className="step-title">
                                  Customer Info
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: activeTabProgress === 2,
                                })}
                                onClick={() => {
                                  toggleTabProgress(2);
                                }}
                              >
                                <span className="step-number">02</span>
                                <span className="step-title">Car Details</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: activeTabProgress === 3,
                                })}
                                onClick={() => {
                                  toggleTabProgress(3);
                                }}
                              >
                                <span className="step-number">03</span>
                                <span className="step-title">
                                  Service Details
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: activeTabProgress === 4,
                                })}
                                onClick={() => {
                                  toggleTabProgress(4);
                                }}
                              >
                                <span className="step-number">04</span>
                                <span className="step-title">
                                  Invoice Details
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: activeTabProgress === 5,
                                })}
                                onClick={() => {
                                  toggleTabProgress(5);
                                }}
                              >
                                <span className="step-number">05</span>
                                <span className="step-title">
                                  Confirm Details
                                </span>
                              </NavLink>
                            </NavItem>
                          </ul>

                          <div id="bar" className="mt-4">
                            <Progress
                              color="success"
                              striped
                              animated
                              value={progressValue}
                            />
                          </div>

                          <TabContent
                            activeTab={activeTabProgress}
                            className="twitter-bs-wizard-tab-content"
                          >
                            <TabPane tabId={1}>
                              <Row>
                                <Col lg="12">
                                  <FormGroup>
                                    <Label for="basicpill-firstname-input14">
                                      Full name
                                    </Label>
                                    <Input
                                      type="text"
                                      name="full-name"
                                      id="exampleEmail"
                                      value={appointmentData[0].customer}
                                    />
                                  </FormGroup>
                                </Col>
                                {/* <Col lg="6">
                                                  <FormGroup>
                                                      <Label for="basicpill-lastname-input15">Last name</Label>
                                                      <Input type="text" className="form-control" id="basicpill-lastname-input15" value={appointmentData[0].customer}/>
                                                  </FormGroup>
                                              </Col> */}
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-phoneno-input16">
                                      Phone
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input16"
                                      value={appointmentData[0].phonenumber}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-email-input17">
                                      Email
                                    </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input17"
                                      value={appointmentData[0].email}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-phoneno-input16">
                                      City
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input16"
                                      value={appointmentData[0].city}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-email-input17">
                                      Country
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-email-input17"
                                      value={appointmentData[0].country}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <FormGroup>
                                    <Label for="basicpill-address-input2">
                                      Address
                                    </Label>
                                    <textarea
                                      id="basicpill-address-input2"
                                      className="form-control"
                                      rows="2"
                                      value={
                                        appointmentData[0].country +
                                        " , " +
                                        appointmentData[0].city
                                      }
                                    ></textarea>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId={2}>
                              <div>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-pancard-input18">
                                        Car Make
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-pancard-input18"
                                        value={appointmentData[0].CAR_MAKE}
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-vatno-input19">
                                        Car Modal.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-vatno-input19"
                                        value={appointmentData[0].CAR_MODAL}
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-cstno-input20">
                                        Car Color.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cstno-input20"
                                        value={appointmentData[0].CAR_COLOR}
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-servicetax-input21">
                                        Car Year.
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-servicetax-input21"
                                        value={appointmentData[0].CAR_YEAR}
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-companyuin-input22">
                                        Plate Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-companyuin-input22"
                                        value={
                                          appointmentData[0].CAR_PLATE_NUMBER
                                        }
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-declaration-input23">
                                        Car Description
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-Declaration-input23"
                                        value={
                                          appointmentData[0].CAR_MAKE +
                                          " , " +
                                          appointmentData[0].CAR_MODAL +
                                          " , " +
                                          appointmentData[0].CAR_YEAR
                                        }
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                            </TabPane>
                            <TabPane tabId={3}>
                              <div>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-namecard-input24">
                                        Car Recovery Cost in AED
                                      </Label>

                                      <Input
                                        type="number"
                                        
                                        placeholder="Enter Car Recovery Cost"
                                        autoFocus="autofocus"
                                        value={state.carRecoveryCost}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            carRecoveryCost: e.target.value,
                                          })
                                        }
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label>Service Name</Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input24"
                                        value={appointmentData[0].SERVICE_NAME}
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-cardno-input25">
                                        Service cost in AED
                                      </Label>
                                      <Input
                                        type="number"
                                        id="basicpill-cardno-input25"
                                        placeholder="Enter Service Cost"
                                        value={state.serviceCost}
                                        // onChange={(e) =>
                                        //   setState({
                                        //     ...state,
                                        //     serviceCost: e.target.value,
                                        //   })
                                        // }
                                         onChange={(e) =>{
                                          e.preventDefault()
                                         setState({ ...state, 
                                          
                                          serviceCost: e.target.value })
                                         }}
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-expiration-input27">
                                        Complete Request Date
                                      </Label>
                                      <Input
                                        type="date"
                                        className="form-control"
                                        id="basicpill-expiration-input27"

                                        value={state.estimationTime}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            estimationTime: e.target.value,
                                          })
                                        }
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-cardno-input25">
                                        Apply Offer in %
                                      </Label>

                                      <select
                                        className="form-control"
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            offerId: e.target.value,
                                          })
                                        }
                                      >
                                        <option value="0">Select Offer</option>
                                        {activeOffers.length > 0 &&
                                          activeOffers.map((offer, i) => (
                                            <option
                                              key={i}
                                              value={offer.DISCOUNT_PERCENTAGE}
                                            >
                                              {offer.OFFER_NAME}{" "}
                                              {offer.DISCOUNT_PERCENTAGE} %
                                            </option>
                                          ))}
                                      </select>
                                      {/* <Input type="text" className="form-control" id="basicpill-cardno-input25" placeholder="Enter Offer Percentage"/> */}
                                    </FormGroup>
                                  </Col>

                                  <Col lg="6">
                                    <FormGroup>
                                      <Label for="basicpill-expiration-input27">
                                        Total Cost in AED
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-expiration-input27"
                                        value={
                                          (parseFloat(state.carRecoveryCost) +
                                          parseFloat(state.serviceCost)) *
                                            ((100 - parseFloat(state.offerId)) /
                                              100) || 0
                                        }
                                        onFocus={(e) =>
                                          setState({
                                            ...state,
                                            requestCost: e.target.value,
                                          })
                                        } 
                                      
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg="12">
                                    <FormGroup>
                                      <Label for="basicpill-card-verification-input26">
                                        Service Details
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-card-verification-input26"
                                        placeholder="Enter Service Details"
                                        value={state.serviceDetails}
                                        onChange={(e) =>
                                          setState({
                                            ...state,
                                            serviceDetails: e.target.value,
                                          })
                                        }
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                            </TabPane>
                            <TabPane tabId={4}>
                              <div className="row justify-content-center">
                                <Col lg={12}>
                                  <Card className="checkout-order-summary">
                                    <CardBody>
                                      <div className="p-3 bg-light mb-4">
                                        <h5 className="font-size-14 mb-0">
                                          Invoice Details{" "}
                                          <span className="float-right ml-2">
                                            # {Math.floor(Math.random() * 101)  }
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
                                                Service Name
                                              </th>
                                              <th
                                                className="border-top-0"
                                                scope="col"
                                              >
                                                Service Descrption
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
                                                  {appointmentData[0].service}
                                                </h5>
                                              </td>
                                              <td>
                                                <h5 className="font-size-14 text-truncate text-dark">
                                                  {state.serviceDetails}
                                                </h5>
                                              </td>
                                              <td>{state.requestCost} AED</td>
                                            </tr>

                                            <tr>
                                              <td colSpan="2">
                                                <h6 className="m-0 text-right">
                                                  Sub Total:
                                                </h6>
                                              </td>
                                              <td>{state.requestCost} AED</td>
                                            </tr>
                                            <tr>
                                              <td colSpan="3">
                                                <div className="bg-soft-primary p-3 rounded">
                                                  <h5 className="font-size-14 text-primary mb-0">
                                                    <i className="fas fa-percent mr-2"></i>{" "}
                                                    VAT{" "}
                                                    <span className="float-right">

                                                      {parseFloat(
                                                        state.requestCost
                                                      ) * 0.1 /2}{" "}
                                                           
                                                                    AED
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

                                                      {parseFloat(
                                                        state.requestCost
                                                      ) * 0.1 /2}{" "}
                                                           
                                                                    AED
                                                    </span>
                                                  </h5>
                                                </div>
                                              </td>
                                            <tr>
                                              <td colSpan="2">
                                                <h6 className="m-0 text-right">
                                                  Total:
                                                </h6>
                                              </td>
                                              <td>
                                                {parseFloat(state.requestCost) *
                                                  0.1 +
                                                  parseInt(
                                                    state.requestCost
                                                  )}{" "}
                                                AED
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </div>
                              {/* <Button color="primary"  onClick={onClickModal} Style="width: 100%;">Done</Button> */}
                            </TabPane>
                            <TabPane tabId={5}>
                              <Form>
                                <div className="row justify-content-center">
                                  <Col lg="6">
                                    <div className="text-center">
                                      <div className="mb-4">
                                        <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                      </div>
                                      <div>
                                        <h5>Created Successfully</h5>
                                        <p className="text-muted">
                                          If anything happens please contact us
                                          +9665877665
                                        </p>
                                      </div>
                                    </div>
                                  </Col>
                                </div>
                                <Button
                                  color="primary"
                                  onClick={onClickModal}
                                  Style="width: 100%;"
                                >
                                  Done
                                </Button>
                              </Form>
                            </TabPane>
                          </TabContent>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                {/* ====================================Create Invoice======================= */}
              </ModalBody>
              <ModalFooter>
                {/* <ul className="pager wizard twitter-bs-wizard-pager-link">
                    <li className={activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress - 1);} }>Previous</Link></li>
                    <li className={activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress + 1);} }>Next</Link></li>
                  </ul> */}
                <Button
                  color="primary"
                  className={activeTabProgress === 1 ? "previous " : "previous"}
                  disabled={activeTabProgress === 1}
                  onClick={() => {
                    toggleTabProgress(activeTabProgress - 1);
                  }}
                >
                  Previous
                </Button>{" "}
                <Button
                  color="primary"
                  className={activeTabProgress === 1  ? "next" : "next"}
                  disabled={activeTabProgress === 5}
                  onClick={() => {
                    toggleTabProgress(activeTabProgress + 1);
                  }}
                >
                  Next
                </Button>{" "}
                {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                {/* <Button color="primary" className={activeTabProgress === 1 ? "previous disabled" : "previous"} onClick={toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={toggle}>Cancel</Button> */}
              </ModalFooter>
            </Modal>
          </div>
        );
      },
    },
  ];
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 4) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getRequestsByStatusID(serviceProviderID.SERVICE_PROVIDER_ID, 5).then(
        (res) => {
          console.log(res);
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
              id: resp.REQUEST_ID,
              status: "Work in Progress",
              CAR_MODAL: resp.CAR_MAKE + " " + resp.CAR_MODAL,
              customer: resp.firstname + " " + resp.lastname,
              city: resp.city,
              country: resp.country,
              phonenumber: resp.phonenumber,
              SERVICE_NAME: resp.SERVICE_NAME,
              time: resp.REQUEST_DATE,
              UserId: resp.USER_ID,
              CarId: resp.USER_CAR_ID,
              CAR_IMAGE: resp.CAR_IMAGE[0].CAR_PHOTO_PATH,
              CAR_CHASSIS_NUMBER: resp.CAR_CHASSIS_NUMBER, 
              CAR_YEAR: resp.CAR_YEAR,
              CAR_PLATE_NUMBER: resp.CAR_PLATE_NUMBER,
              CAR_MAKE: resp.CAR_MAKE,
              CAR_COLOR: resp.CAR_COLOR,
              CAR_MILEAGE: resp.CAR_MILEAGE,
              email: resp.email,
            
              REQUEST_DATE: resp.REQUEST_DATE,
              UPDATED_AT: resp.UPDATED_AT,
              arrived: "Arrived",
            });
          });
          setAppointmentData(appData);
        }
      );
    }

    _getOffersByProviderID(serviceProviderID.SERVICE_PROVIDER_ID).then(
      (res) => {
        if (!res.success) {
          if (res.error === "token") {
            history.push("/login");
            return;
          }
          return;
        }
        let activeData = [];
        // let inActiveData = []

        res.result.map((offer) => {
          
            activeData.push(offer);
        
          return activeData;
        });
        setActiveOffers(activeData);
        // setInactiveOffers(inActiveData)
      }
    );

    return () => {
      isMounted = false;
    };
  }, [updateRequests, history]);

  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };

  return (
    <TabPane tabId="7" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Work In Progress</h3>
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
          {/* <div>
            <MuiDataTable
              data={data}
              columns={columns3}
              options={options}
              title={"User Data"}
            />
          </div> */}
        </Col>
      </Row>
    </TabPane>
  );
};

export default WorkInProgressTab;
