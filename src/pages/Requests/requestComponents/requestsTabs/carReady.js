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
import { _getRequestsByStatusID } from "../../../../services/dashboardRequests";
import StateContext from "../../../../component/context/stateContext";

const CarReadyTab = () => {
  const [requestsData, setRequestsData] = useState([]);
  const { updateRequests } = useContext(StateContext);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 6) return;

    const providerId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getRequestsByStatusID(providerId.SERVICE_PROVIDER_ID, 6).then((res) => {
      console.log("car ready", res);
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

  return (
    <TabPane tabId="9" className="requests-tabs">
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
                    <img src={request.CAR_IMAGE} alt="service" />
                    <h3 className="mb-0 ml-2">Car Ready</h3>
                  </div>
                  <div>
                    <h3 className="mb-0">ID: 351</h3>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <h3 className="mb-0 mr-3">Full Request Details</h3>
                    <img src={blackArrow} alt="arrow" />
                  </div> */}
                </div>
                <div className="car-details mt-3">
                  <div className="d-flex align-items-end mx-0 w-100">
                    <div className="image">
                      <img src={newRequstIcon} alt="car-details" />
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
                          <div className="mt-3">
                            <h3>Total Cost</h3>
                            <div className="d-flex align-items-center assigned-mechanic">
                              <h2
                                style={{
                                  color: "#325A8F",
                                  fontSize: "20px",
                                }}
                              >
                                420 AED
                              </h2>
                            </div>
                            <div className="d-flex align-items-center">
                              <span
                                style={{
                                  color: "#818E94",
                                  fontSize: "14px",
                                }}
                              >
                                View invoice
                              </span>
                              <img src={blackArrow} alt="arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                          <span className="title">Required Services</span>
                          <div className="mt-1 d-flex align-items-center">
                            <img src={servicesIcon} alt="Cars" />
                            <span className="ml-2">{request.SERVICE_NAME}</span>
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
                              <span>{request.phonenumber}</span>
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
                          <button className="send-recovery">
                            Add Diagnosis Details
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

export default CarReadyTab;
