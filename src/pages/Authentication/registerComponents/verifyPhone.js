import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Card, CardBody } from "reactstrap";
import ReactCodeInput from "react-code-input";

const VerfiyPhoneStep = ({
  nextStep,
  phoneValue,
  storeValue,
  loading,
  message,
}) => {
  const [state, setState] = useState({
    code: "",
    phoneNumber: phoneValue.phonenumber,
    message: "",
    loading: false,
  });

  useEffect(() => {
    let isMounted = true;
    //  (state);

    if (!isMounted || message === "") return;
    if (/successfully/.test(message)) {
      nextStep(5);
    }
    setState({ ...state, message: message });
    return () => {
      isMounted = false;
    };
  }, [message, nextStep, state]);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || loading) return;

    setState({ ...state, loading: loading });

    return () => {
      isMounted = false;
    };
  }, [loading, state]);

  const props = {
    inputStyle: {
      margin: "4px",
      MozAppearance: "textfield",
      width: "15px",
      borderRadius: "3px",
      fontSize: "24px",
      fontWeight: "bold",
      height: "26px",
      padding: "0 !important",
      textAlign: "center",
      paddingLeft: "7px",
      backgroundColor: "white",
      color: "orangered",
      border: "1px solid orangered !important",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "red",
      border: "1px solid red",
    },
    onChange: (value) => {
      setState({ ...state, code: value });
    },
  };

  const handleOnClick = () => {
    if (state.code === "") {
      setState({
        ...state,
        message: "Please enter verification code",
        loading: false,
      });
      return;
    } else if (state.code !== "" && state.code.length < 6) {
      setState({
        ...state,
        message: "Please enter a correct validation code",
        loading: false,
      });
      return;
    }
    setState({ ...state, loading: true });

    storeValue({ code: state.code, loading: true });
    nextStep(4);
    // validate(true)
  };
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="d-flex justify-content-between register-header align-items-center">
        <h3
          className="text-center"
          onClick={() => nextStep(3)}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-arrow-left"></i>
        </h3>
        <h4 className="text-muted font-size-18 mb-1 text-center">
          Create Account
        </h4>
        <div></div>
      </div>
      <CardBody className="pt-0 verify-card">
        <div className="p-3" style={{ padding: "0rem !important" }}>
          <div className="verify-img"></div>
          <div className="verify-subTitle">
            <p className="mb-5 text-center mx-auto">
              Please verify your phone number to continue create account process
            </p>
          </div>
          <div className="verify-form">
            <Form>
              <Form.Group>
                <ReactCodeInput type="text" fields={6} {...props} />
              </Form.Group>
              <div className="verify-phone-number">
                <p>{state.phoneNumber}</p>
              </div>
              <div className="verify-action-link" onClick={() => nextStep(3)}>
                <p>Wrong number ?</p>
              </div>

              <div className="verify-action-btn">
                <Button
                  content="Verify Phone Number"
                  onClick={handleOnClick}
                  loading={state.loading}
                  disabled={state.loading}
                />
              </div>
            </Form>
          </div>
        </div>
        {state.message ? (
          <div className="col-md-12">
            <div id="error_message_phone" className="alert alert-danger">
              {state.message}
            </div>
          </div>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default VerfiyPhoneStep;
