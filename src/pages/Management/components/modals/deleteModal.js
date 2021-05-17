import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import StateContext from "../../../../component/context/stateContext";

const DeleteModal = () => {
  const [open, setOpen] = useState(false);
  const { showModal } = useContext(StateContext);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "delete") {
      setOpen(true);
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);
  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon>close</Icon>
          </div>
          <div className="modal-title">
            <p>Delete Service</p>
          </div>

          <div className="delete-confirm-container">
            <p>Are you sure you want to delete this service ?</p>
            <div className="selected-service">
              <p>Selected service</p>
              <div className="selected-item">
                <p>Electric Repair</p>
              </div>
            </div>
          </div>
          <div className="modal-action-btn">
            <Button content="Cancel" onClick={() => setOpen(false)} />
            <Button content="Delete" className="sec-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
