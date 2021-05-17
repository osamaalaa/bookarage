import React, { useContext, useEffect, useState } from "react";

//Import Action to copy breadcrumb items from local state to redux state
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import StateContext from "../../../component/context/stateContext";
import CustomOffer from "./modalComponents/customOffer";
import OfferPaymentForm from "./modalComponents/offerPaymentForm";
import OffersForm from "./modalComponents/offersForm";
import OffersItems from "./modalComponents/offersItems";

const CreateOfferModal = () => {
  const { showModal, setShowModal } = useContext(StateContext);
  const [open, setOpen] = useState(false);
  const [offerType, setOfferType] = useState("");

  useEffect(() => {
    let isMounted = new AbortController();
    const newOffer = JSON.parse(localStorage.getItem("newOffer") || "[]");

    if (showModal.modalName === "createOffer") {
      setOpen(true);
    }
    if (newOffer.length !== 0) {
      setOfferType("payment");
      return;
    }
    return () => {
      isMounted.abort();
    };
  }, [showModal]);

  const handleClose = () => {
    setOpen(false);
    setShowModal({ modalName: "", data: null });
    setOfferType("");
  };

  return (
    <Modal isOpen={open} toggle={handleClose} autoFocus={true} centered={true}>
      <ModalHeader toggle={handleClose}>Create offer</ModalHeader>
      <ModalBody>
        {offerType === "" && (
          <OffersItems offerType={(value) => setOfferType(value)} />
        )}

        {offerType === 1 && <CustomOffer />}

        {offerType === 2 && (
          <OffersForm
            cancel={handleClose}
            nextStep={(value) => setOfferType(value)}
          />
        )}
        {offerType === "payment" && (
          <OfferPaymentForm
            cancel={handleClose}
            nextStep={(value) => setOfferType(value)}
          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default CreateOfferModal;