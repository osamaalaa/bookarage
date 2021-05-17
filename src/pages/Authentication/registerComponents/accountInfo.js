import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import { ValidationForm } from "react-bootstrap4-form-validation";
import { _sendVerificationCode } from "../../../services/authRequests/signup";

const AccountInfoStep = ({ nextStep, storeValues, values }) => {
  const [state, setState] = useState({
    phonenumber: values.phonenumber,
    phoneMessage: "",
  });

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
     
    if (state.phonenumber === "") {
      setState({ ...state, phoneMessage: "Please enter your phone number" });
      return;
    }
   
    _sendVerificationCode({ phoneNumber: "+" + state.phonenumber }).then(
      (res) => {
      
      }
    );
    storeValues(state);
    nextStep(4);
  };
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="d-flex justify-content-between register-header align-items-center">
        <h3 className="text-center">
          <i className="fas fa-arrow-left" onClick={() => nextStep(2)}></i>
        </h3>
        <h4 className="text-muted font-size-18 mb-1 text-center">
          Create Account
        </h4>
        <div></div>
      </div>
      <p className="sms-message-note mb-5 text-center mx-auto">
        Please enter your phone number and wait for activation sms
      </p>
      <CardBody className="pt-0">
        <div className="p-3" style={{ padding: "0rem !important" }}>
          <ValidationForm
            className="form-horizontal mt-5 "
            id="contactForm"
            onSubmit={handleOnSubmitForm}
          >
            <div className="form-group phone-section mt-5">
              <label htmlFor="firstname">Phone Number</label>
              <PhoneInput
                country={"ae"}
                // placeholder="PhoneNumber"
                inputProps={{
                  name: "phonenumber",
                  required: true,
                  // autoFocus: true,
                }}
                value={state.phonenumber || ""}
                onChange={(phonenumber) => setState({ ...state, phonenumber })}
              />
            </div>

            <div className="form-group text-center mt-5">
              <Button
                color="primary"
                className="btn-auth btn-primary-auth w-md waves-effect waves-light"
                type="submit"
                // onClick={ nextStep}
              >
                continue
              </Button>
            </div>
          </ValidationForm>

          {state.phoneMessage !== "" ? (
            <div className="col-md-12">
              <div id="error_message_phone" className="alert alert-danger">
                {state.phoneMessage}
              </div>
            </div>
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
};

export default AccountInfoStep;
