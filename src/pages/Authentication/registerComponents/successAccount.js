import React from "react";
import congratulation from "../../../assets/images/illus.svg";
import { Card } from "reactstrap";
import { Button } from "semantic-ui-react";

const SuccessAccountStep = ({ nextStep }) => {
  const handleOnClick = () => {
    nextStep(6);
  };
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="success-img">
        <img src={congratulation} alt="Congratulation" className="p-3" />
      </div>
      <h4 className="text-muted font-size-18 mb-1 mt-2 text-center">
        Congratulation
      </h4>
      <h5 className="text-muted font-size-16 mb-1 text-center mt-1">
        Your Account Is Created!
      </h5>
      <p className="mb-5 mt-3 text-center mx-auto">
        All you need to do now is to setup your shop information!
      </p>
      <div className="verify-action-btn">
        <Button content="Create Shop" onClick={handleOnClick} />
      </div>
    </Card>
  );
};

export default SuccessAccountStep;
