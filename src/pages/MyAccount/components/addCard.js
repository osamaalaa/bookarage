import { Icon } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
import VisaIcon from "../../../assets/images/icons/Visa-icon.png";
//import MasterCard from "../../../assets/images/icons/Master-Icon.png";
import { _createNewCard } from "../../../services/cardPayment";
const AddNewCardModal = ({ updateCards }) => {
  const { showModal, setShowModal } = useContext(StateContext);
  const [state, setState] = useState({
    expiry: "",
    cvv: "",
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "newCard") {
      setOpen(true);
    } else {
      setOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  /*const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };*/

  const handleOnClickAddCard = () => {
    // updateCards("");
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user") || "[]");
    const newCard = {
      USER_ID: user.id,
      CARD_NUMBER: cardNumber,
      CARD_EXP_MONTH: cardExpMonth,
      CARD_EXP_YEAR: cardExpYear,
      CARD_CVC: cardCvc,
      CARD_HOLDER_NAME: cardHolderName,
      CARD_EMAIL: cardEmail,
    };
    // setShowModal({ modalName: "successNew", data: { type: "brand" } });
    _createNewCard(newCard).then((res) => {
      console.log(res);
      if (res.success === false) {
        //  alert("Please enter a vaild Data!");
        setShowModal({ modalName: "successFalse", data: { type: "brand" } });

        return;
      }
      setLoading(false);
      // updateCards("card");
      setShowModal({ modalName: "success", data: { type: "service" } });
      // window.location.reload();
    });
  };

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body details">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon>close</Icon>
          </div>
          <div className="card3">
            <div className="face front">
              <h3 className="debit">Bookarage Payment</h3>
              <img
                src={VisaIcon}
                className="bank"
                width="64px"
                height="60px"
                alt="visa icon"
              ></img>

              <img className="chip" src={VisaIcon} alt="chip"></img>
              <h3 className="number">{state.cNumber}</h3>
              <h5 className="valid">
                <span>
                  VALID <br></br> THRU
                </span>
                <span>10/28</span>
              </h5>
              <h5 className="card-holder">{state.name}</h5>
            </div>
            <div className="face back">
              <div className="blackbar"></div>
              <div className="cvvtext">
                <div className="white-bar"></div>
                <div className="cvv">123</div>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis ex nec nulla posuere sollicitudin. Proin nec orci
                at est pellentesque malesuada eu a neque. Maecenas quis
                porttitor odio. Praesent faucibus dui nisl, ac luctus mauris
                pulvinar in. Morbi vitae ante a nunc ullamcorper rutrum. Donec
                non interdum purus, gravida elementum mi.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div
              className="row d-flex "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="" style={{ width: "100%" }}>
                <div className="card2 ">
                  <p className="heading2">PAYMENT DETAILS</p>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field>
                        <Form.Input
                          // placeholder="1234 5678 9123 1234"
                          label="Card Number"
                          type="number"
                          maxLength="16"
                          value={cardNumber}
                          onChange={(e, { value }) => setCardNumber(value)}
                          placeholder="Please Enter Card Number"
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                          placeholder="Card Name"
                          label="Card Holder Name"
                          value={cardHolderName}
                          onChange={(e, { value }) => setCardHolderName(value)}
                        />
                      </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field>
                        <Form.Input
                          placeholder="MM"
                          label="Expiry Month"
                          value={cardExpMonth}
                          onChange={(e, { value }) => setCardExpMonth(value)}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                          placeholder="YY"
                          label="Expiry Year"
                          value={cardExpYear}
                          onChange={(e, { value }) => setCardExpYear(value)}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                          maxLength={3}
                          placeholder="CVV"
                          label="CVV"
                          value={cardCvc}
                          onChange={(e, { value }) => setCardCvc(value)}
                        />
                      </Form.Field>
                      {/* <Form.Field>
                        <Form.Input
                         
                          placeholder="Email"
                          label="Email"
                          value={cardEmail}
                          onChange={(e, { value }) => setCardEmail(value)}
                        />
                      </Form.Field> */}
                    </Form.Group>

                    <div className="modal-action-btn">
                      <div className="modal-action-btn">
                        <Button content="Add" onClick={handleOnClickAddCard} />
                        <Button
                          content="cancel"
                          className="sec-btn"
                          onClick={() => setOpen(false)}
                        />
                      </div>
                    </div>
                  </Form>
                  {/* <form className="card-details ">
                    <div className="form-group">
                      <p className="text-warning ">Card Number</p>{" "}
                      <input
                        className="input2"
                        type="text"
                        name="cNumber"
                        value={state.cNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3457"
                        size="17"
                        id="cno"
                        minLength="19"
                        maxLength="19"
                      ></input>
                      <img
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        width="64px"
                        height="60px"
                      ></img>
                    </div>
                    <div className="form-group">
                      <p className="text-warning mb-0">Cardholder's Name</p>{" "}
                      <input
                        className="input2"
                        value={state.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Name"
                        size="17"
                      ></input>
                    </div>
                    <div className="form-group pt-2">
                      <div className="row d-flex">
                        <div className="col-sm-4">
                          <p className="text-warning mb-0">Expiration</p>{" "}
                          <input
                            className="input2"
                            type="text"
                            name="exp"
                            placeholder="MM/YYYY"
                            size="7"
                            id="exp"
                            value={state.expiry}
                            onChange={handleChange}
                            minLength="7"
                            maxLength="7"
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <p className="text-warning mb-0">Cvv</p>{" "}
                          <input
                            className="input2"
                            type="password"
                            name="cvv"
                            placeholder="&#9679;&#9679;&#9679;"
                            size="1"
                            value={state.cvv}
                            onChange={handleChange}
                            minLength="3"
                            maxLength="3"
                          ></input>
                        </div>
                        <div className="col-sm-5 pt-0">
                          {" "}
                          <button type="button" className="btn2 btn-primary">
                            <i className="fas fa-arrow-right px-3 py-2"></i>
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCardModal;
