import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Alert, Button, Card, CardBody, Form } from "reactstrap";

const PersonalInfoStep = ({
  nextStep,
  user,
  registrationError,
  storevalues,
  values,
}) => {
  const [state, setState] = useState({
    firstName: values.firstName,
    lastName: values.lastName,
    nationality: values.nationality,
    email: values.email,
    password: values.password || "",
    confirmPassword: values.confirmPassword || "",
    code: values.code,
    message: "",
  });

  const handleFields = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, message: "" });
  };

  const validate = () => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (state.firstName === "") {
      return "Please Enter first name and try Again";
    } else if (state.lastName === "") {
      return "Please Enter last name and try Again";
    } else if (state.email === "") {
      return "Please Enter your email address and try Again!";
    } else if (!reg.test(state.email)) {
      return "Please Enter a valid email address and try again!";
    } else if (state.password === "") {
      return "Please Enter a valid password and must be more than 6 characters or numbers !";
    } else if (state.password.length < 6) {
      return "Please Enter a valid password and must be more than 6 characters or numbers !";
    } else if (state.confirmPassword === "") {
      return "Please Confirm you password and try Again !";
    } else if (state.password !== state.confirmPassword) {
      return "Password doesn't match !....Please Enter a valid match password and must be more than 6 characters or numbers !";
    } else {
      return false;
    }
  };
  /*const handleForm = (e) => {
    validate().then((res) => {
      if (!res) return;
      setState({
        ...state,
        message: res,
      });
    });
     
    //   axios
    //     .post("http://165.227.107.124:5000/auth/signup",  state, {
    //       headers: { Accept: "application/json" },
    //     })
    //     .then((response) => {
    //       nextStep();
    //     })
    //     .catch((error) => {
    //       //  (error)
    //        setState({ phoneMessage: "" });
    //        setState({
    //         phoneMessage: "Something wrong Please Try Again!",
    //       });
    //     });
  };*/

  const handleClickCaseOne = () => {
    const valid = validate();
    if (valid !== false) {
      setState({ ...state, message: valid });
      return;
    }

    storevalues(state);
    nextStep(3);
  };
  return (
    <Card className="overflow-hidden card-auth my-5">
      <div className="d-flex justify-content-between register-header align-items-center">
        <h3 className="text-center">
          <i className="fas fa-arrow-left" onClick={() => nextStep(1)}></i>
        </h3>
        <h4 className="text-muted font-size-18 mb-1 text-center">
          Create Account
        </h4>
        <div></div>
      </div>
      <CardBody className="pt-0">
        <div className="p-3">
          {user && (
            <Alert color="success">Registration Done Successfully.</Alert>
          )}
          {registrationError && (
            <Alert color="danger">{registrationError}</Alert>
          )}
          <Form className="form-horizontal mt-5 " id="contactForm">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={`form-control ${
                  state.message && /first/.test(state.message) ? "error" : ""
                }`}
                value={state.firstName || ""}
                name="firstName"
                id="firstName"
                onChange={handleFields}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={`form-control ${
                  state.message && /last/.test(state.message) ? "error" : ""
                }`}
                value={state.lastName || ""}
                name="lastName"
                id="lastName"
                onChange={handleFields}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className={`form-control ${
                  state.message && /last/.test(state.message) ? "error" : ""
                }`}
                value={state.nationality || ""}
                name="nationality"
                id="nationality"
                onChange={handleFields}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email Address</label>
              <input
                name="email"
                id="email"
                type="email"
                className={`form-control ${
                  state.message && /email/.test(state.message) ? "error" : ""
                }`}
                value={state.email || ""}
                autoComplete="on"
                onChange={handleFields}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                className={`form-control ${
                  state.message && /password/.test(state.message) ? "error" : ""
                }`}
                value={state.password || ""}
                autoComplete="off"
                onChange={handleFields}
                minLength={6}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                className={`form-control ${
                  state.message && /match/.test(state.message) ? "error" : ""
                }`}
                value={state.confirmPassword || ""}
                autoComplete="off"
                onChange={handleFields}
                minLength={6}
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="code">Referral Code</label>
              <input
                type="text"
                className={`form-control ${
                  state.message && /code/.test(state.message) ? "error" : ""
                }`}
                name="code"
                id="code"
                value={state.code || ""}
                onChange={handleFields}
              />
            </div>

            <div className="form-group text-center mt-5">
              <Button
                color="primary"
                className="btn-auth btn-primary-auth w-md waves-effect waves-light"
                type="button"
                onClick={handleClickCaseOne}
              >
                Continue
              </Button>
            </div>
          </Form>
          {state.message !== "" ? (
            <div className="col-md-12">
              <div id="error_message" className="alert alert-danger">
                {state.message}
              </div>
            </div>
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
};

export default PersonalInfoStep;
