import React, { useContext, useEffect, useState } from "react";
import { TabPane, Card, CardBody } from "reactstrap";
import newRequstIcon from "../../../../assets/images/Inquires/requests-ic.svg";
import sortIcon from "../../../../assets/images/sort-ic.svg";
import servicesIcon from "../../../../assets/images/Inquires/services-ic.svg";
import blackArrow from "../../../../assets/images/Inquires/arrow-black-ic.svg";
import dateIcon from "../../../../assets/images/Inquires/date-ic.svg";
import carrecovery from "../../../../assets/images/Inquires/carrecovery-ic.svg";
import blueCarrecovery from "../../../../assets/images/Inquires/blue-carrecovery-ic.svg";
import checkmark from "../../../../assets/images/Inquires/checkmark-ic.svg";
import carrecoveryBtn from "../../../../assets/images/Inquires/carrecovery-btn-ic.svg";
import checkmarkBtn from "../../../../assets/images/Inquires/checkmark-btn-ic.svg";
import location from "../../../../assets/images/Inquires/location-ic.svg";
import arrowOrange from "../../../../assets/images/Inquires/arrow-orange-ic.svg";
import userGroup from "../../../../assets/images/Inquires/usergroups-ic.svg";
import message from "../../../../assets/images/Inquires/message-ic.svg";
import {
  _getRequestsByStatusID,
  _updateRequestStatus,
} from "../../../../services/dashboardRequests";
import { useHistory } from "react-router-dom";
import StateContext from "../../../../component/context/stateContext";

const AcceptedRequestsTab = () => {
  const [requestsData, setRequestsData] = useState([]);
  const history = useHistory();
  const { updateRequests, setUpdateRequests } = useContext(StateContext);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 3) return;

    const providerId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getRequestsByStatusID(providerId.SERVICE_PROVIDER_ID, 2).then((res) => {
      if (!res.success) {
        if (res.error === "token") {
          history.push("/login");
          return;
        }
        return;
      }

      setRequestsData(res.result);
    });
    return () => {
      isMounted = false;
    };
  }, [updateRequests, history]);

  const handleOnClick = (requestID) => {
    const updateRequest = {
      REQUEST_ID: requestID,
      STATUS_ID: 4,
    };
    _updateRequestStatus(updateRequest).then((res) => {
      const arr = [...requestsData];
      const index = arr.findIndex((obj) => obj.REQUEST_ID === requestID);
      arr.splice(index, 1);
      setRequestsData(arr);
      setUpdateRequests(4);
    });
  };

  return (
    <TabPane tabId="6" className="requests-tabs">
      <div className="my-3 d-flex align-items-center justify-content-between">
        <h3>{requestsData.length} Total Requests</h3>
        <div className="d-flex align-items-center">
          <h3 className="mr-2">Latest</h3>
          <img src={sortIcon} alt="Sort" />
        </div>
      </div>
      {requestsData.length > 0 &&
        requestsData.map((request, i) => (
          <Card key={i}>
            <CardBody className="revenues">
              <div className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={newRequstIcon} alt="service" />
                    <h3 className="mb-0 ml-2">Request Accepted</h3>
                  </div>
                  <div>
                    <h3 className="mb-0">ID: {request.REQUEST_ID}</h3>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <h3 className="mb-0 mr-3">Full Request Details</h3>
                    <img src={blackArrow} alt="arrow" />
                  </div> */}
                </div>
                <div className="car-details mt-3">
                  <div className="d-flex align-items-end mx-0 w-100">
                    <div className="image">
                      <img src={newRequstIcon} alt="New Request" />
                    </div>
                    <div className="car-data w-100">
                      <h3>
                        {request.CAR_MAKE} - {request.CAR_MODAL}{" "}
                        {request.CAR_YEAR} ( Black )
                      </h3>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                          <span className="title">Required Services</span>
                          <div className="mt-1 d-flex align-items-center">
                            <img src={servicesIcon} alt="Cars" />
                            <span className="ml-2">{request.SERVICE_NAME}</span>
                          </div>
                        </div>
                        <div className="d-flex flex-column ml-5">
                          <span className="title">Plate Number</span>
                          <div className="mt-1 d-flex align-items-center">
                            <span className="">{request.CAR_PLATE_NUMBER}</span>
                          </div>
                        </div>
                        <div className="d-flex flex-column ml-5">
                          <span className="title">Requested Date & Time</span>
                          <div className="mt-1 d-flex align-items-center">
                            <img src={dateIcon} alt="date" />
                            <span className="ml-2">{request.CREATED_AT}</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className="d-flex flex-column">
                          <span className="title">Car Recovery</span>
                          <div className="mt-1 d-flex align-items-center">
                            <img src={carrecovery} alt="Cars" />
                            <span className="mx-2">Requested</span>
                            <img src={checkmark} alt="Cars" />
                          </div>
                        </div>
                        <div className="d-flex flex-column ml-5">
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
                              <span>
                                {request.firstname} {request.lastname}
                              </span>
                              <span>{request.phonenumber}</span>
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
                        <div className="requests-btns d-flex align-items-center">
                          <button className="send-recovery d-flex align-items-center">
                            <img
                              className="mr-2"
                              src={carrecoveryBtn}
                              alt="Car Recovery"
                            />
                            Send Recovery
                          </button>
                          <button
                            className="car-arrive mx-3"
                            onClick={() => handleOnClick(request.REQUEST_ID)}
                          >
                            <img
                              className="mr-2"
                              src={checkmarkBtn}
                              alt="Checkmark"
                            />
                            Mark Car Arrived
                          </button>
                          <button className="cancel bg-transparent border-0">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center">
                    <img src={blueCarrecovery} alt="Blue Car Recovery" />
                    <span
                      style={{
                        color: "#325A8F",
                        marginLeft: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Waiting the car owner to deliver the car
                    </span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
    </TabPane>
  );
};

export default AcceptedRequestsTab;
