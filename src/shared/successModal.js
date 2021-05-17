import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import successImg from "../assets/images/success.svg";
import StateContext from "../component/context/stateContext";

const SuccessModal = () => {
  const [open, setOpen] = useState(false);
  const { showModal } = useContext(StateContext);
  const [data, setData] = useState("");

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "success") {
      if (showModal.data !== null) {
        setData(showModal.data);
      } else {
        setData(""); 
      }
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
          <div className="success-message">
            <img src={successImg} width="100" alt="" />
            <p>
              {data.uploadType ? "Your image has been uploaded" : data.type === 'offer' ? "Your offer has been saved" : 'Saved'}{" "}
              Successfully
            </p>
          </div>
          <div className="modal-action-btn">
            <Button content="Done" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
