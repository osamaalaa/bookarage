import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Badge
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Badge", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Badge", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Example</h4>
                                    <p className="card-title-desc">Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units.</p>

                                    <div className="">
                                        <h1>Example heading <Badge color="light">New</Badge></h1>
                                        <h2>Example heading <Badge color="light">New</Badge></h2>
                                        <h3>Example heading <Badge color="light">New</Badge></h3>
                                        <h4>Example heading <Badge color="light">New</Badge></h4>
                                        <h5>Example heading <Badge color="light">New</Badge></h5>
                                        <h6>Example heading <Badge color="light">New</Badge></h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Variations</h4>
                                    <p className="card-title-desc">Add any of the below mentioned modifier classNamees to change the appearance of a badge.</p>

                                    <div>
                                        <Badge color="light" className="mr-1">Light</Badge>
                                        <Badge color="primary" className="mr-1">Primary</Badge>
                                        <Badge color="success" className="mr-1">Success</Badge>
                                        <Badge color="info" className="mr-1">Info</Badge>
                                        <Badge color="warning" className="mr-1">Warning</Badge>
                                        <Badge color="danger" className="mr-1">Danger</Badge>
                                        <Badge color="dark" className="mr-1">Dark</Badge>
                                    </div>

                                    <p className="card-title-desc mt-5">Use the property<code className="highlighter-rouge">pill</code>  to make badges more rounded (with a larger <code className="highlighter-rouge">border-radius</code> and additional horizontal <code className="highlighter-rouge">padding</code>). Useful if you miss the badges from v3.</p>

                                    <div>
                                        <Badge color="light" pill className="mr-1">Light</Badge>
                                        <Badge color="primary" pill className="mr-1">Primary</Badge>
                                        <Badge color="success" pill className="mr-1">Success</Badge>
                                        <Badge color="info" pill className="mr-1">Info</Badge>
                                        <Badge color="warning" pill className="mr-1">Warning</Badge>
                                        <Badge color="danger" pill className="mr-1">Danger</Badge>
                                        <Badge color="dark" pill className="mr-1">Dark</Badge>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiBadge);