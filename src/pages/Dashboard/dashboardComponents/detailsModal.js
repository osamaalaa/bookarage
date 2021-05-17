import React, { useContext, useEffect, useState } from "react";

import { Row, Col } from "reactstrap";
//Import Date Picker
import "react-datepicker/dist/react-datepicker.css";
import StateContext from "../../../component/context/stateContext";

//import userImg from "../../../assets/images/users/user-3.jpg";

import carImg from "../../../assets/images/car.jpeg";


import loader from "../../../assets/images/Loader.gif";

import { Button, Icon, Progress } from "semantic-ui-react";

import ModalBreadCrumb from "../../../shared/modalBreadCrumb";

import { Fragment } from "react";

import CustomizedSteppers from "../../../shared/stepper";
import { useHistory } from "react-router";
import { _updateRequestStatus } from "../../../services/dashboardRequests";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactImageFallback from "react-image-fallback";
import moment from "moment";
/*import {
  _getCarMaintenceByUserCarId
} from "../../../services/carDetails";*/

const DetailsModal = () => {
  const [open, setOpen] = useState(false);
  const {
    setModalBreadCrumb,
    showModal,
    setShowModal,
    setUpdateRequests,
  } = useContext(StateContext);
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    setModalBreadCrumb({
      title: "Details",
      links: [
        { title: "Dashboard", link: "/" },
        { title: "Appointments", link: "#" },
      ],
    });
    return () => {
      isMounted = false;
    };
  }, [setModalBreadCrumb]);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "details") {
      setOpen(true);

      setData(showModal.data);

      
    } else {
      setOpen(false);
    }

    // setShowModal({ modalName: "details", data: null });
    // if (showModal.modalName === "successUpdated") {
    //   if (showModal.data !== null) {
    //     setData(showModal.data);
    //   } else {
    //     setData("");
    //   }
    //   setOpen(true);
    // } else if (showModal.modalName === "successNew") {
    //   setOpen(true);
    //   setData({ type: showModal.data.type });
    // } else {
    //   setOpen(false);
    // }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleOnClick = (requestId, status) => {
    const update = {
      REQUEST_ID: requestId,
      STATUS_ID: status,
    };
    _updateRequestStatus(update).then((res) => {
      if (!res.success) {
        if (res.error === "token") {
          history.push("/login");
          return;
        }
        return;
      }
      setUpdateRequests(status);
      console.log("OSAMA")
     
        setOpen(false);
        window.location.reload();
    });
    
  };
  console.log("Data" , data)
  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content bg-transparent">
        <div className="custom-modal-body details">
          {data.data && (
            <Fragment>
              <div className="breadCrumb-container">
                <div className="breadcrumb-items">
                  <ModalBreadCrumb />
                </div>

                <div className="request-container">
                  <p>Request ID : {data.requestId}</p>
                  <Icon
                    onClick={() => {
                      setOpen(false);
                      setShowModal({ modalName: "", data: null });
                    }}
                    name="times"
                  />
                </div>
                {/* <div className="close-icon" onClick={() => setOpen(false)}></div> */}
              </div>

              <div className="modal-desc mt-3">
                <Row>
                  <Col sm="6">
                    <div className="info-container">
                      <div className="desc-title">
                        <p>Request Information</p>
                        <div className="custom-line"></div>
                      </div>

                      <div className="info-content">
                        <p>Required Services</p>
                        <div className="info-details">
                          <Icon name="wrench" />
                          <p>{data.data.SERVICE_NAME}</p>
                        </div>
                      </div>

                      <div className="info-content">
                        <p>Requested Data & Time</p>
                        <div className="info-details">
                          <Icon name="calendar" />
                          <p>{data.data.REQUEST_DATE}</p>
                        </div>
                      </div>

                      <div className="info-content">
                        <p>Car Recovery</p>
                        <div className="info-details">
                          <Icon name="car" />
                          <p>Requested</p>
                          <Icon name="check circle" color="green" />
                        </div>
                      </div>

                      <div className="info-content">
                        <p>Car Location</p>
                        <div className="info-row-details">
                          <Row>
                            <Col sm="6">
                              <div className="info-desc">
                                <Icon name="map marker alternate" />
                                <p>
                                  {data.data.city} - {data.data.country}
                                </p>
                              </div>
                            </Col>
                            <Col sm="6">
                              <div className="info-actions">
                                <div className="info-action-content">
                                  <Icon name="location arrow" />
                                  <p>Navigate</p>
                                </div>
                                <div className="info-action-content icon-action">
                                  <Icon name="copy outline" onClick={() =>  window.clipboardData.setData("Text", 'Copy this text to clipboard')} />
                                </div>

                                <div className="info-action-content icon-action">
                                  <Icon name="share alternate" />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      {data.type === "appointment" && (
                        <Fragment>
                          <div className="info-content spaced">
                            <Button
                              content="Mark Car Arrived"
                              onClick={() => handleOnClick(data.requestId, 3)}
                              icon="check"
                            />
                            <Button content="Cancel" />
                          </div>
                          <div className="info-content bg-blue">
                            <p>
                              <Icon name="car" />
                              Waiting the car owner to deliver the car
                            </p>
                          </div>
                        </Fragment>
                      )}

                      {data.type === "inProgress" && (
                        <Fragment>
                          <div className="info-content spaced">
                            <Button
                              content="Mark Car Ready"
                              className="inProgessBtn"
                              onClick={() => handleOnClick(data.data.id, 5)}
                            />
                            <div className="estimatedTime-note">
                              {/* <div className="estimatedTime-content">
                                <p>Estimated Time</p>
                                <p>3 Days</p>
                              </div> */}
                              <p>
                                Finished date:{" "}
                                {moment(data.data.UPDATED_AT).format(
                                  "YYYY MMMM DD"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="custom-stepper">
                            <CustomizedSteppers active={2} />
                          </div>

                          <div className="status-note">
                            <Icon name="info circle" />
                            <p>The Mechanic is now working in this request</p>
                          </div>
                        </Fragment>
                      )}
                      {data.type === "Arrived" && (
                        <Fragment>
                          <div className="info-content spaced">
                            <Button
                              content="Mark Car Ready"
                              className="inProgessBtn"
                              onClick={() => handleOnClick(data.data.id, 5)}
                            />
                            <div className="estimatedTime-note">
                              {/* <div className="estimatedTime-content">
                                <p>Estimated Time</p>
                                <p>3 Days</p>
                              </div> */}
                              <p>
                                Finished date:{" "}
                                {moment(data.data.UPDATED_AT).format(
                                  "YYYY MMMM DD"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="custom-stepper">
                            <CustomizedSteppers active={1} />
                          </div>

                          <div className="status-note">
                            <Icon name="info circle" />
                            <p>The Owner Approved For the Request and The Car Arrived</p>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="info-container">
                      <div className="desc-title">
                        <p>Car Information</p>
                        <div className="custom-line"></div>
                      </div>

                      <div className="car-info-img"  Style=" width: 100%">
                        <img src={data.data.CAR_IMAGE} width="100%" alt="car" />
                      
                        <p>
                          {data.data.CAR_MAKE} - {data.data.CAR_YEAR}
                        </p>
                      </div>

                      <div className="info-content bg">
                        <p className="title-text">Maintenance Overview</p>
                      </div>

                      <div className="info-content">
                        <ul>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Car Health</p>
                              <p>65%</p>
                            </div>
                            <Progress percent={65} color="yellow" />
                          </li>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Regular Maintenance</p>
                              <p>22 March 2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Battery</p>
                              <p>07 September 2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Oil Change</p>
                              <p>17 June 2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Brake Fluid</p>
                              <p>29 April 2020</p>
                            </div>
                          </li>
                          <li>
                            <div className="progress-label">
                              <p className="title-text">Air Filter</p>
                              <p>07 September 2020</p>
                            </div>
                            <div className="error-content">
                              <Icon name="info circle" />
                              <p>Oil Filter Outdated</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="info-content bg">
                        <p className="title-text">Car Details</p>
                      </div>

                      <div className="info-content">
                        <ul>
                          <li>
                            <p>Insurance Date</p>
                            <p>No Insurance Date</p>
                          </li>
                          <li>
                            <p>Car Color</p>
                            <p>{data.data.CAR_COLOR}</p>
                          </li>
                          <li>
                            <p>Plate Number</p>
                            <p>{data.data.CAR_PLATE_NUMBER}</p>
                          </li>
                          <li>
                            <p>Mileage</p>
                            <p>{data.data.CAR_MILEAGE} KM</p>
                          </li>
                        </ul>
                      </div>

                      <div className="info-content bg">
                        <p className="title-text">Car Owner</p>
                      </div>

                      <div className="info-content owner-content">
                        <div className="owner-img">
                          <img
                            src="http://165.227.107.124:5000/Manager.png"
                            alt=""
                          />
                        </div>
                        <div className="owner-info">
                          <p>{data.data.customer} </p>
                          <p>{data.data.phonenumber}</p>
                        </div>
                      </div>

                      <div className="info-content details-actions">
                        <p>{data.data.email}</p>{" "}
                        <Button content="Send Message" icon="mail" />
                        <Button content="Add To Group" icon="add user" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
