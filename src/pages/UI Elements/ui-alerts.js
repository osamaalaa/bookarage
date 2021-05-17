import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert, UncontrolledAlert } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiAlerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Alerts", link : "#" },
            ],

        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Alerts", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">Alerts are available for any length of text, as well as an
                      optional dismiss button. For proper styling, for Example,{" "}
                      <strong>color = </strong>{" "}
                      <code className="highlighter-rouge">"success"</code></p>

                                    <div className="">
                                        <Alert color="success">
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </Alert>
                                        <Alert color="info">
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </Alert>
                                        <Alert color="warning">
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </Alert>
                                        <Alert color="danger" className="mb-0">
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Link color</h4>
                                    <p className="card-title-desc">Use the <code className="highlighter-rouge">.alert-link</code> utility className to quickly provide matching colored links within any alert.</p>

                                    <div className="">
                                        <Alert color="success" >
                                            <strong>Well done!</strong> You successfully read <Link to="#" className="alert-link">this important alert message</Link>.
                                        </Alert>
                                        <Alert color="info" >
                                            <strong>Heads up!</strong> This <Link to="#" className="alert-link">alert needs
                                                your attention</Link>, but it's not super important.
                                        </Alert>
                                        <Alert color="warning" >
                                            <strong>Warning!</strong> Better check yourself, you're <Link to="#" className="alert-link">not looking too good</Link>.
                                        </Alert>
                                        <Alert color="danger" className="mb-0">
                                            <strong>Oh snap!</strong> <Link to="#" className="alert-link">Change a few things
                                                up</Link> and try submitting again.
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Dismissing</h4>
                                    <p className="card-title-desc">You can see this in action with a live demo:</p>

                                    <div className="">
                                        <UncontrolledAlert color="success">
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </UncontrolledAlert>

                                        <UncontrolledAlert color="info">
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </UncontrolledAlert >

                                        <UncontrolledAlert color="warning">
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </UncontrolledAlert >

                                        <UncontrolledAlert color="danger">
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </UncontrolledAlert >
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four <strong>required</strong> contextual classNamees (e.g., <code className="highlighter-rouge">.alert-success .bg-**</code>). For inline dismissal, use the alerts jQuery plugin.</p>

                                    <div className="">
                                        <Alert color="success" className="bg-success text-white" >
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </Alert>
                                        <Alert color="info" className="bg-info text-white" >
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </Alert>
                                        <Alert color="warning" className="bg-warning text-white" >
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </Alert>
                                        <Alert color="danger" className="bg-danger text-white mb-0" >
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Additional content</h4>
                                    <p className="card-title-desc">Alerts can also contain additional HTML elements like headings and paragraphs.</p>

                                    <div className="">
                                        <Alert color="success" className="mb-0" >
                                            <h4 className="alert-heading font-18">Well done!</h4>
                                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiAlerts);