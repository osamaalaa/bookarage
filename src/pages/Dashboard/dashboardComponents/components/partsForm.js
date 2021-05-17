import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";

const PartsForm = ({ count }) => {
  const [state, setState] = useState({
    quantity: 1,
    name: "",
    number: "",
    price: "",
    labourCost: "",
  });

  const handleOnClickPlus = () => {
     ("here");
  };
  const handleOnClickMinus = () => {
     ("here");
  };
  return (
    <div className="parts-card">
      <div className="card-title">
        <p>Part 1</p>
        <div className="parts-action">
          <p>Qty</p>
          <Icon name="plus" onClick={handleOnClickPlus} />
          <Form.Input type="number" value={state.quantity} />
          <Icon name="minus" onClick={handleOnClickMinus} />
        </div>
      </div>
      <div className="part-form">
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input
              label="Name"
              onChange={(e, { value }) => setState({ ...state, name: value })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Number"
              onChange={(e, { value }) => setState({ ...state, number: value })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Price (AED)"
              onChange={(e, { value }) => setState({ ...state, price: value })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Labour Cost (AED)"
              onChange={(e, { value }) =>
                setState({ ...state, labourCost: value })
              }
            />
          </Form.Field>
        </Form.Group>
      </div>
    </div>
  );
};

export default PartsForm;
