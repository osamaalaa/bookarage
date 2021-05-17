import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, TextArea } from "semantic-ui-react";
import userImg from "../../../assets/images/users/pp.jpeg";
import StateContext from "../../../component/context/stateContext";
import { _getAllCountries, _getCities } from "../../../services/axiosRequests";
import { _getServiceProviderInfo  } from "../../../services/dashboardRequests";
import { _updateShopInfo , _updateLogoShop , _getAddress } from "../../../services/managementRequests";
import SweetAlert from "react-bootstrap-sweetalert";
import AddLocation from "./modals/addLocation"
import Location from "./modals/locationView"
import axios from "axios"
import { LoadScript } from "@react-google-maps/api";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" }, 
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  { key: "eg", value: "eg", flag: "eg", text: "Egypt" },
  { key: "sa", value: "sa", flag: "sa", text: "Saudi Arabia" },
];


const ShopInfoComponent = ({ workingHrs }) => {
  const { setShowModal } = useContext(StateContext);
  const [info, setInfo] = useState([]);
  const [providerId, setProviderId] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [countriesCities, setCountriesCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countPhoneNumbers, setCountPhoneNumbers] = useState(0);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const history = useHistory();
  const [state, setState] = useState({
    SHOP_NAME: "",
    SHOP_DESCRIPTION: "",
    PHONE_NUMBER_ONE: "",
    PHONE_NUMBER_TWO: "",
    PHONE_NUMBER_THREE: "",
    PROVIDER_COUNTRY: "",
    PROVIDER_CITY: "",
    PROVIDER_ADDRESS: "",
    serviceProviderLogo: "",
    PROVIDER_LOGO_PATH: "",
    
    
    step_queue: false,
		final_queue: false,
  });

  const [curAddress , setCurrentAdd] = useState("")
  const uploadFileRef = useRef();

  useEffect(() => {
 
    let isMounted = true;
    if (!isMounted) return;
    setLoading(true);
    _getAllCountries().then((res) => {
      console.log(res);

      if (res.success) {
        setCountriesCities(res.result);
        let countryData = [];
        Object.keys(res.result).map((country, i) => {
          countryData.push({ key: i, text: country, value: country });
        });
        setCountries(countryData);
        setLoading(false);
      }
    });

    // _getAddress().then((res) => {
    //   console.log(res)
    //     // setState({
         
    //     //   curAddress: res.country_name + " , " +  res.state
    //     // })
      
        
    //   setCurrentAdd(res.country_name + "," + res.state)
     
    // });
    const providerID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );

    setProviderId(providerID.SERVICE_PROVIDER_ID);

    _getServiceProviderInfo(providerID.SERVICE_PROVIDER_ID).then((res) => {
      console.log("response shopinfo" , res);
      if (!res.success) {
        if (res.error === "token") {
          console.log("here");
          history.push("/login");
          return;
        }
      }
      if(res.result.serviceProvider){
      setState({
        ...state,
        PROVIDER_LOGO_PATH: res.result.serviceProvider.PROVIDER_LOGO_PATH,
        SHOP_NAME: res.result.serviceProvider.PROVIDER_NAME,
        SHOP_DESCRIPTION: res.result.serviceProvider.PROVIDER_DESCRIPTION,
        PHONE_NUMBER_ONE: res.result.serviceProvider.PROVIDER_PHONE_NUMBER_ONE,
        PHONE_NUMBER_TWO: res.result.serviceProvider.PROVIDER_PHONE_NUMBER_TWO,
        PHONE_NUMBER_THREE:res.result.serviceProvider.PROVIDER_PHONE_NUMBER_THREE,
        PROVIDER_COUNTRY: res.result.serviceProvider.PROVIDER_COUNTRY,
        PROVIDER_CITY: res.result.serviceProvider.PROVIDER_CITY,
        PROVIDER_ADDRESS: res.result.serviceProvider.PROVIDER_ADDRESS,

      });
      workingHrs(res.result.serviceProvider.PROVIDER_WORKING_HOURS);
    }

    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleOnUpload = (e) => {
    
    setState({ ...state, serviceProviderLogo: e.target.files[0] });
    const serviceProvider = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    const token = JSON.parse(localStorage.getItem("user") || "[]");
    const data = new FormData() 
    data.append('serviceProviderLogo', e.target.files[0])
    data.append('SERVICE_PROVIDER_ID', serviceProvider.SERVICE_PROVIDER_ID)
    
     
    axios.post("http://165.227.107.124:5000/serviceProvider/updateLogoShop", data, {
                      headers: {
                        Authorization: "Bearer " + token.accessToken,
                      },
                    }).then(res => { // then print response status
                    
                      setShowModal({ modalName: "successUpdated", data: null });
                      window.location.reload();
                })

                
  };

  const handleOnClickAddPhoneNumber = (e) => {
    const countPhones = document.querySelector(".contacts-content ul")
      .childElementCount;
      console.log(countPhones);
    setCountPhoneNumbers(countPhones);
    if (countPhones === 3) return;
    setShowInput((prev) => !prev);
  };

  const handleOnChangePhoneNumber = (e, { value }) => {
    let phoneVal = value;
    if (!/^\d+$/.test(phoneVal)) {
      const newVal = phoneVal.replace(/[^0-9+]/g, "");
      e.target.value = newVal;
      phoneVal = newVal;
    }
    if (countPhoneNumbers === 0) {
      setState({ ...state, PHONE_NUMBER_ONE: phoneVal });
    } else if (countPhoneNumbers === 1) {
      setState({ ...state, PHONE_NUMBER_TWO: phoneVal });
    } else if (countPhoneNumbers === 2) {
      setState({ ...state, PHONE_NUMBER_THREE: phoneVal });
    }
  };

  const handleOnClickDeletePhone = (i) => {
    if (i === 1) {
      setState({ ...state, PHONE_NUMBER_ONE: "" });
    } else if (i === 2) {
      setState({ ...state, PHONE_NUMBER_TWO: "" });
    } else if (i === 3) {
      setState({ ...state, PHONE_NUMBER_THREE: "" });
    }
  };

  const handleOnChangeCountry = (e, { value }) => {
    console.log(value);

    if (!value) {
      setState({ ...state, PROVIDER_COUNTRY: "" });
      return;
    }
    setState({ ...state, PROVIDER_COUNTRY: value });
    let cityData = [];
    countriesCities[value].map((city, i) => {
      cityData.push({ key: i, text: city, value: city });
    });
    setCities(cityData);
  };

  const handleOnSubmit = () => {
    setFormLoading(true);
    const update = {
      SERVICE_PROVIDER_ID: providerId,
      SHOP_NAME: state.SHOP_NAME,
      SHOP_DESCRIPTION: state.SHOP_DESCRIPTION,
      PHONE_NUMBER_ONE: state.PHONE_NUMBER_ONE,
      PHONE_NUMBER_TWO: state.PHONE_NUMBER_TWO,
      PHONE_NUMBER_THREE: state.PHONE_NUMBER_THREE,
      PROVIDER_COUNTRY: state.PROVIDER_COUNTRY,
      PROVIDER_CITY: state.PROVIDER_CITY,
      PROVIDER_ADDRESS: state.PROVIDER_ADDRESS,
    };

    _updateShopInfo(update).then((res) => {


      setFormLoading(false);
      if (!res.success) {
        if (res.error === "token") {
          history.push("/login");
          return; 
        }
      }
      setShowModal({ modalName: "success", data: null });
    
    });
  };
  const handleOnClick = () => {

    setShowModal({ modalName: "location", data: { type: "addLocation" } });
    // alert("clicked")
  }; 
  

    
  return ( 
    <Form loading={formLoading}>
      <div className="shopInfo-container">
        <div className="shop-info-title">
          <p>Basic Information</p>
        </div>
        <div className="shop-info-img">
          <p>Logo</p>
          <img src={state.PROVIDER_LOGO_PATH} width="100" alt="User Img" />
          <p className="small-text">
            File Details size maximum 2MB extension jpg, png
          </p>
          <input
            ref={uploadFileRef}
            type="file"
            hidden
            onChange={handleOnUpload}
          />
          <Button
            icon="upload"
            content="Upload"
            onClick={() => uploadFileRef.current.click()}
          />
        </div>

        <div className="shop-name-container">
          <p className="title-text">Shop Name</p>

          <Form.Field
            width={`${window.innerWidth <= 992 ? 16 : 8}`}
            className="mobile"
          >
            <Form.Input
              placeholder="George Automotive Services"
              value={state.SHOP_NAME}
              onChange={(e, { value }) =>
                setState({ ...state, SHOP_NAME: value })
              }
            />
          </Form.Field>
          <p className="small-text">
            To change the name you need to contact the admin{" "}
            <Link to="/">Contact</Link>
          </p>
        </div>

        <div className="shop-desc-container">
          <p>Shop Description</p>
          <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
            <TextArea
              rows="5"
              placeholder="Write Description"
              value={state.SHOP_DESCRIPTION}
              onChange={(e, { value }) =>
                setState({ ...state, SHOP_DESCRIPTION: value })
              }
            ></TextArea>
          </Form.Field>
        </div>

        <div className="shop-info-title">
          <p>Contact And Location</p>
        </div>
        <div className="shop-contact-container">
          <div className="contact-info">
            <p>Phone Numbers</p>
            <div className="phone-action" onClick={handleOnClickAddPhoneNumber}>
              <Icon>add</Icon>
              <p>Add Number</p>
            </div>
          </div>
          {showInput && ( 
            <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
              <Form.Input
                placeholder="Phone Number"
                onChange={handleOnChangePhoneNumber}
              />
              <div
                className="form-action-btn"
                style={{ textAlign: "center", width: "100%" }}
              >
                <Button
                  content="Add Phone number"
                  onClick={() => setShowInput(false)}
                />
              </div>
            </Form.Field>
          )}

          <div className="contacts-content">
            <ul>
              {state.PHONE_NUMBER_ONE ? (
                <li>
                  <p>{state.PHONE_NUMBER_ONE}</p>
                  <Icon onClick={() => handleOnClickDeletePhone(1)}>
                    delete
                  </Icon>
                </li>
              ) : null}

              {state.PHONE_NUMBER_TWO ? (
                <li>
                  <p>{state.PHONE_NUMBER_TWO}</p>
                  <Icon onClick={() => handleOnClickDeletePhone(2)}>
                    delete
                  </Icon>
                </li>
              ) : null}

              {state.PHONE_NUMBER_THREE ? (
                <li>
                  <p>{state.PHONE_NUMBER_THREE}</p>
                  <Icon onClick={() => handleOnClickDeletePhone(3)}>
                    delete
                  </Icon>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="shop-location-container">
          <div className="location-info">
            <p>Shop Location</p>

            <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
              <Form.Dropdown
                clearable
                fluid
                search
                selection
                loading={loading}
                disabled={loading}
                label="Country"
                value={state.PROVIDER_COUNTRY}
                options={countries}
                placeholder="Select Country"
                onChange={handleOnChangeCountry}
              />
            </Form.Field>

            <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
              <Form.Dropdown
                clearable
                fluid
                search
                selection
                label="City"
                options={cities}
                value={state.PROVIDER_CITY}
                placeholder="Select City"
                onChange={(e, { value }) =>
                  setState({ ...state, PROVIDER_CITY: value })
                }
              />
            </Form.Field>

            <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
              <Form.Input
                label="Shop Address"
                placeholder="Address..."
                value={state.PROVIDER_ADDRESS}
                onChange={(e, { value }) =>
                  setState({ ...state, PROVIDER_ADDRESS: value })
                }
              />
              <p className="link-text">
                <Icon>room</Icon>
                <span><Button onClick={handleOnClick}>Update your Address</Button></span>
              </p>
                {state.step_queue ? (
                    // <SweetAlert
                    // title="Update Address"
                    // confirmBtnText="Approve"
                    // onConfirm={() =>
                    //     setState({ step_queue: false, final_queue: true })
                    // }
                    // >

                    // Your Address Has Been Updated Automatically With your Carrent Address
                    // </SweetAlert>
                    <AddLocation />

                    // <Location />
                 
                ) : null}
                   {state.final_queue ? (
                                                <SweetAlert
                                                confirmBtnText="OK"
                                                title=""
                                                onConfirm={() => setState({ final_queue: false })}
                                                >
                                                {curAddress}
                                                </SweetAlert>
                                            ) : null}
            </Form.Field>
          </div>
        </div>

        <div className="shop-info-title">
          <p>Legal Information</p>
        </div>
        <div className="legal-info-container">
          <div className="legal-info">
            <Form.Field width={`${window.innerWidth <= 992 ? 16 : 8}`}>
              <Form.Input placeholder="5233998" label="VAT Number" disabled />
              <p className="small-text">
                To Change VAT Number you need to contact admin{" "}
                <Link to="/">Contact</Link>
              </p>
            </Form.Field>
          </div>
          <div className="tranding-info">
            <p>Trading License</p>
            <div className="trading-file">
              <Icon>description</Icon>
              <p>License 18859.pdf</p>
            </div>
            <p className="small-text">
              To change file you need to contact admin{" "}
              <Link to="/">Contact</Link>
            </p>
          </div>
        </div>

        <div className="form-action-btn">
          <Button content="Save" onClick={handleOnSubmit} />
        </div>
      </div>
    </Form>
  );
};



export default ShopInfoComponent;
