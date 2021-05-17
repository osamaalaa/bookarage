import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TabContent,
  TabPane,
  NavLink,
  NavItem,
  Nav,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import classnames from "classnames";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import filterIcon from "../../assets/images/Inquires/filter-ic.svg";
import searchIcon from "../../assets/images/Inquires/Search.svg";
import sortIcon from "../../assets/images/sort-ic.svg";
import servicesIcon from "../../assets/images/Inquires/services-ic.svg";
import inquiresIcon from "../../assets/images/Inquires/inquires-ic.svg";
import carrecovery from "../../assets/images/Inquires/carrecovery-ic.svg";
import checkmark from "../../assets/images/Inquires/checkmark-ic.svg";
import location from "../../assets/images/Inquires/location-ic.svg";
import arrowOrange from "../../assets/images/Inquires/arrow-orange-ic.svg";
import userGroup from "../../assets/images/Inquires/usergroups-ic.svg";
import message from "../../assets/images/Inquires/message-ic.svg";

class Inquires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bookarage", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Offers", link: "/offers" },
      ],
      visible: false,
      modal_center: false,
      activeTab1: "5",
      activeTab: "1",
      activeTab2: "9",
      activeTab3: "17",
      customActiveTab: "1",
      activeTabJustify: "5",
      col1: true,
      col2: false,
      col3: false,
      col5: true,
    };

    this.tog_center = this.tog_center.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.t_col1 = this.t_col1.bind(this);
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Offers", this.state.breadcrumbItems);
  }

  tog_center() {
    this.setState((prevState) => ({
      modal_center: !prevState.modal_center,
    }));
  }

  t_col1() {
    this.setState({ col1: !this.state.col1, col2: false, col3: false });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2, col1: false, col3: false });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3, col1: false, col2: false });
  }
  t_col5() {
    this.setState({ col5: !this.state.col5 });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="inquires">
          <div className="d-flex align-items-center mt-4">
            <Nav id="inquires_list" pills justified className="w-100">
              <NavItem className="waves-light">
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab1 === "5",
                  })}
                  onClick={() => {
                    this.toggle1("5");
                  }}
                >
                  <span className="d-block d-sm-none">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="d-none d-sm-block">Explore inquires</span>
                </NavLink>
              </NavItem>
              <NavItem className="waves-light">
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab1 === "6",
                  })}
                  onClick={() => {
                    this.toggle1("6");
                  }}
                >
                  <span className="d-block d-sm-none">
                    <i className="far fa-user"></i>
                  </span>
                  <span className="d-none d-sm-block">Direct inquires</span>
                  <span className="count">3</span>
                </NavLink>
              </NavItem>
              <NavItem className="waves-light">
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab1 === "7",
                  })}
                  onClick={() => {
                    this.toggle1("7");
                  }}
                >
                  <span className="d-block d-sm-none">
                    <i className="far fa-user"></i>
                  </span>
                  <span className="d-none d-sm-block">Sent</span>
                </NavLink>
              </NavItem>
              <NavItem className="waves-light">
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab1 === "8",
                  })}
                  onClick={() => {
                    this.toggle1("8");
                  }}
                >
                  <span className="d-block d-sm-none">
                    <i className="far fa-user"></i>
                  </span>
                  <span className="d-none d-sm-block">Rejected</span>
                </NavLink>
              </NavItem>
            </Nav>
            <button
              className="filter-btn d-flex align-items-center mx-5"
              onClick={this.tog_center}
            >
              <img src={filterIcon} alt="filter" className="mr-2" />
              <span>Filter</span>
            </button>

            <div className="position-relative w-75 bg-white d-flex align-items-center justify-content-between">
              <input
                type="text"
                className="search-input"
                placeholder="Search by ID, Service name, Owner, Car Details"
              />
              <button className="bg-transparent border-0">
                <img src={searchIcon} alt="search" />
              </button>
            </div>
          </div>

          <TabContent activeTab={this.state.activeTab1}>
            <TabPane tabId="5" className="requests-tabs">
              <div className="my-3 d-flex align-items-center justify-content-between">
                <h3> 14 Total Inquires Related To You</h3>
                <div className="d-flex align-items-center">
                  <h3 className="mr-2">Latest</h3>
                  <img src={sortIcon} alt="Sort" />
                </div>
              </div>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <h3>Honda - Civic 2005 ( Black )</h3>
                          <div className="d-flex align-items-center">
                            <div className="d-flex flex-column">
                              <span className="title">Required Services</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={servicesIcon} alt="Cars" />
                                <span className="ml-2">Electric Repair</span>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <span className="title">Badget Range</span>
                              <div className="mt-1 d-flex align-items-center">
                                <span className="title">From</span>
                                <span className="mx-2">100 AED</span>
                                <span className="title">To</span>
                                <span className="ml-2">200 AED</span>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <span className="title">Car Recovery</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={carrecovery} alt="Cars" />
                                <span className="mx-2">Requested</span>
                                <img src={checkmark} alt="Cars" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="d-flex flex-column">
                              <span className="title">Car Location</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={location} alt="date" />
                                <span className="mx-2">
                                  Street 17C, Al Barshaal Barsha 2 , Dubai
                                </span>
                                <img src={arrowOrange} alt="map" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex align-items-start">
                            <div className="mr-5">
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-column mt-3">
                                <span className="title">
                                  Total Badget Range
                                </span>
                                <div className="mt-1 d-flex align-items-center">
                                  <span className="title">From</span>
                                  <span className="mx-2">100 AED</span>
                                  <span className="title">To</span>
                                  <span className="ml-2">200 AED</span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <h3>Requested Parts</h3>
                              <div className="d-flex align-items-start">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-start mt-3">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="6" className="requests-tabs">
              <div className="my-3 d-flex align-items-center justify-content-between">
                <h3> 3 Direct Inquiry Received</h3>
                <div className="d-flex align-items-center">
                  <h3 className="mr-2">Latest</h3>
                  <img src={sortIcon} alt="Sort" />
                </div>
              </div>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <h3>Honda - Civic 2005 ( Black )</h3>
                          <div className="d-flex align-items-center">
                            <div className="d-flex flex-column">
                              <span className="title">Required Services</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={servicesIcon} alt="Cars" />
                                <span className="ml-2">Electric Repair</span>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <span className="title">Badget Range</span>
                              <div className="mt-1 d-flex align-items-center">
                                <span className="title">From</span>
                                <span className="mx-2">100 AED</span>
                                <span className="title">To</span>
                                <span className="ml-2">200 AED</span>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <span className="title">Car Recovery</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={carrecovery} alt="Cars" />
                                <span className="mx-2">Requested</span>
                                <img src={checkmark} alt="Cars" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="d-flex flex-column">
                              <span className="title">Car Location</span>
                              <div className="mt-1 d-flex align-items-center">
                                <img src={location} alt="date" />
                                <span className="mx-2">
                                  Street 17C, Al Barshaal Barsha 2 , Dubai
                                </span>
                                <img src={arrowOrange} alt="map" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex align-items-start">
                            <div className="mr-5">
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-column mt-3">
                                <span className="title">
                                  Total Badget Range
                                </span>
                                <div className="mt-1 d-flex align-items-center">
                                  <span className="title">From</span>
                                  <span className="mx-2">100 AED</span>
                                  <span className="title">To</span>
                                  <span className="ml-2">200 AED</span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column ml-5">
                              <h3>Requested Parts</h3>
                              <div className="d-flex align-items-start">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-start mt-3">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="7" className="requests-tabs">
              <div className="my-3 d-flex align-items-center justify-content-between">
                <h3>3 Total Sent Requests</h3>
                <div className="d-flex align-items-center">
                  <h3 className="mr-2">Latest</h3>
                  <img src={sortIcon} alt="Sort" />
                </div>
              </div>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-column ml-5">
                                  <span className="title">Badget Range</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <span className="title">From</span>
                                    <span className="mx-2">100 AED</span>
                                    <span className="title">To</span>
                                    <span className="ml-2">200 AED</span>
                                  </div>
                                </div>
                                <div className="d-flex flex-column ml-5">
                                  <span className="title">Car Recovery</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={carrecovery} alt="Cars" />
                                    <span className="mx-2">Requested</span>
                                    <img src={checkmark} alt="Cars" />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div className="d-flex flex-column">
                                  <span className="title">Car Location</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={location} alt="date" />
                                    <span className="mx-2">
                                      Street 17C, Al Barshaal Barsha 2 , Dubai
                                    </span>
                                    <img src={arrowOrange} alt="map" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mr-5">
                              <h3>Submitted Offer</h3>
                              <div className="d-flex align-items-center">
                                <h2
                                  style={{ color: "#325A8F", fontSize: "18px" }}
                                  className="font-weight-bold mb-0"
                                >
                                  150 AED
                                </h2>
                                <button className="bg-transparent border-0 text-primary">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex align-items-start justify-content-between">
                            <div className="">
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-column mt-3">
                                <span className="title">
                                  Total Badget Range
                                </span>
                                <div className="mt-1 d-flex align-items-center">
                                  <span className="title">From</span>
                                  <span className="mx-2">100 AED</span>
                                  <span className="title">To</span>
                                  <span className="ml-2">200 AED</span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column">
                              <h3>Requested Parts</h3>
                              <div className="d-flex align-items-start">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-start mt-3">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mr-5">
                              <h3>Submitted Offer</h3>
                              <div className="d-flex align-items-center">
                                <h2
                                  style={{ color: "#325A8F", fontSize: "18px" }}
                                  className="font-weight-bold mb-0"
                                >
                                  150 AED
                                </h2>
                                <button className="bg-transparent border-0 text-primary">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="8" className="requests-tabs">
              <div className="my-3 d-flex align-items-center justify-content-between">
                <h3>3 Total Sent Requests</h3>
                <div className="d-flex align-items-center">
                  <h3 className="mr-2">Latest</h3>
                  <img src={sortIcon} alt="Sort" />
                </div>
              </div>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-column ml-5">
                                  <span className="title">Badget Range</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <span className="title">From</span>
                                    <span className="mx-2">100 AED</span>
                                    <span className="title">To</span>
                                    <span className="ml-2">200 AED</span>
                                  </div>
                                </div>
                                <div className="d-flex flex-column ml-5">
                                  <span className="title">Car Recovery</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={carrecovery} alt="Cars" />
                                    <span className="mx-2">Requested</span>
                                    <img src={checkmark} alt="Cars" />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div className="d-flex flex-column">
                                  <span className="title">Car Location</span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={location} alt="date" />
                                    <span className="mx-2">
                                      Street 17C, Al Barshaal Barsha 2 , Dubai
                                    </span>
                                    <img src={arrowOrange} alt="map" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mr-5">
                              <h3>Submitted Offer</h3>
                              <div className="d-flex align-items-center">
                                <h2
                                  style={{ color: "#325A8F", fontSize: "18px" }}
                                  className="font-weight-bold mb-0"
                                >
                                  150 AED
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="send-recovery">
                                Send Another Offer
                              </button>
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="revenues">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src={inquiresIcon} alt="service" />
                        <h3 className="mb-0 ml-2">New Inquiry</h3>
                      </div>
                      <div>
                        <h3 className="mb-0">ID: 351</h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 mr-3">5 hours ago</span>
                      </div>
                    </div>
                    <div className="car-details mt-3">
                      <div className="d-flex align-items-end mx-0 w-100">
                        <div className="image">
                          <img src={inquiresIcon} alt="Inquires" />
                        </div>
                        <div className="car-data w-100">
                          <div className="d-flex align-items-start justify-content-between">
                            <div className="">
                              <h3>Honda - Civic 2005 ( Black )</h3>
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="title">
                                    Required Services
                                  </span>
                                  <div className="mt-1 d-flex align-items-center">
                                    <img src={servicesIcon} alt="Cars" />
                                    <span className="ml-2">
                                      Electric Repair
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-column mt-3">
                                <span className="title">
                                  Total Badget Range
                                </span>
                                <div className="mt-1 d-flex align-items-center">
                                  <span className="title">From</span>
                                  <span className="mx-2">100 AED</span>
                                  <span className="title">To</span>
                                  <span className="ml-2">200 AED</span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-column">
                              <h3>Requested Parts</h3>
                              <div className="d-flex align-items-start">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-start mt-3">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center ml-3">
                                  <img
                                    src={servicesIcon}
                                    alt="service"
                                    className="mr-2"
                                    style={{
                                      borderRadius: "5px",
                                      width: "50px",
                                      height: "50px",
                                    }}
                                  />
                                  <div className="d-flex flex-column">
                                    <span
                                      style={{
                                        fontSize: "15px",
                                        color: "#242424",
                                      }}
                                    >
                                      Oil Filter
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        color: "#8E8E8E",
                                      }}
                                    >
                                      Qty: 1
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mr-5">
                              <h3>Submitted Offer</h3>
                              <div className="d-flex align-items-center">
                                <h2
                                  style={{ color: "#325A8F", fontSize: "18px" }}
                                  className="font-weight-bold mb-0"
                                >
                                  150 AED
                                </h2>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="user-info d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src={servicesIcon}
                                  alt="service"
                                  className="user-img"
                                />
                                <div className="d-flex flex-column">
                                  <span>Alex Lawson</span>
                                  <span>(585) 5519-96</span>
                                </div>
                                <div className="d-flex align-items-center ml-5">
                                  <button className="user-action mr-3">
                                    <img src={message} alt="Message" />
                                  </button>
                                  <button className="user-action">
                                    <img src={userGroup} alt="User Group" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="requests-btns">
                              <button className="send-recovery">
                                Send Another Offer
                              </button>
                              <button className="accept mx-3">
                                View Details
                              </button>
                              <button className="reject">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </TabPane>
          </TabContent>
          <Modal
            isOpen={this.state.modal_center}
            toggle={this.tog_center}
            autoFocus={true}
            centered={true}
          >
            <ModalHeader toggle={this.tog_center}>Filter</ModalHeader>
            <ModalBody>
              <div className="row w-100 mx-0 p-3">
                <div className="col-md-6">
                  <label htmlFor="name">By Service</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="name">Car Make</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="name">Requested Date</label>
                  <div className="switch-toggle d-flex align-items-center justify-content-between switch-3 switch-candy">
                    <input id="all" name="state-d" type="radio" />
                    <label htmlFor="all">All Dates</label>
                    <input id="na" name="state-d" type="radio" />
                    <label htmlFor="na">This week</label>

                    <input id="off" name="state-d" type="radio" />
                    <label htmlFor="off">Next week</label>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="submit-create mr-3">Show Result</button>
                <button className="cancel-btn" onClick={this.tog_center}>
                  Cancel
                </button>
              </div>
            </ModalBody>
          </Modal>
        </section>
      </React.Fragment>
    );
  }
}
export default connect(null, { setBreadcrumbItems })(Inquires);
