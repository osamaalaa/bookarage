import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";

class FormValidations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Forms", link : "#" },
                { title : "Form Validation", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Form Validation", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Validation type</h4>
                                    <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>

                                    <AvForm>
                                    <AvField
                                        name="username"
                                        label="Required  "
                                        placeholder="Type Something"
                                        type="text"
                                        errorMessage="Enter Name"
                                        validate={{ required: { value: true } }}
                                    />

                                       
                                            <label>Equal To</label>
                                            <AvField
                                                name="password"
                                                type="text"
                                                placeholder="Password"
                                                errorMessage="Enter password"
                                                validate={{ required: { value: true } }}
                                            />
                                            <AvField
                                                name="password1"
                                                type="text"
                                                placeholder="Re-type Password"
                                                errorMessage="Enter Re-password"
                                                validate={{
                                                    required: { value: true },
                                                    match: { value: "password" }
                                                }}
                                            />

                                            <AvField
                                                name="email"
                                                label="E-Mail  "
                                                placeholder="Enter Valid Email"
                                                type="email"
                                                errorMessage="Invalid Email"
                                                validate={{
                                                    required: { value: true },
                                                    email: { value: true }
                                                }}
                                            />
                                            <AvField
                                                name="URL"
                                                label="URL  "
                                                placeholder="URL"
                                                type="text"
                                                errorMessage="This value should be a valid url."
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                    value: "https://.*",
                                                    errorMessage: "This value should be a valid url."
                                                    }
                                                }}
                                            />
                                        <AvField
                                            name="digits"
                                            label="Digits  "
                                            placeholder="Enter Only Digits"
                                            type="number"
                                            errorMessage="Enter Only Digits"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Digits"
                                                }
                                            }}
                                        />
                                        <AvField
                                            name="number"
                                            label="Number  "
                                            placeholder="Enter Only number"
                                            type="number"
                                            errorMessage="Enter Only Number"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Numbers"
                                                }
                                            }}
                                        />
                                        <AvField
                                            name="alphanumeric"
                                            label="Alphanumeric  "
                                            placeholder="Enter Only alphanumeric value"
                                            type="text"
                                            errorMessage="Enter Only Alphanumeric"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9a-zA-Z]+$",
                                                errorMessage: "Only Alphanumeric"
                                                }
                                            }}
                                        />
                                        <FormGroup>
                                            <Label>Textarea</Label>
                                            <div>
                                                <textarea required className="form-control" rows="5"></textarea>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                    Submit
                                                </Button>
                                                <Button type="reset" color="secondary" className="waves-effect">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </FormGroup>
                                    </AvForm>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Range validation</h4>
                                    <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>

                                    <AvForm className="custom-validation">

                                    <AvField
                                        name="Min_Length"
                                        label="Min Length  "
                                        placeholder="Min 6 chars"
                                        type="number"
                                        errorMessage="Min 6 chars."
                                        validate={{
                                            required: { value: true },
                                            minLength: { value: 6, errorMessage: "Min 6 chars." }
                                        }}
                                    />
                                    <AvField
                                        name="Max_Length"
                                        label="Max Length  "
                                        placeholder="Max 6 chars"
                                        type="number"
                                        errorMessage="Max 6 chars."
                                        validate={{
                                            required: { value: true },
                                            maxLength: { value: 6, errorMessage: "Max 6 chars." }
                                        }}
                                    />
                                        <AvField
                                            name="Range_Value"
                                            label="Range Length  "
                                            placeholder="Text between 5 - 10 chars length"
                                            type="number"
                                            errorMessage="range between 5 to 10"
                                            validate={{ required: { value: true } }}
                                        />
                                        <AvField
                                            name="Min_Value1"
                                            label="Min Value"
                                            placeholder="Min value is 6"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be greater than or equal to 6."
                                            validate={{
                                                required: { value: true },
                                                min: { value: 6 }
                                            }}
                                        />
                                        <AvField
                                            name="Max_Value1"
                                            label="Max Value"
                                            placeholder="Max value is 6"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be less than or equal to 6."
                                            validate={{
                                                required: { value: true },
                                                max: { value: 6 }
                                            }}
                                        />
                                        <AvField
                                            name="Min_Value"
                                            label="Range Value"
                                            placeholder="Number between 6 - 100"
                                            min={6}
                                            type="number"
                                            errorMessage="This value should be between 6 and 100."
                                            validate={{
                                                required: { value: true },
                                                min: { value: 6 },
                                                max: { value: 100}
                                            }}
                                        />
                                        <AvField
                                            name="Regular_Exp"
                                            label="Regular Exp  "
                                            placeholder="Hex. Color"
                                            type="number"
                                            errorMessage="Hex Value"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[#0-9]+$",
                                                errorMessage: "Only Hex Value"
                                                }
                                            }}
                                            />

                                        <div className="form-group mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                    Submit
                                                </Button>
                                                <Button type="reset" color="secondary" className="waves-effect">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    </AvForm>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(FormValidations);
