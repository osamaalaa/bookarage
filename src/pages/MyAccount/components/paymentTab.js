import React, { useContext, useState, Fragment, useEffect } from "react";

import { Card, CardBody } from "reactstrap";
import "../../../assets/css/app2.css";
import StateContext from "../../../component/context/stateContext";
import AddNewCardModal from "./addCard";
import { _getWalletDataByUserId } from "../../../services/cardPayment";
import SuccessModal from "./successModal";
import ErrorModal from "./ErrorModal";
const PaymentTab = ({ paymentInfo, update }) => {
  /*const [state, setState] = useState({
    cNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    new: false,
  });*/
  const { setShowModal } = useContext(StateContext);
  const [updateNow] = useState(update);
  const [cards, setCards] = useState([]);
  const handleOnClickNewCard = () => {
    setShowModal({ modalName: "newCard", data: null });
  };
  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const user = JSON.parse(localStorage.getItem("user") || "[]");

    _getWalletDataByUserId(user.id).then((res) => {
      if (res.success) {
        setCards(res.result);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [updateNow, update]);

  return (
    <Fragment>
      <AddNewCardModal />
      <SuccessModal />
      <ErrorModal />
      <Card style={{ borderRadius: "2.25rem" }}>
        <CardBody>
          {cards.length > 0 &&
            cards.map((card, i) => (
              <div>
                {/* <div className="credit-card visa selectable"> */}
                <div
                  key={i}
                  className={"credit-card " + card.CARD_BRAND + " selectable"}
                >
                  <h3 Style="color:white;">
                    {card.firstname} {card.lastname}
                  </h3>

                  <div className="credit-card-last4">{card.CARD_CVC}</div>

                  <div className="credit-card-expiry">
                    {card.CARD_EXP_MONTH}/{card.CARD_EXP_YEAR}
                  </div>
                </div>
              </div>
            ))}
        </CardBody>

        <div className="credit-card new selectable">
          <button
            onClick={handleOnClickNewCard}
            id="mySizeChart"
            className="addbtn"
          >
            {" "}
            + Link a new card
          </button>
        </div>
      </Card>
    </Fragment>
  );
};

export default PaymentTab;
