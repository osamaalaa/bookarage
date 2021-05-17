import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  ValidationForm,
  TextInput,
  SelectGroup,
} from "react-bootstrap4-form-validation";
import { useState } from "react";

const ShopInfoStepTwo = ({ nextStep, storeValues, values }) => {
  const [state, setState] = useState({
    PROVIDER_COUNTRY: values.PROVIDER_COUNTRY,
    PROVIDER_CITY: values.PROVIDER_CITY,
    PROVIDER_ADDRESS: values.PROVIDER_ADDRESS,
  });

  const handleFieldsProvider = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (state.PROVIDER_COUNTRY === "") {
      setState({ ...state, message: "Please select your shop country" });
      return;
    }
    if (state.PROVIDER_CITY === "") {
      setState({ ...state, message: "Please select your shop city" });
      return;
    }
    if (state.PROVIDER_ADDRESS === "") {
      setState({ ...state, message: "Please select your shop address" });
      return;
    }
    storeValues(state);
    nextStep(8);
  };
  return (
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
                2/3
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
        <ValidationForm
          className="form-horizontal mt-5 "
          id="ProviderForm"
          onSubmit={handleOnSubmit}
        >
          <div className="form-group">
            <label htmlFor="PROVIDER_COUNTRY">Country</label>
            <SelectGroup
              name="PROVIDER_COUNTRY"
              id="PROVIDER_COUNTRY"
              value={state.PROVIDER_COUNTRY || ''}
              required
              errorMessage="Please select a Country."
              onChange={handleFieldsProvider}
            >
              <option value="">--- Please select Country ---</option>
              <option value="UnitedArabEmirates">United Arab Emirates</option>
              {/* <option value="SaudiArabia">Saudi Arabia</option>
                                      <option value="Egypt">Egypt</option> */}
            </SelectGroup>
          </div>
          <div className="form-group">
            <label htmlFor="PROVIDER_CITY">City</label>
            <SelectGroup
              name="PROVIDER_CITY"
              id="PROVIDER_CITY"
              value={state.PROVIDER_CITY || ''}
              required
              errorMessage="Please select a City."
              onChange={handleFieldsProvider}
            >
              <option value="">--- Please select City ---</option>

              <option value="AbuDhabi">Abu Dhabi</option>
              <option value="AbuDhabi">Al Ain</option>
              <option value="AbuDhabi">Al Khan</option>
              <option value="ArRuways">Ar Ruways</option>
              <option value="AsSatwah">As Satwah</option>
              <option value="Dayrah">Dayrah</option>
              <option value="Dubai">Dubai</option>
              <option value="Fujairah">Fujairah</option>
              <option value="Rasal-Khaimah">Ras al-Khaimah</option>
              <option value="Sharjah">Sharjah</option>
            </SelectGroup>
          </div>

          <div className="form-group mb-5">
            <label htmlFor="PROVIDER_ADDRESS">Shop Address</label>
            <TextInput
              name="PROVIDER_ADDRESS"
              id="PROVIDER_ADDRESS"
              type="text"
              required
              successMessage=""
              value={state.PROVIDER_ADDRESS || ''}
              errorMessage="Please Enter Your Shop Address"
              className="form-control"
              onChange={handleFieldsProvider}
            />
          </div>

          <div className="form-group mt-5 text-center">
            <Button
              color="primary"
              className="btn-auth btn-primary-auth w-md waves-effect waves-light"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </ValidationForm>
      </CardBody>
    </Card>
  );
};

export default ShopInfoStepTwo;
