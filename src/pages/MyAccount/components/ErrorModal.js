import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
// import successImg from "../../../../assets/images/success.svg";
//import successImg from "../../../assets/images/success.svg";
import falseImg from "../../../assets/images/x.png";
import StateContext from "../../../component/context/stateContext";

const ErrorModal = () => {
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
    } else if (showModal.modalName === "successFalse") {
      setOpen(true);

      setData({ type: showModal.data.type });
      //   setOpen(false);
    } else {
      setOpen(false);
    }
    return () => {
      setOpen(false);
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
            <img src={falseImg} width="100" alt="" />
            {data.type ? (
              <p>Please Enter a valid card</p>
            ) : (
              <p>Please Enter A valid Data or a valid card</p>
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

export default ErrorModal;
