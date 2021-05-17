import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const RolesSelectionStep = ({ nextStep }) => {
  const handleOnClickRole = (type) => {
    localStorage.setItem("roles", JSON.stringify(type));
    nextStep(2);
  };
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="d-flex justify-content-between register-header align-items-center">
        <h3 className="text-center">
          <Link to="/login" className="logo-auth logo-admin">
            <i className="fas fa-arrow-left"></i>
          </Link>
        </h3>
        <h4 className="text-muted font-size-18 mb-1 text-center">Sign Up as</h4>
        <div></div>
      </div>
      <p className="sms-message-note mb-5 text-center mx-auto">
        Please choose your sign up role and fill the account fields
      </p>
      <CardBody className="pt-0">
        <div className="p-3" style={{ padding: "0rem !important" }}>
          <div className="text-center loginAS">
            <ul className="list-unstyled">
              <li>
                <p onClick={() => handleOnClickRole("ServiceProvider")}>
                  Service Provider
                </p>
              </li>
              {/* <li>
                <p onClick={() => handleOnClickRole("showroom")}>Showroom</p>
              </li>
              <li>
                <p onClick={() => handleOnClickRole("insurance")}>Insurance</p>
              </li>
              <li>
                <p onClick={() => handleOnClickRole("recovery")}>
                  Car Recovery
                </p>
              </li>
              <li>
                <p onClick={() => handleOnClickRole("rental")}>Car Rental</p>
              </li> */}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default RolesSelectionStep;
