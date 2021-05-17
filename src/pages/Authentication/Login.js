import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import AuthService from "../../services/auth.service";
import logodark from "../../assets/images/bookarage.svg";
import "../../assets/css/auth.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { _getServiceProviderID } from "../../services/axiosRequests";
import { _login } from "../../services/authRequests/login";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Pageslogin extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      phonenumberOrEmail: "",
      password: "",
      loading: false,
      message: "",
    };
    this.tog_standard = this.tog_standard.bind(this);
    // localStorage.clear();
  }

  tog_standard() {
    this.setState((prevState) => ({
      modal_standard: !prevState.modal_standard,
    }));
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  onChangeUsername(e) {
    this.setState({
      phonenumberOrEmail: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      const data = {
        phonenumberOrEmail: this.state.phonenumberOrEmail,
        password: this.state.password,
      };
      _login(data).then((res) => {
        console.log(res.success, res.roleName);

        if (!res.success) {
          this.setState({ message: res.message, loading: false });
          return;
        }
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res.roleName);
        if (/ServiceProvider/.test(res.roleName)) {
          console.log("service provider");
          _getServiceProviderID(res.id).then((providerRes) => {
            console.log(providerRes);
            if (providerRes.success) {
              this.props.history.push("/dashboard");
              // window.location.reload();
            }
            // this.props.history.push("/dashboard");
            // window.location.reload();
          });
          return;
        }
        if (/Admin/.test(res.roleName)) {
          this.props.history.push("/users-subscription");
          window.location.reload();
        }
      });
      // AuthService.login(
      //   this.state.phonenumberOrEmail,
      //   this.state.password
      // ).then(
      //   (res) => {
      //      (res.data);
      //     // if (res.data.roleName === "ServiceProvider") {
      //     //   _getServiceProviderID(res.data.id).then((providerRes) => {
      //     //      (providerRes);
      //     //   });
      //     // }

      //     // this.props.history.push("/profile");
      //     // window.location.reload();
      //   },
      //   (error) => {
      //     const resMessage =
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //       error.message ||
      //       error.toString();

      //     this.setState({
      //       loading: false,
      //       message: resMessage,
      //     });
      //   }
      // );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="account-pages auth-bg" id="auth-page">
          <Container>
            <Row className="justify-content-center align-center">
              <Col md="7" lg="7" xl="7">
                <Card className="overflow-hidden card-auth my-5">
                  <CardBody className="pt-0">
                    <h3 className="text-center mt-4">
                      <Link to="\" className="logo-auth logo-admin">
                        <img
                          src={logodark}
                          height="30"
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                    </h3>

                    <Form
                      className="mt-5"
                      onSubmit={this.handleLogin}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="phonenumberOrEmail">
                          Email Address or Phone Number
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          name="phonenumberOrEmail"
                          value={this.state.phonenumberOrEmail}
                          onChange={this.onChangeUsername}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group mt-4">
                        <label htmlFor="password">Password</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group mt-5 text-center">
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          type="submit"
                          disabled={this.state.loading}
                          // onClick={this.tog_standard}
                        >
                          {this.state.loading && (
                            <span className="spinner-border mr-2 spinner-border-sm"></span>
                          )}
                          <span>Login</span>
                        </Button>
                      </div>
                      <div className="w-100 text-center">
                        <Link to="/forget-password" className="forgetPwd-link">
                          Forgot password?{" "}
                        </Link>
                      </div>

                      <div className="w-100 text-center mt-5">
                        <h6>New to Bookarage ?</h6>
                      </div>

                      <div className="form-group text-center mt-4">
                        <Link to="/register" className="">
                          <Button
                            color="secondary"
                            type="button"
                            className="w-md waves-effect waves-light btn-secondary-auth btn-auth"
                          >
                            <span>Create new account</span>
                          </Button>
                        </Link>
                      </div>

                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center copyRight">
                  <p>Bookarage. All rights reserved 2020</p>
                </div>
              </Col>
            </Row>
            <Modal
              isOpen={this.state.modal_standard}
              toggle={this.tog_standard}
              autoFocus={true}
            >
              <ModalHeader toggle={this.tog_standard} className="loginASTitle">
                Login as?
              </ModalHeader>
              <ModalBody>
                <div className="text-center loginAS">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/dashboard">Service Provider</a>
                    </li>
                    <li>
                      <a href="/#">Showroom</a>
                    </li>
                    <li>
                      <a href="/#">Insurance</a>
                    </li>
                    <li>
                      <a href="/#">Car Recovery</a>
                    </li>
                    <li>
                      <a href="/#">Car Rental</a>
                    </li>
                  </ul>
                  <p>This view is for developers preview</p>
                </div>
              </ModalBody>
            </Modal>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
