import React from "react";
import { Card, CardBody, Button } from "reactstrap";

const AccountSideMenu = ({ tab }) => {
  return (
    <Card style={{ borderRadius: "2.25rem" }}>
      <CardBody>
        <div className="d-flex justify-content-center">
          <Button
            id="caret"
            className="btn-auth btn-my-account-list"
            onClick={() => tab("account")}
          >
            <i className="fas fa-user fa-lg"></i>
            <span> Account info</span>
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            id="caret"
            className="btn-auth btn-my-account-list"
            onClick={() => tab("payment")}
          >
            <span>
              <i className="fab fa-cc-mastercard fa-lg"></i> Payment method
            </span>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default AccountSideMenu;
