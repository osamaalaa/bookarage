import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import successImg from "../../../../assets/images/success.svg";
import StateContext from "../../../../component/context/stateContext";

const ShopLogo = () => {
  const [open, setOpen] = useState(false);
  const { showModal } = useContext(StateContext);
  const [data, setData] = useState("");

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "successUpdated") {
      if (showModal.data !== null) {
        setData(showModal.data);
      } else {
        setData("");
      }
      setOpen(true);
    } else if (showModal.modalName === "successNew") {
      setOpen(true);
      setData({ type: showModal.data.type });
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
          <div className="success-message">
            <img src={successImg} width="100" alt="" />
            {data.type ? (
              <p>You have been added a new {data.type} successfully</p>
            ) : (
              <p>Your shop Logo has been updated successfully</p>
            )}
          </div>
          <div className="modal-action-btn">
            <Button content="Done" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLogo;
