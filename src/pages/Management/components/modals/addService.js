import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Form /*, Transition */ } from "semantic-ui-react";
//import successImg from "../../../../assets/images/success.svg";
import StateContext from "../../../../component/context/stateContext";
import {
  _AddServiceByServiceProviderId,
  _getAllServices,
} from "../../../../services/managementRequests";

/*const services = [
  { key: "1", text: "Electric Repair", value: "1" },
  { key: "2", text: "Mechanical Repair", value: "2" },
  { key: "3", text: "Toyota", value: "3" },
  { key: "4", text: "Jeep", value: "4" },
  { key: "5", text: "Chevrolette", value: "5" },
  { key: "6", text: "Opel", value: "6" },
  { key: "7", text: "Dodge", value: "7" },
  { key: "8", text: "BMW", value: "8" },
];*/
const AddServiceModal = ({ updateService }) => {
  const [open, setOpen] = useState(false);
  const { showModal, setShowModal } = useContext(StateContext);
  const [allServices, setAllServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [services, setServices] = useState([]);
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [serviceAvailability, setServiceAvailability] = useState("");
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "service") {
      setOpen(true);
      _getAllServices().then((res) => {
        console.log(res);
        if (res.success) {
          setAllServices(res.result);
          let serviceData = [];

          res.result.map((service, i) => {
            serviceData.push({
              key: i,
              text: service.SERVICE_NAME,
              value: service.SERVICE_ID,
            });
            return serviceData;
          });
          console.log("OsamaServices", serviceData);
          setServices(serviceData);
        }
      });
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleOnChangeService = (e, { value }) => {
    console.log("Change", e.target.querySelector("span.text").innerHTML, value);
    setSelectedService({
      name: e.target.querySelector("span.text").innerHTML,
      id: value,
    });
    const index = allServices.findIndex((obj) => obj.SERVICE_ID === value);
    console.log(index);
    setCost(allServices[index].START_PRICE);
    setServiceDesc(allServices[index].SERVICE_DETAILS);
    setCurrency(allServices[index].CURRENCY);
    setServiceAvailability(allServices[index].AVAILABLE_NAME);
  };

  const handleOnChangeCheckbox = (e, { checked }) => {
    if (checked) {
      setServiceAvailability("Available");
    } else {
      setServiceAvailability("Unavailable");
    }
  };

  const handleOnClickSubmit = () => {
    setLoading(true);
    updateService("");
    const providerId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    const newService = {
      SERVICE_PROVIDER_ID: providerId.SERVICE_PROVIDER_ID,
      SERVICE_ID: selectedService.id,
      SERVICE_PROVIDERS_SERVICES_NAME: selectedService.name,
      START_PRICE: cost,
      CURRENCY: selectedService.CURRENCY,
      SERVICE_DETAILS: selectedService.SERVICE_DETAILS,
    };
    _AddServiceByServiceProviderId(newService).then((res) => {
      if (!res.success) {
        history.push("/login");
      }
      console.log(res);
      updateService("service");
      setLoading(false);

      setShowModal({ modalName: "success", data: { type: "service" } });
    });
  };

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body add-brand">
          <Container>
            <div className="close-icon" onClick={() => setOpen(false)}>
              <Icon>close</Icon>
            </div>
            <div className="modal-title">
              <p>Add Service</p>
            </div>
            <Form loading={loading}>
              <Form.Group>
                <Form.Field width={`${window.innerWidth <= 767 ? "16" : "12"}`}>
                  <Form.Dropdown
                    label="Select Service"
                    fluid
                    placeholder="Select Service"
                    selection
                    options={services}
                    onChange={handleOnChangeService}
                  />
                </Form.Field>
                <Form.Field width={`${window.innerWidth <= 767 ? "16" : "4"}`}>
                  <Form.Input
                    type="number"
                    label="Cost From"
                    value={cost}
                    onChange={(e, { value }) => setCost(value)}
                    placeholder="Cost"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Form.TextArea
                  rows="3"
                  value={serviceDesc}
                  onChange={(e, { value }) => setServiceDesc(value)}
                  placeholder="Write the details about the service"
                ></Form.TextArea>
              </Form.Field>
              <div className="availability-chkbox">
                <Form.Field>
                  <p>Service Availability</p>
                  <Form.Checkbox
                    toggle
                    checked={serviceAvailability === "Available" ? true : false}
                    onChange={handleOnChangeCheckbox}
                  />
                </Form.Field>
              </div>
            </Form>
            <div className="modal-action-btn">
              <Button
                content="Add"
                onClick={handleOnClickSubmit}
                loading={loading}
                disabled={loading}
              />
              <Button
                content="cancel"
                className="sec-btn"
                onClick={() => setOpen(false)}
                loading={loading}
                disabled={loading}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
