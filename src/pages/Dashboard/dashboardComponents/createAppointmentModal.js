import React, { useContext, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
//Import Date Picker
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StateContext from "../../../component/context/stateContext";
//import { _getServiceProviderInfo } from "../../../services/dashboardRequests";
//import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { _createNewExternalUser } from "../../../services/externalUserRequests";
import SweetAlert from "react-bootstrap-sweetalert";

/*
 
const serviceProviderID = JSON.parse(
  localStorage.getItem("serviceProviderData") || "[]"
);

 */


const CreateAppointmentModal = ({  }) => {

  const { showModal, setShowModal } = useContext(StateContext);

  const [open, setOpen] = useState(false);

  // const [date, setDate] = useState("");
  //const [time, setTime] = useState("");

  const [values, setValues] = useState({
    countryCode: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState("");

  //const [phoneNumber, setPhoneNumber] = useState("");

  //const history = useHistory();

  const [state, setState] = useState({
    customerName: "",

    carMakeID: "",
    serviceID: "",
    success_msg: false,
  });

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    if (showModal.modalName === "createAppointment") {
      setOpen((prev) => !prev);
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  // useEffect(() => {
  //   let isMounted = true;
  //   if (!isMounted || open === false) return;
  //   setLoading((prev) => !prev);

  //   _getServiceProviderInfo(serviceProviderID.SERVICE_PROVIDER_ID).then(
  //     (res) => {

  //       if (!res.success) {
  //         if (res.error === "token") {
  //           history.push("/login");
  //           return;
  //         }
  //         return;
  //       }

  //       setCarMake(res.result.brands);
  //       setServices(res.result.services);
  //     }
  //   );
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [open]);

  //DatePicker
  /*const handleDefault = (value) => {
    setDate(value);
  };*/
  /*const handleTime = (value) => {
    setTime(value);
  };*/
  const tog_large = () => {
    setOpen((prev) => !prev);
    setShowModal({ modalName: "", data: null });
  };

  /*const handleOnChangeCarMake = (e) => {
    const value = e.target.value;
   
    setState({ ...state, carMakeID: value });
  };*/

  /*const handleOnChangeService = (e) => {
    const value = e.target.value;
    setState({ ...state, serviceID: value });
  };*/

  const handleOnClickAdd = () => {
    // setState({ success_msg : true }) 
    const serviceProvider = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    console.log("Phone Number", values);
    const data = {
      PHONE_NUMBER: "+" + values.phone,
      USER_NAME: userName,
      SERVICE_PROVIDER_NAME: serviceProvider.PROVIDER_NAME,
    };
    _createNewExternalUser(data).then((res) => {
      if (res.success) {
        setState({ success_msg: true });
      }
    });
    // setOpen(false);
    // setOpen((prev) => !prev);
  };
  const handleOnCancel = () => {
    // setShowModal({ modalName: "createAppointment", data: null });
    window.location.reload();
    // setOpen(false);
    // setOpen((prev) => !prev);
  };

  return (
    <Modal isOpen={open} toggle={tog_large} autoFocus={true} size="lg">
      <ModalHeader toggle={tog_large}>Create appointment</ModalHeader>
      <ModalBody>
        {/* <form> */}
        <Form loading={loading}>
          <h4>Customer information</h4>
          <div className="row w-100 mx-0 p-3">
            <div className="col-md-4">
              <label htmlFor="name">Customer Name</label>
              <div className="form-group">
                <Form.Input
                  className="form-control"
                  value={userName}
                  onChange={(e, { value }) => setUserName(value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="phone">Phone Number</label>
              <div className="form-group">
                {/* <input
                  className="form-control"
                  placeholder="(XXX)XXXX"
                  type="tel"
                /> */}
                <PhoneInput
                  country={"ae"}
                  // placeholder="PhoneNumber"
                  inputProps={{
                    name: "phoneNumber",
                    required: true,

                    // autoFocus: true,
                  }}
                  // value={phoneNumber || ""}

                  onChange={(phone, country) =>
                    setValues({
                      ...values,
                      phone: phone,
                      countryCode: country.countryCode,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-12">
            
              <label htmlFor="vehicle1" className="ml-2">
                {" "}
                Send sms to the customer about installing the application?
              </label>
            </div>
          </div>

          {/* <h4>Car information</h4>
          <div className="row w-100 mx-0 p-3">
            <div className="col-md-4">
              <label htmlFor="name">Car Make</label>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={handleOnChangeCarMake}
                >
                  {carMake.length > 0 &&
                    carMake.map((car, i) => (
                      <option key={i} value={car.PROVIDER_BRAND_ID}>
                        {car.PROVIDER_BRAND_NAME}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            
            <div className="col-md-4">
              <label htmlFor="name">Model Year</label>
              <div className="form-group">
                <select className="form-control">
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                </select>
              </div>
            </div>
          </div>
          <h4>Service information</h4>
          <div className="row w-100 mx-0 p-3">
            <div className="col-md-4">
              <label htmlFor="name">Select Service</label>
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={handleOnChangeService}
                >
                  {services.length > 0 &&
                    services.map((service, i) => (
                      <option key={i} value={service.SERVICE_ID}>
                        {service.SERVICE_NAME}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="name">Service Date</label>
              <div className="form-group">
                <DatePicker
                  className="form-control"
                  selected={date}
                  onChange={handleDefault}
                />
              </div>
            </div>
            
            <div className="col-12">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1" className="ml-2">
                {" "}
                Send sms to the customer about installing the application?
              </label>
            </div>
          </div>
          */}

          <div className="d-flex align-items-center">
            <button
              className="submit-create mr-3"
              onClick={handleOnClickAdd}
              disabled={loading}
            >
              create
            </button>
            <button
              className="cancel-btn"
              onClick={tog_large}
              disabled={loading}
            >
              cancel
            </button>
          </div>
          {state.success_msg ? (
            <SweetAlert
              title="Done!"
              success
              showCancel
              confirmBtnBsStyle="success"
              cancelBtnBsStyle="danger"
              onConfirm={handleOnCancel}
              onCancel={handleOnCancel}
            >
              Your Customer Recieved Message Sucessfully!
            </SweetAlert>
          ) : null}
          {/* </form> */}
        </Form>
        {/* <h3>For add external user to our system, You can contact us on{" "}<a href="tel:+9665877665">+9665877665</a></h3> */}
      </ModalBody>
    </Modal>
  );
};

export default CreateAppointmentModal;
