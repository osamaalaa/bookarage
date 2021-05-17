import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { registerUser, clearError, clearErrorLogin } from "../../store/actions";
//import { useHistory } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import "../../assets/css/auth.css";

import { ToastContainer, /* toast,*/ Zoom } from "react-toastify";
import AccountInfoStep from "./registerComponents/accountInfo";
import PersonalInfoStep from "./registerComponents/personalInfo";
import ShopInfoStep from "./registerComponents/shopInfo";
import ShopInfoStepTwo from "./registerComponents/shopInfoSec";
import ShopInfoStepThree from "./registerComponents/shopInfothree";
import RolesSelectionStep from "./registerComponents/rolesSelection";
import SuccessStep from "./registerComponents/successStep";
import VerfiyPhoneStep from "./registerComponents/verifyPhone";
import SuccessAccountStep from "./registerComponents/successAccount";
import {
  _addNewAccount,
  _insertServiceProvider,
  /*_insertServiceProviderLicense,*/
} from "../../services/authRequests/signup";

const Pagesregister = (props) => {
  const [state, setState] = useState({
    step: 1,
    message: "",
    storageData: "",
  });
  const [firstStepForm, setFirstStepForm] = useState("");
  const [secondStepForm, setSecondStepForm] = useState("");
  const [thirdStepForm, setThirdStepForm] = useState("");
  const [fourthStepForm, setFourthStepForm] = useState("");
  const [fifthStepForm, setFifthStepForm] = useState("");
  const [sixthStepForm, setSixthStepForm] = useState("");

  //const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const json = JSON.parse(localStorage.getItem("newAccount") || "[]");

    if (json.length === 0) return;

    setState({ ...state, step: 6, storageData: json });
    return () => {
      isMounted = false;
    };
  }, [state]);

  const handleNextStep = (value) => {
    //  (value, state);
    if (value === 4 && state.step === 4) {
      const newAccount = {
        firstname: firstStepForm.firstName,
        lastname: firstStepForm.lastName,
        birthdate: "11/06/1994",
        country: "Alexandria",
        city: "Alexandria",
        phoneNumberCode: thirdStepForm.code,
        phonenumber: "+" + secondStepForm.phonenumber,
        nationality: firstStepForm.nationality,
        email: firstStepForm.email,
        password: firstStepForm.password,
        code: firstStepForm.code,
        roles: [JSON.parse(localStorage.getItem("roles"))],
      };
      //  (newAccount);
      _addNewAccount(newAccount).then((res) => {
        console.log(res);
        if (!res.success) {
          setThirdStepForm({ ...state, loading: false });
          if (!res.error) {
            setState({ ...state, message: res.message });
            return;
          }

          if (res.error) {
            if (/invalid-phone-number/.test(res.error.code)) {
              //  (res.error.message);
              setState({ ...state, message: res.error.message });
              return;
            }
            if (/auth\/phone-number-already-exists/.test(res.error.code)) {
              setState({ ...state, message: res.error.message });
              return;
            }
          }
          return;
        }

        localStorage.setItem("newAccount", JSON.stringify(res.result));
        setState({
          ...state,
          message: res.message,
          step: 5,
          storageData: res.result,
        });
      });
      return;
    } else if (value === 8 && state.step === 8) {
      //  (fourthStepForm.serviceProviderLogo);
      const newServiceProvider = new FormData();
      newServiceProvider.append("PROVIDER_NAME", fourthStepForm.providerName);
      newServiceProvider.append("PROVIDER_RATE", "5");
      newServiceProvider.append(
        "PROVIDER_WORKING_HOURS",
        "Monday to Saturday 9 AM TO 12 AM"
      );
      newServiceProvider.append("PROVIDER_LOCATION_LAT", "10.00000000");
      newServiceProvider.append("PROVIDER_LOCATION_LNG", "10.00000000");
      newServiceProvider.append(
        "PROVIDER_PHONE_NUMBER_ONE",
        state.storageData.phonenumber
      );
      newServiceProvider.append(
        "PROVIDER_DESCRIPTION",
        fourthStepForm.providerDesc
      );
      newServiceProvider.append(
        "PROVIDER_ADDRESS",
        fifthStepForm.PROVIDER_ADDRESS
      );
      newServiceProvider.append("PROVIDER_CITY", fifthStepForm.PROVIDER_CITY);
      newServiceProvider.append(
        "PROVIDER_COUNTRY",
        fifthStepForm.PROVIDER_COUNTRY
      );
      newServiceProvider.append("serviceProviderCover", null);
      newServiceProvider.append(
        "serviceProviderLogo",
        fourthStepForm.serviceProviderLogo
      );
      newServiceProvider.append("USER_ID", state.storageData.id);

      _insertServiceProvider(newServiceProvider).then((res) => {
        console.log(res);
        if (res.success) {
          // setSixthStepForm({ ...sixthStepForm, loading: true });
          setSixthStepForm({
            ...sixthStepForm,
            success: true,
            providerName: fourthStepForm.providerName,
          });
        }
      });
      return;
    } else {
      setState({ ...state, step: value });
    }
  };

  return (
    <React.Fragment>
      <div className="account-pages auth-bg" id="auth-page">
        <Container>
          <ToastContainer transition={Zoom} Style="background-color: #F2421B" />
          <Row className="justify-content-center align-center">
            <Col md="7" lg="7" xl="7">
              {state.step === 1 && (
                <RolesSelectionStep
                  nextStep={(value) => setState({ ...state, step: value })}
                />
              )}
              {state.step === 2 && (
                <PersonalInfoStep
                  user={props.user}
                  registrationError={props.registrationError}
                  nextStep={(value) => handleNextStep(value)}
                  storevalues={(value) => setFirstStepForm(value)}
                  values={firstStepForm}
                />
              )}
              {state.step === 3 && (
                <AccountInfoStep
                  nextStep={(value) => handleNextStep(value)}
                  storeValues={(value) => setSecondStepForm(value)}
                  values={secondStepForm}
                />
              )}
              {state.step === 4 && (
                <VerfiyPhoneStep
                  nextStep={(value) => handleNextStep(value)}
                  phoneValue={secondStepForm}
                  storeValue={(value) => setThirdStepForm(value)}
                  loading={thirdStepForm.loading}
                  message={state.message}
                />
              )}
              {state.step === 5 && (
                <SuccessAccountStep
                  nextStep={(value) => handleNextStep(value)}
                />
              )}

              {state.step === 6 && (
                <ShopInfoStep
                  nextStep={(value) => handleNextStep(value)}
                  storeValues={(value) => setFourthStepForm(value)}
                  values={fourthStepForm}
                />
              )}
              {state.step === 7 && (
                <ShopInfoStepTwo
                  nextStep={(value) => handleNextStep(value)}
                  storeValues={(value) => setFifthStepForm(value)}
                  values={fifthStepForm}
                />
              )}
              {state.step === 8 && (
                <ShopInfoStepThree
                  nextStep={(value) => handleNextStep(value)}
                  storeValues={(value) => setSixthStepForm(value)}
                  values={sixthStepForm}
                  success={{
                    success: sixthStepForm.success,
                    name: sixthStepForm.providerName,
                  }}
                  loading={sixthStepForm.loading}
                />
              )}
              {state.step === 9 && <SuccessStep />}

              <div className="mt-5 text-center copyRight">
                <p>Bookarage. All rights reserved 2020</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  clearError,
  clearErrorLogin,
})(Pagesregister);
