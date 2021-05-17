import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Icon, TextArea } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
//import DateTimePicker from "react-datetime-picker";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import PartsForm from "./components/partsForm";
import { Fragment } from "react";

const EstimatedModal = () => {
  const [open, setOpen] = useState(false);
  const { showModal } = useContext(StateContext);
  const [partsCount, setPartsCount] = useState([1]);
  const [data, setData] = useState("");
  const [state, setState] = useState({
    date: "",
    time: "",
    parts: true,
  });

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || showModal.modalName === "") return;
    if (showModal.modalName === "estimated") {
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

  const handleChangeDate = (e, { value }) => {
    setState({ ...state, date: value });
  };
  const handleChangeTime = (e, { value }) => {
    setState({ ...state, time: value });
  };
  const handleOnChangeCheckbox = (e, { checked, value }) => {
    if (checked) {
      setState({ ...state, parts: true });
    } else {
      setState({ ...state, parts: false });
    }
  };

  const handleOnClickAddMore = () => {
    const newPart = partsCount[partsCount.length - 1] + 1;
    setPartsCount((prev) => [...prev, newPart]);
  };
 
  const handleOnClickSubmit = () => {
    ("here");
  };

  return (
    <div className={`custom-modal${open ? " active" : ""}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-body details">
          <div className="close-icon" onClick={() => setOpen(false)}>
            <Icon name="times" />
          </div>
          <div className="title-container">
            <p>Add Diagnosis Details</p>
          </div>
          <div className="form-content">
            <Form>
              <p>Finish And Delivery Time</p>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form.Group widths="equal">
                  <Form.Field className="dateTimeStyle">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date"
                      value={state.date}
                      onChange={handleChangeDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Form.Field>
                  <Form.Field className="dateTimeStyle">
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time"
                      value={state.time}
                      onChange={handleChangeTime}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Form.Field>
                </Form.Group>
              </MuiPickersUtilsProvider>

              <Form.Field width="8">
                <Form.Input label="Service Cost (AED)" type="number" />
              </Form.Field>

              <Form.Field>
                <label htmlFor="details">Diagnosis Details</label>
                <TextArea
                  rows={3}
                  id="details"
                  placeholder="Details"
                ></TextArea>
              </Form.Field>

              <div className="parts-container">
                <div className="parts-title">
                  <p>Parts Required</p>
                  <div className="parts-action">
                    <Button
                      content="Add More"
                      icon="plus"
                      onClick={handleOnClickAddMore}
                    />
                    <div className="availability-chkbox">
                      <Form.Field>
                        <Form.Checkbox
                          toggle
                          checked={state.parts}
                          onChange={handleOnChangeCheckbox}
                        />
                      </Form.Field>
                    </div>
                  </div>
                </div>
              </div>
              {state.parts && (
                <Fragment>
                  {partsCount.length > 0 &&
                    partsCount.map((part, i) => (
                      <PartsForm key={i} count={i} />
                    ))}
                </Fragment>
              )}
            </Form>
          </div>

          <div className="summary-container">
            <p>Summary</p>
            <div className="summary-content">
              <ul>
                <li>
                  <p>Service Cost</p>
                  <p>200 AED</p>
                </li>
                <li>
                  <p>Parts Cost</p>
                  <p>150 AED</p>
                </li>
                <li>
                  <p>Vat 14%</p>
                  <p>49 AED</p>
                </li>
                <li className="large">
                  <p>Total Cost</p>
                  <p>399 AED</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-action-btn">
            <Button content="Save" onClick={handleOnClickSubmit} />
            <Button content="Cancel" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatedModal;
