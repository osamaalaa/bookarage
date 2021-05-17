import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button"
import img from "../../assets/images/photo-ic.svg";
import upload from "../../assets/images/upload.svg";
import service from "../../assets/images/service-ic.svg";
import deleteIcon from "../../assets/images/delete-ic.svg";
import editIcon from "../../assets/images/edit.svg";

import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
//import { Link } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Select from "react-select";
//import ChipInput from "material-ui-chip-input"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Pagesetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shop_name: "",
      logo: "",
      loading: false,
      message: "",
      tags: [],
    };
  }

  // Add Chips
  // handleAddChip = (chip) => {
  //     this.setState({
  //       tags: [...this.state.tags, chip]
  //     });
  //   }
  // Delete Chips
  // handleDeleteChip = (chip) => {
  //     this.setState({
  //       tags: _.without(this.state.tags, chip)
  //     });
  //   }

  render() {
    return (
      <React.Fragment>
        <div className="account-pages auth-bg">
          <Container>
            <Row className="justify-content-center">
              {/* First Step --------------------------------------------- */}
              <Col md="7" lg="7" xl="7">
                <Card className="overflow-hidden card-auth setup-card my-5 align-items-stretch">
                  <h3 className="text-center mt-3">Setup Shop</h3>
                  <header className="mx-5 mt-2 text-center">
                    <div className="d-flex justify-content-center">
                      <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={20} />
                        <Box
                          top={0}
                          left={0}
                          bottom={0}
                          right={0}
                          position="absolute"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="textSecondary"
                          >
                            1/5
                          </Typography>
                        </Box>
                      </Box>
                      <div className="ml-3 text-left info-text">
                        <h4>Shop information</h4>
                        <span>Shop logo, Description</span>
                      </div>
                    </div>
                  </header>
                  <CardBody className="pt-0">
                    <Form
                      className="mt-3"
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="shop_name">Shop Name</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="shop_name"
                          value={this.state.shop_name}
                          onChange={this.onChangeShopName}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="shop_name">Shop Description</label>
                        <div>
                          <textarea
                            required
                            placeholder="Write your shop desciption"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group mt-3 file-upload">
                        <label htmlFor="shop_name">Logo</label>
                        <div className="d-flex">
                          <div className="button-wrapper position-relative">
                            <div className="d-flex align-items-center">
                              <div className="img-border d-flex justify-content-center align-items-center">
                                <img src={img} alt="" className="img-fluid" />
                              </div>
                              <span className="label ml-3 ">Select logo </span>
                            </div>
                            <input
                              type="file"
                              name="upload"
                              id="upload"
                              className="d-inline-block position-absolute"
                              placeholder="Upload File"
                            />
                          </div>
                        </div>
                        <p className="mt-2 mb-0">
                          File Details size maximum 2mb extension jpg,png
                        </p>
                      </div>

                      <div className="form-group mt-4 text-center">
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          disabled={this.state.loading}
                        >
                          <span>Continue</span>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center copyRight">
                  <p>Bookarage. All rights reserved 2020</p>
                </div>
              </Col>

              {/* Second Step ---------------------------------  */}
              <Col md="7" lg="7" xl="7">
                <Card className="overflow-hidden card-auth setup-card my-5 align-items-stretch">
                  <h3 className="text-center mt-3">Setup Shop</h3>
                  <header className="mx-5 mt-2 text-center">
                    <div className="d-flex justify-content-center">
                      <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={40} />
                        <Box
                          top={0}
                          left={0}
                          bottom={0}
                          right={0}
                          position="absolute"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="textSecondary"
                          >
                            2/5
                          </Typography>
                        </Box>
                      </Box>
                      <div className="ml-3 text-left info-text">
                        <h4>Location information</h4>
                        <span>Country, city, and location on map</span>
                      </div>
                    </div>
                  </header>
                  <CardBody className="pt-0">
                    <Form
                      className="mt-3"
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="shop_name">Country</label>
                        <Select
                          onChange={this.handleSelectGroup}
                          className="select2 form-control"
                          placeholder="Select Country ..."
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="shop_name">City</label>
                        <Select
                          onChange={this.handleSelectGroup}
                          className="select2 form-control"
                          placeholder="Select City ..."
                        />
                      </div>

                      <div className="form-group mb-5">
                        <label htmlFor="shop_name">Shop Address</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="shop_name"
                          value={this.state.shop_name}
                          onChange={this.onChangeUsername}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group mt-5 text-center">
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          disabled={this.state.loading}
                        >
                          <span>Continue</span>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center copyRight">
                  <p>Bookarage. All rights reserved 2020</p>
                </div>
              </Col>

              {/* Third Step -------------------------------------------------  */}
              <Col md="7" lg="7" xl="7">
                <Card className="overflow-hidden card-auth setup-card my-5 align-items-stretch">
                  <h3 className="text-center mt-3">Setup Shop</h3>
                  <header className="mx-5 mt-2 text-center">
                    <div className="d-flex justify-content-center">
                      <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={60} />
                        <Box
                          top={0}
                          left={0}
                          bottom={0}
                          right={0}
                          position="absolute"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="textSecondary"
                          >
                            3/5
                          </Typography>
                        </Box>
                      </Box>
                      <div className="ml-3 text-left info-text">
                        <h4>Legel information</h4>
                        <span>Vat number, Trading license</span>
                      </div>
                    </div>
                  </header>
                  <CardBody className="pt-0">
                    <Form
                      className="mt-3"
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="shop_name">Vat Number</label>
                        <Input
                          type="number"
                          className="form-control"
                          name="shop_name"
                          value={this.state.shop_name}
                          onChange={this.onChangeUsername}
                          validations={[required]}
                          placeholder="Write your vat number"
                        />
                      </div>

                      <div className="form-group mt-3 file-upload">
                        <label className="mb-0" htmlFor="shop_name">
                          Trading License
                        </label>
                        <p className="mb-1">
                          File Details size maximum 2mb extension jpg,png
                        </p>
                        <div className="d-flex">
                          <div className="button-wrapper position-relative">
                            <div className="d-flex align-items-center">
                              <div className="d-flex justify-content-center align-items-center">
                                <img
                                  src={upload}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <span className="label ml-3 ">
                                Upload License
                              </span>
                            </div>
                            <input
                              type="file"
                              name="upload"
                              id="upload"
                              className="d-inline-block position-absolute"
                              placeholder="Upload File"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group mt-5 text-center">
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          disabled={this.state.loading}
                        >
                          <span>Continue</span>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center copyRight">
                  <p>Bookarage. All rights reserved 2020</p>
                </div>
              </Col>

              {/* Forth Step -------------------------------------------------  */}
              <Col md="7" lg="7" xl="7">
                <Card className="overflow-hidden card-auth setup-card my-5 align-items-stretch">
                  <h3 className="text-center mt-3">Setup Shop</h3>
                  <header className="mx-5 mt-2 text-center">
                    <div className="d-flex justify-content-center">
                      <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={80} />
                        <Box
                          top={0}
                          left={0}
                          bottom={0}
                          right={0}
                          position="absolute"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="textSecondary"
                          >
                            4/5
                          </Typography>
                        </Box>
                      </Box>
                      <div className="ml-3 text-left info-text">
                        <h4>Brands And Services</h4>
                        <span>Add brands and services you provide.</span>
                      </div>
                    </div>
                  </header>
                  <CardBody className="pt-0 brands mx-5">
                    <Form
                      className="mt-3"
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="brands_services">
                          Brands Sservices For
                        </label>
                        <button className="d-flex align-items-center bg-transparent border-0 add-brand">
                          <i className="fas fa-plus mr-2"></i>
                          <span>Add Brand</span>
                        </button>
                      </div>
                      {/* <ChipInput
    value={this.state.tags}
    onAdd={(chip) => this.handleAddChip(chip)}
    onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
/> */}
                      <div className="d-flex align-items-center">
                        <div className="form-group mt-3 mr-3">
                          <Input className="form-control" name="shop_name" />
                        </div>
                        <div>
                          <button className="btn btn-primary">Add Brand</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="brands-chips d-flex align-items-center">
                          <span>Volkswagen</span>
                          <button className="border-0 bg-transparent text-primary">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                        <div className="brands-chips d-flex align-items-center">
                          <span>Volkswagen</span>
                          <button className="border-0 bg-transparent text-primary">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 d-flex justify-content-between align-items-center">
                        <label htmlFor="brands_services">
                          Providing Services
                        </label>
                        <button className="d-flex align-items-center bg-transparent border-0 add-brand">
                          <i className="fas fa-plus mr-2"></i>
                          <span>Add Service</span>
                        </button>
                      </div>

                      <Row className="justify-content-center">
                        <Col md="12" lg="12" xl="12" className="services">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center service-header">
                              <img
                                src={service}
                                alt=""
                                className="img-fluid mr-2"
                              />
                              <span>Electric Repair</span>
                            </div>
                            <span className="status available">Available</span>
                          </div>
                          <div className="body-service">
                            <p className="mt-3">
                              Duis Pretium Gravida Enim, Vel Maximus Ligula
                              Fermentum A. Sed Rhoncus Eget Ex Id Egestas. Nam
                              Nec Nisl Placerat, Tempus Erat A, Condimentum
                              Metus. Curabitur Nulla Nisi, Lacinia At Lobortis
                              At, Suscipit At
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <span>Start From 50 AED</span>
                              <div className="d-flex align-items-center service-header">
                                <button className="d-flex align-items-center bg-transparent border-0">
                                  <img
                                    alt="Edit"
                                    src={editIcon}
                                    className="mr-2"
                                  />
                                  <span>Edit</span>
                                </button>
                                <button className="d-flex align-items-center bg-transparent border-0">
                                  <img
                                    alt="Edit"
                                    src={deleteIcon}
                                    className="mr-2"
                                  />
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <div className="form-group mt-5 text-center d-flex align-items-centers">
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          disabled={this.state.loading}
                        >
                          <span>Continue</span>
                        </Button>
                        <Button
                          className="w-md waves-effect waves-light btn-auth btn-primary-auth"
                          disabled="true"
                        >
                          <span>Setup Later</span>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center copyRight">
                  <p>Bookarage. All rights reserved 2020</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
