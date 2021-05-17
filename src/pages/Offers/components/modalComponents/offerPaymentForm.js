import React, { Fragment, useEffect, useState } from "react";
import { Button, ButtonContent, Form, Radio } from "semantic-ui-react";
import visaImg from "../../../../assets/images/visa.svg";
import masterCardImg from "../../../../assets/images/mastercard.svg";

const OfferPaymentForm = ({ cancel, nextStep }) => {
  const [state, setState] = useState({
    walletBalance: false,
    selectedCard: "visa",
  });
  const [newOfferData, setNewofferData] = useState("");

  useEffect(() => {
    let isMounted = new AbortController();
    const newOffer = JSON.parse(localStorage.getItem("newOffer") || "[]");

    if (newOffer.length === 0) {
      nextStep(2);
      return;
    }
    if (newOffer.OFFER_TYPE_ID === "1") {
      setNewofferData(newOffer);
    } else {
      localStorage.removeItem("newOffer");
      nextStep("");
    }
    return () => {
      isMounted.abort();
    };
  }, []);

  const handleOnChangeCheckbox = (e, { checked }) => {
    if (checked) {
      setState({ ...state, walletBalance: true });
    } else {
      setState({ ...state, walletBalance: false });
    }
  };

  const handleOnChangeRadio = (e, { value }) => {
    setState({ ...state, selectedCard: value });
  };

  const handleOnClickPay = () => {
     ("here");
  };

  return (

    <Fragment>
      {newOfferData !== "" && (
        <Fragment>
          <div className="offer-content">
            <p>Purchase Details</p>
            <div className="purchase-content">
              {newOfferData.OFFER_TYPE_ID === "1" && (

                <Fragment>
                  <p>Featured Offer 3 Days * 10 AED/Day</p>
                  <p>30 AED</p>
                </Fragment>

              )}
              {newOfferData.OFFER_TYPE_ID === "2" && (
                <Fragment>
                  <p>Normal Offer ({newOfferData.OFFER_NAME}) * Free</p>
                  <p>Free</p>
                </Fragment>
              )}
            </div>
          </div>
          <hr />
          <div className="purchase-total">

            <p>Total</p>

            {newOfferData.OFFER_TYPE_ID === "1" && <p>30 AED</p>}
            {newOfferData.OFFER_TYPE_ID === "2" && <p>Free</p>}
          </div>
        </Fragment>

      )}

      <Form>

        <Form.Field className="promoCode">

          <Form.Input placeholder="Promo Code" />


          <Button content="Apply" />
        </Form.Field>
        <hr />

        <div className="payment-method-container">
          <p>Payment Method</p>
          <div className="payment-method-content">
            <p>Available Balance</p>
            <div className="balance-chkbox">
              <div className="availability-chkbox payment">
                <Form.Field>
                  <Form.Checkbox
                    toggle
                    checked={state.walletBalance}
                    onChange={handleOnChangeCheckbox}
                  />
                  <div className="balance-info">
                    <p>AED 940</p>
                    <p>Use Available Balance For Payment</p>
                  </div>
                </Form.Field>
              </div>
            </div>
          </div>

          <div className="credit-card-content">
            <p>Credit Cards</p>
            <ul>
              <li>
                <div className="credit-cards">
                  <Form.Field className="radio-field">
                    <div className="radio-content">
                      <Radio
                        name="creditCard"
                        value="visa"
                        checked={state.selectedCard === "visa"}
                        onChange={handleOnChangeRadio}
                      />
                      <img src={visaImg} width="100" alt="Visa Img" />
                    </div>
                    <p>**** **** **** 1223</p>
                  </Form.Field>
                </div>
              </li>
              <li>
                <div className="credit-cards">
                  <Form.Field className="radio-field">
                    <div className="radio-content">
                      <Radio
                        name="creditCard"
                        value="masterCard"
                        checked={state.selectedCard === "masterCard"}
                        onChange={handleOnChangeRadio}
                      />

                      <img
                        src={masterCardImg}
                        width="100"
                        alt="masterCard Img"
                      />
                      
                    </div>
                    <p>**** **** **** 8019</p>

                  </Form.Field>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="offers-action">
          <Button content="Pay 30 AED" onClick={handleOnClickPay} />
          <Button content="Cancel" onClick={() => cancel()} />
        </div>
      </Form>
    </Fragment>
  );
};

export default OfferPaymentForm;