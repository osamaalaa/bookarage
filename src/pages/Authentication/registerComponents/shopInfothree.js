import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import upload from "../../../assets/images/upload.svg";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import { Button, Card, CardBody } from "reactstrap";
import { _insertServiceProviderLicense } from "../../../services/authRequests/signup";

const ShopInfoStepThree = ({
  nextStep,
  storeValues,
  values,
  loading,
  success,
  message,
}) => {
  const [state, setState] = useState({
    SERVICE_PROVIDER_VAT_NUMBER: values.SERVICE_PROVIDER_VAT_NUMBER,
    license: values.license,
    licenseMessage: "",
    loading: false,
  });

  useEffect(() => {
    let isMounted = true;
    //  (state);

    if (!isMounted || message === "") return;
    if (/successfully/.test(message)) {
      nextStep(5);
    }
    setState({ ...state, licenseMessage: message });
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

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || !success.success) return;

    const newLicense = new FormData();
    newLicense.append(
      "SERVICE_PROVIDER_VAT_NUMBER",
      state.SERVICE_PROVIDER_VAT_NUMBER
    );
    newLicense.append("SERVICE_PROVIDER_NAME", success.name);
    newLicense.append("license", state.license);
    _insertServiceProviderLicense(newLicense).then((resLicense) => {
      console.log(resLicense);
      if (resLicense.success) {
        localStorage.removeItem("newAccount");
        nextStep(9);
      }
    });

    // setState({ ...state, loading: loading });

    return () => {
      isMounted = false;
    };
  }, [success, nextStep, state.SERVICE_PROVIDER_VAT_NUMBER, state.license]);

  const handleUploadLicense = (e) => {
    setState({ ...state, license: e.target.files[0] });
  };

  const handleFieldsProviderLicense = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    if (state.SERVICE_PROVIDER_VAT_NUMBER === "") {
      setState({ ...state, licenseMessage: "Please enter VAT Number" });
      return;
    }
    console.log(state);
    storeValues(state);
    nextStep(8);
  };
  return (
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
                3/3
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
        <ValidationForm
          className="form-horizontal mt-5 "
          id="ProviderFormLicense"
          onSubmit={handleOnSubmit}
        >
          <div className="form-group">
            <label htmlFor="SERVICE_PROVIDER_VAT_NUMBER">Vat Number</label>
            <TextInput
              name="SERVICE_PROVIDER_VAT_NUMBER"
              id="SERVICE_PROVIDER_VAT_NUMBER"
              type="text"
              required
              value={state.SERVICE_PROVIDER_VAT_NUMBER || ""}
              successMessage=""
              errorMessage="Please Enter Your Vat Number"
              className="form-control"
              onChange={handleFieldsProviderLicense}
            />
          </div>

          <div className="form-group mt-3 file-upload">
            <label className="mb-0" htmlFor="shop_name">
              Trading License
            </label>
            <p className="mb-1">File Details size maximum 2mb extension pdf</p>
            <div className="d-flex">
              <div className="button-wrapper position-relative">
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={upload} alt="" className="img-fluid" />
                  </div>
                  <span className="label ml-3 ">Upload License</span>
                </div>
                <input
                  type="file"
                  name="license"
                  id="upload"
                  className="d-inline-block position-absolute"
                  placeholder="Upload File"
                  onChange={handleUploadLicense}
                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/pdf, image/*"
                />
              </div>
            </div>
          </div>

          <div className="form-group mt-5 text-center">
            <Button
              color="primary"
              className="btn-auth btn-primary-auth w-md waves-effect waves-light"
              type="submit"
              disabled={state.loading}
              // onClick={ continue}
            >
              Continue
            </Button>
          </div>
        </ValidationForm>
        {state.licenseMessage ? (
          <div className="col-md-12">
            <div id="error_message_license" className="alert alert-danger">
              {state.licenseMessage}
            </div>
          </div>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default ShopInfoStepThree;
