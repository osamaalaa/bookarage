import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import StateContext from "../../../../component/context/stateContext";
import { _getAllDefaultServices } from "../../../../services/axiosRequests";
import { _addDefaultService } from "../../../../services/managementRequests";

const AddDefaultServiceModal = ({ updateDefaultServices }) => {
  const [open, setOpen] = useState(false);
  const { showModal, setShowModal } = useContext(StateContext);
  const [defaultServices, setDefaultServices] = useState([]);


  const [selectedDefaultService, setSelectedDefaultService] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "defaultService") {
      setOpen(true);
      setLoading(true);
      _getAllDefaultServices().then((res) => {
        let defaultServicesData = [];
        res.result.map((defaultService, i) => {
            defaultServicesData.push({ key: i, text: defaultService.name, value: defaultService.name });
          return defaultServicesData;
        });
        setDefaultServices(defaultServicesData);
        setLoading(false);
      });
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleOnClickAddDefaultService = () => {
    updateDefaultServices("");
    setLoading(true);
    const serviceProviderId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    const newDefaultService = {
      PROVIDER_DEFAULT_NAME: selectedDefaultService,
      SERVICE_PROVIDER_ID: serviceProviderId.SERVICE_PROVIDER_ID,
    };
    
    _addDefaultService(newDefaultService).then((res) => {
      updateDefaultServices("defaultService");
      setLoading(false);

      setShowModal({ modalName: "success", data: null });
    });
  };

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body add-brand">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon>close</Icon>
          </div>
          <div className="modal-title">
            <p>Add Default Services</p>
            <p>Default Services that you provide services for</p>
          </div>
          <Form loading={loading}>
            <Form.Field width={`${window.innerWidth <= 767 ? "16" : "8"}`}>
              <Form.Dropdown
                label="Select Default Service"
                placeholder="Select Default Service"
                search
                loading={loading}
                disabled={loading}
                fluid
                selection
                options={defaultServices}
                onChange={(e, { value }) => setSelectedDefaultService(value)}
              />
            </Form.Field>
          </Form>
          <div className="modal-action-btn">
            <Button content="Add" onClick={handleOnClickAddDefaultService} />
            <Button
              content="cancel"
              className="sec-btn"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDefaultServiceModal;
