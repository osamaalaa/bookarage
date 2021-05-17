import React from "react";
import congratulation from "../../../assets/images/illus.svg";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

const SuccessStep = () => {
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="success-img">
        <img src={congratulation} alt="Congratulation" className="p-3" />
      </div>
      <h4 className="text-muted font-size-18 mb-1 mt-2 text-center">
        Congratulation
      </h4>
      <h5 className="text-muted font-size-16 mb-1 text-center mt-1">
        Your Shop Is Created!
      </h5>
      <p className="mb-5 mt-3 text-center mx-auto">
        Thank You! We will be in Touch <Link to="/login">Back to Login</Link>
      </p>
    </Card>
  );
};

export default SuccessStep;
