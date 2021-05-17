import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import Vector from "./Vectormap";

class Vectormap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Maps", link : "#" },
                { title : "Vector Map", link : "#" },
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Vector Map", this.state.breadcrumbItems);
    }

    onMarkerClick(props, marker, e) {
        alert("You clicked in this marker");
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">World Map</h4>
                                    <p className="card-title-desc">Example of vector map.</p>

                                    <Vector
                                        value="world_mill"
                                        height="400"
                                        width="478.5"
                                        color="rgb(122, 111, 190)"
                                    />

                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">USA Map</h4>
                                    <p className="card-title-desc">Example of vector map.</p>

                                    <Vector
                                        value="us_aea"
                                        height="400"
                                        width="478.5"
                                        color="rgb(122, 111, 190)"
                                    />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Canada Map</h4>
                                    <p className="card-title-desc">Example of vector map.</p>

                                    <Vector
                                        value="ca_lcc"
                                        height="400"
                                        width="478.5"
                                        color="rgb(122, 111, 190)"
                                    />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Australia Map</h4>
                                    <p className="card-title-desc">Example of vector map.</p>

                                    <Vector
                                        value="au_mill"
                                        height="400"
                                        width="478.5"
                                        color="rgb(122, 111, 190)"
                                    />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>        
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Vectormap);