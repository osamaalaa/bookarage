import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import StateContext from "../../../../component/context/stateContext";
import { _getAllBrands } from "../../../../services/axiosRequests";
import { _addBrand } from "../../../../services/managementRequests";

const AddBrandModal = ({ updateBrands }) => {
  const [open, setOpen] = useState(false);
  const { showModal, setShowModal } = useContext(StateContext);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "brand") {
      setOpen(true);
      setLoading(true);
      _getAllBrands().then((res) => {
        let brandsData = [];
        res.result.map((brand, i) => {
          brandsData.push({ key: i, text: brand.name, value: brand.name });
          return brandsData;
        });
        setBrands(brandsData);
        setLoading(false);
      });
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleOnClickAddbrand = () => {
    updateBrands("");
    setLoading(true);
    const serviceProviderId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    const newBrand = {
      PROVIDER_BRAND_NAME: selectedBrand,
      SERVICE_PROVIDER_ID: serviceProviderId.SERVICE_PROVIDER_ID,
    };
    _addBrand(newBrand).then((res) => {
      updateBrands("brand");
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
            <p>Add Brands</p>
            <p>Brands that you provide services for</p>
          </div>
          <Form loading={loading}>
            <Form.Field width={`${window.innerWidth <= 767 ? "16" : "8"}`}>
              <Form.Dropdown
                label="Select Brand"
                placeholder="Select brand"
                search
                loading={loading}
                disabled={loading}
                fluid
                selection
                options={brands}
                onChange={(e, { value }) => setSelectedBrand(value)}
              />
            </Form.Field>
          </Form>
          <div className="modal-action-btn">
            <Button content="Add" onClick={handleOnClickAddbrand} />
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

export default AddBrandModal;
