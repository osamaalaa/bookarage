import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  /*Table, */ ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent /*, ModalFooter,*/,
} from "reactstrap";
import classnames from "classnames";

//Import Components
import Accordian from "./accordian";
//Import Menus
import NotificationMenu from "../Menus/notification-menu";
import ProfileMenu from "../Menus/profile-menu";
//import SettingsButton from "../Menus/settings-button";

//Import Images
import logosm from "../../../assets/images/logo-sm.png";
import logolight from "../../../assets/images/logo-light.png";
import logoGoGeer from "../../../assets/images/bookarage.svg";
import qrCodeRead from "../../../assets/images/topHeader/qr-ic.svg";
import { _getCarHistory } from "../../../services/qrCodeRequests";
import QrReader from "react-qr-reader";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      showComponent: false,
      result: "",
      modal_center: false,
      modal_history: false,
      historyCar: [],
      OwnerName: "",
      modal_xlarge: false,
      activeTab: "1",
    };
    this.toggleMenu.bind(this);
    this.toggleSearch.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this.tog_xlarge = this.tog_xlarge.bind(this);
    this.tog_center = this.tog_center.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }
  removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  handleScan = (data) => {
    //  (data);
    if (data) {
      this.setState({
        result: data,
      });
      console.log("QrCode", this.state.result);
      let chas = {
        CHASSIS_NUMBER: this.state.result,
      };
      _getCarHistory(chas).then((res) => {
        // setUpdateNow("brand");
        // alert("are you Sure")
        // setState({
        //   success_confirm: true,
        //   alert_confirm : false,
        //   dynamic_title: "Deleted!",
        //   dynamic_description: "Your Offer has been deleted."
        //   })
        // //
        // // setShowModal({ modalName: "success", data: null });
        // window.location.reload();
        console.log("Osama");
        console.log("response", res);
        this.setState({ historyCar: res });
        this.tog_xlarge();
        this.setState({ modal_center: false });
      });
      console.log("HistoryCar: ", this.state.historyCar);
    } else {
      // this.getData();
      console.log("QrCode", "Nothing");
      // Now we need to make it run at a specified interval
      //   setTimeout(function() {
      //     document.location.reload()
      //  }, 5000);
      //  ("Qr Code Is not on the system");
    }
  };
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  tog_xlarge() {
    this.setState((prevState) => ({
      modal_xlarge: !prevState.modal_xlarge,
    }));
    this.removeBodyCss();
  }
  handleError = (err) => {
    console.error(err);
  };
  tog_center() {
    this.setState((prevState) => ({
      modal_center: !prevState.modal_center,
    }));
    this.removeBodyCss();
  }
  componentDidMount() {
    //set for temporary
    document.body.setAttribute("data-layout", "horizontal");
  }
  getData = () => {
    // do something to fetch data from a remote API.
  };
  toggleMenu = () => {
    this.props.openLeftMenuCallBack();
  };

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };

  render() {
    return (
      <React.Fragment>
        <div className="navbar-header">
          <Container fluid>
            <div className="float-left">
              <div className="navbar-brand-box">
                <Link to="/dashboard" className="logo logo-dark">
                  {/* <span className="logo-sm">
                                    <img src={logosm} alt="" height="22"/>
                                </span> */}
                  <span className="logo-lg">
                    <img src={logoGoGeer} alt="" height="50" />
                  </span>
                </Link>

                <Link to="/dashboard" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logosm} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="19" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-24 d-lg-none header-item waves-effect waves-light"
                onClick={this.toggleMenu}
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </div>

            <div className="float-right">
              {/* <LanguageMenu class="d-lg-inline-block" /> */}

              <Button
                type="button"
                className="border-0 bg-transparent"
                onClick={this.tog_center}
              >
                <span className="logo-lg">
                  <img src={qrCodeRead} alt="" height="19" />
                </span>
              </Button>

              {/* <NotificationMenu /> */}
              <ProfileMenu />

              {/* <SettingsButton /> */}
            </div>

            {/* {this.state.showComponent ? ( */}
            <div className="modal bs-example-modal" tabIndex="-1" role="dialog">
              {/* <div className="modal-content">
                                                <div className="modal-body"> */}
              <Modal
                isOpen={this.state.modal_center}
                toggle={this.tog_center}
                centered={true}
              >
                <ModalHeader
                  toggle={() => this.setState({ modal_center: false })}
                >
                  Car History with QR Code
                </ModalHeader>
                <ModalBody>
                  <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "100%" }}
                  />
                  <p>{this.state.result}</p>
                </ModalBody>
              </Modal>
              {/* <p>{this.state.result}</p> */}

              <Modal
                size="xl"
                isOpen={this.state.modal_xlarge}
                toggle={this.tog_xlarge}
              >
                <ModalHeader
                  toggle={() => this.setState({ modal_xlarge: false })}
                >
                  <span className="logo-lg">
                    <img src={logoGoGeer} alt="" height="50" />
                  </span>
                </ModalHeader>
                {/* {this.state.historyCar.map((request, i) => ( */}
                <ModalBody>
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <Row className="mt-4">
                            <Col lg={12}>
                              <div className="text-center">
                                <h4>Have any Questions ?</h4>
                                <p className="text-muted">
                                  We are happy to hear from you. Call us at +971
                                  58 882 6203
                                </p>
                              </div>
                            </Col>
                          </Row>

                          <Row className="mt-5 justify-content-center">
                            <Col lg="10">
                              <div>
                                <Nav
                                  pills
                                  className="faq-nav-tabs justify-content-center"
                                  role="tablist"
                                >
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "1",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("1");
                                      }}
                                    >
                                      Car Owner
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "2",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("2");
                                      }}
                                    >
                                      Car Information
                                    </NavLink>
                                  </NavItem>

                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "3",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("3");
                                      }}
                                    >
                                      Car History
                                    </NavLink>
                                  </NavItem>
                                </Nav>

                                <TabContent
                                  activeTab={this.state.activeTab}
                                  className="pt-5"
                                >
                                  <TabPane tabId="1">
                                    <div>
                                      <div className="text-center mb-5">
                                        <h5>Car Owner</h5>
                                      </div>

                                      <div
                                        id="gen-question-accordion"
                                        className="custom-accordion-arrow"
                                      >
                                        {/* accoridan */}
                                        <Accordian
                                          question1="Full Name"
                                          answer1={
                                            this.state.historyCar.OWNER_NAME
                                          }
                                          question2="Country"
                                          answer2={
                                            this.state.historyCar.OWNER_COUNTRY
                                          }
                                          question3="City"
                                          answer3={
                                            this.state.historyCar.OWNER_CITY
                                          }
                                          question4="Nationality"
                                          answer4={
                                            this.state.historyCar
                                              .OWNER_NATIONALITY
                                          }
                                          question5="Phone Number"
                                          answer5={
                                            this.state.historyCar
                                              .OWNER_PHONE_NUMBER
                                          }
                                          question6="Email Address"
                                          answer6={
                                            this.state.historyCar.OWNER_EMAIL
                                          }
                                        />
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="2">
                                    <div>
                                      <div className="text-center mb-5">
                                        <h5>Car Information</h5>
                                      </div>

                                      <div
                                        id="privacy-accordion"
                                        className="custom-accordion-arrow"
                                      >
                                        {/* accoridan */}
                                        <Accordian
                                          question1="Make"
                                          answer1={
                                            this.state.historyCar.CAR_MAKE
                                          }
                                          question2="Modal"
                                          answer2={
                                            this.state.historyCar.CAR_MODAL
                                          }
                                          question3="Year"
                                          answer3={
                                            this.state.historyCar.CAR_YEAR
                                          }
                                          question4="Color"
                                          answer4={
                                            this.state.historyCar.CAR_COLOR
                                          }
                                          question5="Plate Number"
                                          answer5={
                                            this.state.historyCar
                                              .CAR_PLATE_NUMBER
                                          }
                                        />
                                      </div>
                                    </div>
                                  </TabPane>

                                  <TabPane tabId="3">
                                    <div>
                                      <div className="text-center mb-5">
                                        <h5>Car History</h5>
                                      </div>
                                      <div className="table-responsive">
                                        {/* {this.state.historyCar.length > 0 && (
                                                                      <Table bordered className="mb-0">
                                  
                                                                          <thead>
                                                                              <tr>
                                                                                  <th>SERVICE NAME</th>
                                                                                  <th>PROVIDER NAME</th>
                                                                                  <th>SERVICE DATE</th>
                                                                                  <th>SERVICE STATUS</th>
                                                                              </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                          {this.state.historyCar.CAR_HISTORY.map((request, i) => (
                                                                              <tr>
                                                                                  <th scope="row" key={i}>i</th>
                                                                                  <td>{request.SERVICE_NAME}</td>
                                                                                  <td>{request.PROVIDER_NAME}</td>
                                                                                  <td>{request.REQUEST_STATUS_NAME}</td>
                                                                              </tr>
                                                                             
                                                                              ))}
                                                                          </tbody>
                                                                      </Table>
                                                                       )} */}
                                      </div>
                                    </div>
                                  </TabPane>
                                </TabContent>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  {/* <Row >

                            <Col xs="12">
                           
                              <Card>
                                  <CardBody>
                                                   
                                  </CardBody>
                              </Card>
                              
                            </Col>
                            </Row>
                            <Row>

                            <Col xs="12">
                              <Card>
                                  <CardBody>
                                                  <h5>Owner Name: {this.state.historyCar.OWNER_NAME}</h5> 
                                                  <h5>Owner Country: {this.state.historyCar.OWNER_COUNTRY}</h5>
                                                  <h5>Owner City: {this.state.historyCar.OWNER_CITY}</h5>
                                                  <h5>Owner Phone Number: {this.state.historyCar.OWNER_PHONE_NUMBER}</h5>

                                  </CardBody>
                              </Card>
                             
                            </Col>
                            </Row>
                            <Row>

                                <Col xs="12">
                                  <Card>
                                      <CardBody>
                                                      <h5>Car Make: {this.state.historyCar.CAR_MAKE}</h5> 
                                                      <h5>Car Modal: {this.state.historyCar.CAR_MODAL}</h5>
                                                      <h5>Car Year: {this.state.historyCar.CAR_YEAR}</h5>
                                                      <h5>Car Color: {this.state.historyCar.CAR_COLOR}</h5>

                                      </CardBody>
                                  </Card>
                                
                                </Col>
                                </Row> */}
                </ModalBody>
                {/* ))} */}
              </Modal>
              {/* <QrReader
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: "30%" , marginTop: "700px" , marginLeft: "120px" }}
                />
                <p>{this.state.result}</p> */}
              {/* </div>
                         </div> */}
            </div>
            {/* ) : null} */}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Topbar;
