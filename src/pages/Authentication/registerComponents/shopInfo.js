import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import img from "../../../assets/images/photo-ic.svg";
import {
  ValidationForm,
  TextInput,
  FileInput,
} from "react-bootstrap4-form-validation";
import { useState } from "react";

const ShopInfoStep = ({ nextStep, storeValues, values }) => {
  const [state, setState] = useState({
    providerName: "",
    providerDesc: "",
    serviceProviderLogo: "",
    message: "",
  });

  const handleUpload = (e) => {
    
    setState({ ...state, serviceProviderLogo: e.target.files[0] });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (state.providerName === "") {
      setState({ ...state, message: "Please enter the shop name" });
      return;
    }
    storeValues(state);
    nextStep(7);
  };
  return (
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
                1/3
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
        <ValidationForm
          className="form-horizontal mt-5 "
          id="ProviderForm"
          onSubmit={handleOnSubmit}
        >
          <div className="form-group">
            <label htmlFor="shopname">Shop Name</label>
            <TextInput
              name="PROVIDER_NAME"
              id="PROVIDER_NAME"
              type="text"
              required
              value={values.providerName}
              successMessage=""
              errorMessage="Please Enter Your Shop Name"
              className="form-control"
              onChange={(e) =>
                setState({ ...state, providerName: e.target.value })
              }
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="PROVIDER_DESCRIPTION">Shop Description</label>
            <div>
              <textarea
                placeholder="Write your shop desciption"
                value={values.providerDesc}
                onChange={(e) =>
                  setState({ ...state, providerDesc: e.target.value })
                }
                name="PROVIDER_DESCRIPTION"
                id="PROVIDER_DESCRIPTION"
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
                    <img src={img} className="img-fluid" alt="Img" />
                  </div>
                  <span className="label ml-3 ">
                    <label
                      htmlFor="upload-photo"
                      style={{ color: "#F2421B", cursor: "pointer" }}
                    >
                      Select logo
                    </label>
                    <FileInput
                      name="serviceProviderLogo"
                      id="upload-photo"
                      fileType={["jpeg", "png", "jpg", "gif"]}
                      style={{ opacity: 0, position: "absolute", zIndex: "-1" }}
                      onChange={handleUpload}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group mt-4 text-center">
            <Button
              color="primary"
              className="btn-auth btn-primary-auth w-md waves-effect waves-light"
              type="button"
              onClick={handleOnSubmit}
            >
              Continue
            </Button>
          </div>
        </ValidationForm>
        {state.message !== "" ? (
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

export default ShopInfoStep;
