import { Icon } from "@material-ui/core";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import "../../../assets/css/modal.css";
import StateContext from "../../../component/context/stateContext";
import { Form } from "semantic-ui-react";
import {
  /*_RequestWithdraw ,*/ _InsertRequestWithdraw, 
} from "../../../services/axiosRequests";
import SuccessModal from "./sucessModal";
const RequestWithdrawalModal = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { showModal, setShowModal } = useContext(StateContext);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "requestWithdraw") {
      setOpen(true);
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleClose = () => {
    setAmount("");
    setDisabled(false);
    setOpen(false);
  };
  const providerID = JSON.parse(
    localStorage.getItem("serviceProviderData") || "[]"
  );
  const handleOnClickAdd = () => {
    setLoading(true);
    setDisabled(true);

    const newRequest = {
      SERVICE_PROVIDER_ID: providerID.SERVICE_PROVIDER_ID,
      WITHDRAW_AMOUNT: amount,
    };

    _InsertRequestWithdraw(newRequest).then((res) => {
      // setLoading(false); 
      setShowModal({ modalName: "success", data: null });
      window.setTimeout(function(){window.location.reload()},2000)
    });
 
  };
  return (
    <Fragment>
      <SuccessModal />
      <div className={`custom-modal${open ? " active" : ""}`}>
        <div className="custom-modal-content">
          <div className="custom-modal-body">
            <div className="close-icon" onClick={handleClose}>
              <Icon>close</Icon>
            </div>
            <div className="withdraw-title">
              <p>Enter withdraw amount in $</p>
            </div>
            <div className="withdraw-form">
              <Form>
                <Form.Field width="8">
                  <Form.Input
                    placeholder="Amount"
                    type="text"
                    value={amount}
                    onChange={(e, { value }) => setAmount(value)}
                  />
                </Form.Field>
              </Form>
            </div>
            <div className="modal-action-btn">
              <Button
                content="Request withdrawal"
                loading={disabled}
                disabled={disabled}
                onClick={handleOnClickAdd}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RequestWithdrawalModal;
