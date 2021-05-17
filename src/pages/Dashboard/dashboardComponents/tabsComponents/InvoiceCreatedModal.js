import React, { useContext, useEffect, useState } from "react";

//import { Row, Col } from "reactstrap";
//Import Date Picker
import "react-datepicker/dist/react-datepicker.css";

import StateContext from "../../../../component/context/stateContext";

//import { useHistory } from "react-router";
// import { _updateRequestStatus } from "../../../../services/dashboardRequests";
import SweetAlert from "react-bootstrap-sweetalert";
const InvoiceCreatedModal = () => {
  const [open, setOpen] = useState(false);
  const {
    /*setModalBreadCrumb,*/
    showModal,
    /*setShowModal,
    setUpdateRequests,*/
  } = useContext(StateContext);
  const [data, setData] = useState([]);
  //   success_msg: false,
  //const [success_msg, setSucessMessage] = useState(false);
  //const history = useHistory();

  // invoiceCreated
  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "invoiceCreated") {
      if (showModal.data !== null) {
        console.log("true Open");
        setOpen(true);
        setData(showModal.data);
      } else {
        console.log("true Open data is null");
        setData("");
        setOpen(false);
      }
    } else {
  
      // setOpen(false);
    }
    return () => {
      console.log("mounted Open");
      isMounted = false;
    };
  }, [showModal]);

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <SweetAlert
        title="Your Invoice Has Been Delivered To The Client"
        success
        showCancel
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        onConfirm={() =>
          // this.setState({
          //     success_msg: false,
          // })
          setOpen(false)
        }
        onCancel={() => {
          setOpen(false)
        }}
        onClick={() => setOpen(false)}
      >
        For any issue, You can contact us on +9665877665
      </SweetAlert>
    </div>
  );
};

export default InvoiceCreatedModal;
