import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import BarApexChart from "../AllCharts/apex/barchart";

//import dateIcon from "../../assets/images/date-ic.svg";
import darkStart from "../../assets/images/dark-star-ic.svg";
//import autoRepair from "../../assets/images/auto-repair.png";
import calIcon from "../../assets/images/cal-ic.svg";
import LocIcon from "../../assets/images/loc-ic.svg";
import arrowRight from "../../assets/images/arrow-right-ic.svg";
import vistors from "../../assets/images/vistors-ic.svg";
import requestsIcon from "../../assets/images/Requests-ic.svg";
import arrowUp from "../../assets/images/arrow-up-ic.svg";
import star from "../../assets/images/star-ic.svg";
import emptyStar from "../../assets/images/star-empty-ic.svg";
import Sstar from "../../assets/images/s-star-ic.svg";
import SemptyStar from "../../assets/images/s-star-empty-ic.svg";
import { Link } from "react-router-dom";
import Rating from "react-rating";
//Dropzone
import Dropzone from "react-dropzone";
import SuccessModal from "../../shared/successModal";


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
//import Breadcrumb from "../../component/Common/breadcrumb";
import DashboardCards from "./dashboardComponents/dashboardCards";
import CreateAppointmentModal from "./dashboardComponents/createAppointmentModal";
import DetailsModal from "./dashboardComponents/detailsModal";
import InvoiceCreatedModal from "./dashboardComponents/tabsComponents/InvoiceCreatedModal";
import InvoiceViewModal from "./dashboardComponents/invoiceModal";
import "../../assets/css/dashboard.css";
import EstimatedModal from "./dashboardComponents/estimatedModal";
import { _getRequestsCountByStatus } from "../../services/dashboardRequests";
import { _getAllEvents, _createNewEvent } from "../../services/eventsRequests";
import moment from "moment";
import {
  Form,
  FormGroup,
  //InputGroup,
  //InputGroupAddon,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  Card,
  CardBody,
  TabContent,
  NavItem,
  NavLink,
  Label,
  Input,
  Progress,
  //Container,
} from "reactstrap";
import { Col, Row, TabPane } from "reactstrap";
import classnames from "classnames";
//import { useHistory } from "react-router-dom";
import StateContext from "../../component/context/stateContext";
const Dashboard = (props) => {
  const [state, setState] = useState({
    workInProgress: 0,
    created: 0,
    totalReq: 0,
    eventName: "",
    eventType: "",
    eventStartDate: "",
    eventEndDate: "",
    eventDesc: "",
    eventCity: "",
    eventCountry: "",
    eventAdd: "",
    eventImage: "",
    loading: false,
  });
  const [events, setEvents] = useState([]);

  const [logo, setLogo] = useState("");
  const [providerName, setProviderName] = useState("");
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState("");
  //const history = useHistory();
  //const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { setShowModal, updateRequests } = useContext(StateContext);
  const toggleTabProgress = (tab) => {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab);
        if (tab === 1) {
          setprogressValue(25);
        }
        if (tab === 2) {
          setprogressValue(50);
        }
        if (tab === 3) {
          setprogressValue(75);
        }
        if (tab === 4) {
          setprogressValue(100);
        }
      }
    }
  };
  const toggle = () => setModal(!modal);
  const { className } = props;
  useEffect(() => {
    const serviceProvider = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    setLogo(serviceProvider.PROVIDER_LOGO_PATH);
    setProviderName(serviceProvider.PROVIDER_NAME);

    _getRequestsCountByStatus(serviceProvider.SERVICE_PROVIDER_ID).then(
      (res) => {
        setState({
          workInProgress: res.result[0].inProgress,
          created: res.result[0].created,
          totalReq: res.result[0].TotalCount,
        });
      }
    );

    _getAllEvents().then((res) => {
      console.log(res.data.result);
      // setState({ workInProgress: res.result[0].inProgress, created: res.result[0].created , totalReq: res.result[0].TotalCount  });
      setEvents(res.data.result);
    });
  }, []);
  const handleAcceptedFiles = (files) => {
    setState({ ...state, loading: true });
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    console.log("Files", files[0]);
    setSelectedFiles(files);
    //  setState({...state, eventImage: files})

    //  eventImage
    //  setState({})
  };
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const handleOnClickCreate = () => {
    setState({ ...state, loading: true });

    console.log(selectedFiles[0]);

    const serviceProvider = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );

    console.log(state.eventName);

    const newEvent = new FormData();
    newEvent.append("SERVICE_PROVIDER_ID", serviceProvider.SERVICE_PROVIDER_ID);
    newEvent.append("event_name", state.eventName);
    newEvent.append("event_photo", selectedFiles[0]);
    newEvent.append("event_start_time", state.eventStartDate);
    newEvent.append("event_end_time", state.eventEndDate);
    newEvent.append("event_description", state.eventDesc);
    newEvent.append("event_city", state.eventCity);
    newEvent.append("event_country", state.eventCountry);
    newEvent.append("event_type", state.eventType);

    _createNewEvent(newEvent).then((res) => {
      console.log("response", res);
      // if (!res.success) {

      //   alert("Please Enter A valid Data For Events !")
      //   window.location.reload();
      //   return;
      // }
      setState({ ...state, loading: false });
    });
    setModal(false);
    setShowModal({ modalName: "success", data: null });
  };

  return (
    <React.Fragment>
      <CreateAppointmentModal />
      <DetailsModal />
      <EstimatedModal />
      <InvoiceCreatedModal />
      <InvoiceViewModal />
      {/* <SuccessModal /> */}
      <Row className="py-4 mt-3">
        {/* Dashboard cards */}
        <DashboardCards />
        <Col lg="8" className="pl-0">
          <Card>
            <CardBody className="revenues">
              <div className="w-100">
                <span className="sub-title">Total Revenues</span>
                <h4 className="card-title my-2">0 AED</h4>
                <div className="current_month_revenue d-flex align-items-center">
                  <img src={arrowUp} alt="arrow" />
                  <span className="green">0 AED</span>
                  <span className="ml-2">Current Month</span>
                </div>
              </div>
              <div dir="ltr">
                <BarApexChart />
              </div>
              <div className="w-100 d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={vistors} alt="visitors" />
                  <div className="d-flex flex-column ml-2">
                    <span className="sm-title">Daily Vistors</span>
                    <span className="total_chart">
                      0 <span className="green">0%</span>
                      <img src={arrowUp} alt="arrow" />
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center ml-5">
                  <img src={requestsIcon} alt="visitors" />
                  <div className="d-flex flex-column ml-2">
                    <span className="sm-title">Total Requests</span>
                    <span className="total_chart">
                      {state.totalReq} <span className="green">30%</span>
                      <img src={arrowUp} alt="arrow" />
                    </span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="revenues">
              <div className="w-100">
                <h4 className="card-title title-with-line my-2">
                  Requests Overview
                </h4>
              </div>
              <div dir="ltr">
                <BarApexChart />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="revenues">
              <div className="w-100">
                <h4 className="card-title title-with-line my-2">Reviews</h4>
              </div>
              <div className="row mx-0 w-100">
                <div className="col-lg-6 d-flex align-items-center flex-column">
                  <img
                    src={logo}
                    alt="logo"
                    Style="width: 20%;border-radius: 50px;"
                  />
                  <h3
                    className="mb-2"
                    Style={{ fontWeight: "bold", color: "#242424" }}
                  >
                    {providerName}
                  </h3>
                  <Rating
                    direction="rlt"
                    emptySymbol={<img src={star} alt="Star" className="icon" />}
                    fullSymbol={
                      <img src={emptyStar} alt="Empty Star" className="icon" />
                    }
                  />
                  <div className="d-flex align-items-center">
                    <img src={darkStart} alt="Dark Start" />
                    <span
                      className="ml-2 mt-2 text-capitalize"
                      style={{ color: "#8E8E8E" }}
                    >
                      0 stars from 0 reviews
                    </span>
                  </div>
                </div>
                <div className="col-lg-6" dir="ltr">
                  <BarApexChart />
                </div>
              </div>
              <div className="w-100 py-4 d-flex justify-content-between align-items-center header-rev">
                <h4 className="title-with-line request-title">
                  Latest Reviews
                </h4>
                <button className="bg-transparent border-0">
                  <span>View All</span>
                </button>
              </div>
              <ul className="list-unstyled reviews">
                {/* <li className="p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Steve Marshall</h5>
                    <span className="date">September 03</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <span className="car-modal">Kia - Cerato ( 2010 )</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={SemptyStar} alt="data" className="mr-1" />
                  </div>
                  <p className="mt-2">
                    Duis Pretium Gravida Enim, Vel Maximus Ligula Fermentum A.
                    Sed Rhoncus Eget Ex Id Egestas. Nam Nec Nisl Placerat,
                    Tempus Erat A, Condimentum Metus. Curabitur Nulla Nisi,
                    Lacinia At Lobortis At, Suscipit At Nibh. Proin Quis Lectus
                    Finibus, Mollis Purus Vitae, Rutrum Neque. Pellentesque
                    Habitant Morbi Tristique Senectus Et Netus Et Malesuada
                    Fames Ac Turpis Egestas. Etiam Sed Cursus Metus, Vel Viverra
                    Mi. Mauris Aliquet Egestas Eros Ac Placerat. Proin
                    Condimentum Ligula At Diam Euismod Fringilla Et Quis Lacus.
                  </p>
                </li> */}
                <li className="p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Bookarage</h5>
                    <span className="date">{Date.now()}</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <span className="car-modal">Bookarage Admin</span>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={Sstar} alt="data" className="mr-1" />
                    <img src={SemptyStar} alt="data" className="mr-1" />
                  </div>
                  <p className="mt-2">Welcome To bookarage !</p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="pl-0">
          <Card>
            <CardBody className="revenues p-4">
              <div className="w-100">
                <h4 className="title-with-line request-title">
                  Monthly Requests
                </h4>
              </div>
              <div className="w-100 mt-4 d-flex align-items-center monthly-requests justify-content-between flex-wrap">
                <div className="d-flex flex-column ml-2">
                  <h3>{state.totalReq}</h3>
                  <span>Total</span>
                </div>
                <div className="d-flex flex-column ml-2">
                  <h3>{state.created}</h3>
                  <span>Pending</span>
                </div>
                <div className="d-flex flex-column ml-2">
                  <h3>{state.workInProgress}</h3>
                  <span>Ongoing</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="events-card">
            <CardBody className="events">
              <div className="w-100 py-4 d-flex justify-content-between align-items-center header">
                <h4 className="title-with-line request-title">Events Around</h4>
                <button className="bg-transparent border-0" onClick={toggle}>
                  <span>Create Event</span>
                </button>
              </div>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Create Event</ModalHeader>
                <ModalBody>
                  {/* ====================================Create Event Modal======================= */}

                  <Row>
                    <Col lg="12">
                      <Card>
                        <CardBody>
                          <div
                            id="progrss-wizard"
                            className="twitter-bs-wizard"
                          >
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
                                    Event Information
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
                                  <span className="step-title">
                                    Event Details
                                  </span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active: state.activeTabProgress === 3,
                                  })}
                                  onClick={() => {
                                    toggleTabProgress(3);
                                  }}
                                >
                                  <span className="step-number">03</span>
                                  <span className="step-title">
                                    Event Image
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
                                    Confirm Detail
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
                                <div>
                                  <Form loading={state.loading}>
                                    <Row>
                                      <Col lg="6">
                                        <FormGroup>
                                          <Label for="basicpill-namecard-input24">
                                            Event Name
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-namecard-input24"
                                            value={state.eventName}
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventName: e.target.value,
                                              })
                                            }
                                          />
                                        </FormGroup>
                                      </Col>

                                      <Col lg="6">
                                        <FormGroup>
                                          <Label>Event Type</Label>
                                          <select
                                            className="custom-select"
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventType: e.target.value,
                                              })
                                            }
                                          >
                                            <option>Select Event Type</option>
                                            <option value="Service Providers">
                                              Service Providers
                                            </option>
                                            <option value="ShowRoom">
                                              Show Room
                                            </option>
                                          </select>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg="6">
                                        <FormGroup>
                                          <Label for="basicpill-cardno-input25">
                                            Event Start Date
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-cardno-input25"
                                            value={state.eventStartDate}
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventStartDate: e.target.value,
                                              })
                                            }
                                          />
                                        </FormGroup>
                                      </Col>

                                      <Col lg="6">
                                        <FormGroup>
                                          <Label for="basicpill-expiration-input27">
                                            Event End Date
                                          </Label>
                                          <Input
                                            type="date"
                                            className="form-control"
                                            id="basicpill-expiration-input27"
                                            value={state.eventEndDate}
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventEndDate: e.target.value,
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
                                            Event Description
                                          </Label>
                                          <textarea
                                            id="basicpill-address-input2"
                                            className="form-control"
                                            rows="5"
                                            value={state.eventDesc}
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventDesc: e.target.value,
                                              })
                                            }
                                          ></textarea>
                                          {/* <Input type="textarea" className="form-control" id="basicpill-card-verification-input26"/> */}
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={2}>
                                <div>
                                  <Form>
                                    <Row>
                                      <Col lg="6">
                                        <FormGroup>
                                          <Label for="basicpill-vatno-input19">
                                            Event Country
                                          </Label>
                                          <select
                                            className="custom-select"
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventCountry: e.target.value,
                                              })
                                            }
                                          >
                                            <option value="United Arab Emirates">
                                              Select Country
                                            </option>
                                            <option value="United Arab Emirates">
                                              United Arab Emirates
                                            </option>
                                          </select>
                                        </FormGroup>
                                      </Col>
                                      <Col lg="6">
                                        <FormGroup>
                                          <Label for="basicpill-pancard-input18">
                                            Event City
                                          </Label>
                                          {/* <Input type="text" className="form-control" id="basicpill-pancard-input18" value={state.eventCity} onChange={e => setState({ ...state,eventCity: e.target.value})}                                                               /> */}
                                          <select
                                            className="custom-select"
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventCity: e.target.value,
                                              })
                                            }
                                          >
                                            <option value="Abu Dhabi">
                                              Abu Dhabi
                                            </option>
                                            <option value="Ajmān">Ajmān</option>
                                            <option value="Al Ain">
                                              Al Ain
                                            </option>
                                            <option value="Al Awdah">
                                              Al Awdah
                                            </option>
                                            <option value="Al Mataf">
                                              Al Mataf
                                            </option>
                                            <option value="Dubai">Dubai</option>
                                            <option value="Sharjah">
                                              Sharjah
                                            </option>
                                            <option value="Fujairah">
                                              Fujairah
                                            </option>
                                          </select>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg="12">
                                        <FormGroup>
                                          <Label for="basicpill-cstno-input20">
                                            Event Address
                                          </Label>
                                          {/* <Input type="textarea" className="form-control" id="basicpill-cstno-input20"/> */}
                                          <textarea
                                            id="basicpill-address-input2"
                                            className="form-control"
                                            rows="5"
                                            value={state.eventAdd}
                                            onChange={(e) =>
                                              setState({
                                                ...state,
                                                eventAdd: e.target.value,
                                              })
                                            }
                                          ></textarea>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={3}>
                                <div>
                                  <Form>
                                    <Dropzone
                                      onDrop={(acceptedFiles) =>
                                        handleAcceptedFiles(acceptedFiles)
                                      } >
                                      {({ getRootProps, getInputProps }) => (
                                        <div className="dropzone">
                                          <div
                                            className="dz-message needsclick mt-2"
                                            {...getRootProps()}
                                          >
                                            <input {...getInputProps()} />
                                            <div className="mb-3">
                                              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                            </div>
                                            <h4>
                                              Drop files here or click to
                                              upload.
                                            </h4>
                                          </div>
                                        </div>
                                      )}
                                    </Dropzone>
                                    <div
                                      className="dropzone-previews mt-3"
                                      id="file-previews"
                                    >
                                      {selectedFiles.map((f, i) => {
                                        return (
                                          <Card
                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                            key={i + "-file"}
                                          >
                                            <div className="p-2">
                                              <Row className="align-items-center">
                                                <Col className="col-auto">
                                                  <img
                                                    data-dz-thumbnail=""
                                                    height="80"
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                  />
                                                </Col>
                                                <Col>
                                                  <Link
                                                    to="#"
                                                    className="text-muted font-weight-bold"
                                                  >
                                                    {f.name}
                                                  </Link>
                                                  <p className="mb-0">
                                                    <strong>
                                                      {f.formattedSize}
                                                    </strong>
                                                  </p>
                                                </Col>
                                              </Row>
                                            </div>
                                          </Card>
                                        );
                                      })}
                                    </div>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={4}>
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
                                  Style="margin: 12px; margin-left: 170px;"
                                  onClick={handleOnClickCreate}  >
                                  Done
                                </Button>
                              </TabPane>
                            </TabContent>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  {/* ====================================Create EVENT Modal======================= */}
                </ModalBody>
                <ModalFooter>
                  {/* <ul className="pager wizard twitter-bs-wizard-pager-link">
                    <li className={activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress - 1);} }>Previous</Link></li>
                    <li className={activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress + 1);} }>Next</Link></li>
                  </ul> */}
                  <Button
                    color="primary"
                    className={
                      activeTabProgress === 1 ? "previous disabled" : "previous"
                    }
                    onClick={() => {
                      toggleTabProgress(activeTabProgress - 1);
                    }}
                  >
                    Previous
                  </Button>{" "}
                  <Button
                    color="primary"
                    className={
                      activeTabProgress === 1 ? "next disabled" : "next"
                    }
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
              <ul className="list-unstyled">
                {events.length > 0 &&
                  events.map((event, i) => (
                    <li className="p-2 d-flex align-items-center" key={i}>
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          src={event.event_image}
                          alt="event"
                          className="img-event"
                        />
                        <div className="event-data">
                          <h5>{event.event_name}</h5>
                          <div className="d-flex align-items-center">
                            <img src={calIcon} alt="data" className="mr-2" />
                            <span>
                              {moment(event.event_start_time).format(
                                "DD MMM YY"
                              )}{" "}
                              -{" "}
                              {moment(event.event_end_time).format("DD MMM YY")}{" "}
                            </span>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <img src={LocIcon} alt="data" className="mr-2" />
                            <span>
                              {event.event_city} , {event.event_country}
                            </span>
                          </div>
                        </div>
                        <button className="bg-transparent border-0">
                          <img src={arrowRight} alt="arrow" />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default connect(null, { setBreadcrumbItems })(Dashboard);
