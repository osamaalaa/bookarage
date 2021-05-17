import React, { useContext, useEffect, useState } from "react";
import { TabPane, Card, CardBody } from "reactstrap";
import newRequstIcon from "../../../../assets/images/Inquires/requests-ic.svg";
import sortIcon from "../../../../assets/images/sort-ic.svg";
import servicesIcon from "../../../../assets/images/Inquires/services-ic.svg";
import blackArrow from "../../../../assets/images/Inquires/arrow-black-ic.svg";
import userGroup from "../../../../assets/images/Inquires/usergroups-ic.svg";
import message from "../../../../assets/images/Inquires/message-ic.svg";
import sStart from "../../../../assets/images/s-star-ic.svg";
import sEmptyStart from "../../../../assets/images/s-star-empty-ic.svg";
import { useHistory } from "react-router-dom";
import {
  _getRequestsByStatusID,
  _updateRequestStatus,
} from "../../../../services/dashboardRequests";
import StateContext from "../../../../component/context/stateContext";

const OnGoingTab = () => {
  const [requestsData, setRequestsData] = useState([]);
  const { updateRequests, setUpdateRequests } = useContext(StateContext);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 5) return;

    const providerId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getRequestsByStatusID(providerId.SERVICE_PROVIDER_ID, 4).then((res) => {
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
      STATUS_ID: 6,
    };
    _updateRequestStatus(updateRequest).then((res) => {
      const arr = [...requestsData];
      const index = arr.findIndex((obj) => obj.REQUEST_ID === requestID);
      arr.splice(index, 1);
      setRequestsData(arr);
      setUpdateRequests(6);
    });
  };

  return (
    <TabPane tabId="8" className="requests-tabs">
      <div className="my-3 d-flex align-items-center justify-content-between">
        {/* <h3>4 Total Requests</h3> */}
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
                    <h3 className="mb-0 ml-2">
                      Ongoing ( Waiting For Diagnosis Report )
                    </h3>
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
                      <img src={newRequstIcon} alt="car details" />
                    </div>
                    <div className="car-data w-100">
                      <div className="d-flex align-items-start">
                        <h3 className="mr-5">
                          {request.CAR_MAKE} - {request.CAR_MODAL}{" "}
                          {request.CAR_YEAR} ( Black )
                        </h3>
                        <div className="ml-5">
                          <h3>Assigned mechanic</h3>
                          <div className="d-flex align-items-center assigned-mechanic">
                            <img
                              src={servicesIcon}
                              alt="mechanic"
                              className="mech"
                            />
                            <div>
                              <span>Kevin Estrada</span>
                              <div>
                                <img src={sStart} alt="" />
                                <img src={sStart} alt="" />
                                <img src={sStart} alt="" />
                                <img src={sStart} alt="" />
                                <img src={sEmptyStart} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                          <span className="title">Required Services</span>
                          <div className="mt-1 d-flex align-items-center">
                            <img src={servicesIcon} alt="Cars" />
                            <span className="ml-2">{request.SERVICE_ID}</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className="d-flex flex-column">
                          <span className="title">Plate Number</span>
                          <div className="mt-1 d-flex align-items-center">
                            <span className="">{request.CAR_PLATE_NUMBER}</span>
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
                              <span>(585) 5519-96</span>
                            </div>
                            <div className="d-flex align-items-center ml-5">
                              <button className="user-action mr-3">
                                <img src={message} alt="" />
                              </button>
                              <button className="user-action">
                                <img src={userGroup} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="requests-btns">
                          {/* <button className="send-recovery">
                            Add Diagnosis Details
                          </button> */}
                          <button
                            className="send-recovery"
                            onClick={() => handleOnClick(request.REQUEST_ID)}
                          >
                            Mark as Car Ready
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
    </TabPane>
  );
};

export default OnGoingTab;
