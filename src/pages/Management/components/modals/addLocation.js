import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Button } from "semantic-ui-react";
import StateContext from "../../../../component/context/stateContext";
import GoogleMapReact from 'google-map-react';
import Location from "./locationView"
import "./map.css";
// import { Map, GoogleApiWrapper } from 'google-maps-react';




const AddBrandModal = ({ placeName , props , updateLocation}) => {
  const [open, setOpen] = useState(false);
  /*const  defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };*/
  const { showModal , setShowModal } = useContext(StateContext);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   let isMounted = true;

  //   console.log("Modal" ,showModal.modalName )
  //   updateLocation("");
  //   if (!isMounted || showModal.modalName === "") return;
  //   if (showModal.modalName === "location") {
  //     if (showModal.data !== null) {

  //       setData(showModal.data);
  //     } else {
  //       setData("");
  //     }
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  //   return () => {
  //     isMounted = false;
  //   };


  // }, [showModal]);
 
  useEffect(() => {
    let isMounted = true;
    
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "location") {
      setData(showModal.data);
      setOpen(true);
      setLoading(true);
   
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  const handleOnClickDone = () => {
    
    
      setShowModal({ modalName: "success", data: null });

      setOpen(false)
    
  };
  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body add-brand">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon>close</Icon>
          </div>
          <div className="modal-title">
            <p>Add Your Location</p>
            <p>Please Use Map To get Your Location </p>
          </div>

          <div className="modal-action-btn">
            <div style={{ height: "61 vh", width: "100%" }}>
                <Location />
              <div className="modal-action-btn">
                <Button content="Done" onClick={handleOnClickDone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrandModal;
