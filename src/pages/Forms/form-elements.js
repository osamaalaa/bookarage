import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,

} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class FormElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Forms", link : "#" },
                { title : "Form Elements", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Form Elements", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
               
                <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Textual inputs</h4>
                                    <p className="card-title-desc">Here are examples of <code className="highlighter-rouge">.form-control</code> applied to each textual HTML5 <code className="highlighter-rouge">&lt;input&gt;</code> <code className="highlighter-rouge">type</code>.</p>

                                    <FormGroup row>
                                        <Label for="example-text-input" className="col-sm-2 col-form-label">Text</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-search-input" className="col-sm-2 col-form-label">Search</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="search" defaultValue="How do I shoot web" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-email-input" className="col-sm-2 col-form-label">Email</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="email" defaultValue="bootstrap@example.com" id="example-email-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">URL</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Telephone</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-password-input" className="col-sm-2 col-form-label">Password</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="password" defaultValue="hunter2" id="example-password-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-number-input" className="col-sm-2 col-form-label">Number</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number" defaultValue="42" id="example-number-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-datetime-local-input" className="col-sm-2 col-form-label">Date and time</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-date-input" className="col-sm-2 col-form-label">Date</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="date" defaultValue="2011-08-19" id="example-date-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-month-input" className="col-sm-2 col-form-label">Month</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="month" defaultValue="2011-08" id="example-month-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-week-input" className="col-sm-2 col-form-label">Week</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="week" defaultValue="2011-W33" id="example-week-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-time-input" className="col-sm-2 col-form-label">Time</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-color-input" className="col-sm-2 col-form-label">Color</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="color" defaultValue="#7a6fbe" id="example-color-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className="col-sm-2 col-form-label">Select</Label>
                                        <Col sm="10">
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Large select</option>
                                                <option>Small select</option>
                                            </select>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className="col-sm-2 col-form-label">Custom Select</Label>
                                        <Col sm="10">
                                            <select className="custom-select">
                                                <option defaultValue>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-text-input-lg" className="col-sm-2 col-form-label">Large</Label>
                                        <Col sm="10">
                                            <Input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mb-0" row>
                                        <Label for="example-text-input-sm" className="col-sm-2 col-form-label">Small</Label>
                                        <Col sm="10">
                                            <Input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm"/>
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(FormElements);