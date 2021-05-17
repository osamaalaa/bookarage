import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import LightData from "./LightData";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const LoadingContainer = props => <div>Loading...</div>;

class Mapsgoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Maps", link : "#" },
                { title : "Google Map", link : "#" },
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Google Map", this.state.breadcrumbItems);
    }

    onMarkerClick(props, marker, e) {
        alert("You clicked in this marker");
    }

    activateStreetView = (position) => {
        const mapObj = this.mapRef.map.getStreetView();
        mapObj.setPov({ heading: 34, pitch: 10 });
        mapObj.setPosition(position);
        mapObj.setVisible(true);
  }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Markers</h4>
                                    <p className="card-title-desc">Example of google maps.</p>

                                    <div
                                        id="gmaps-markers"
                                        className="gmaps"
                                        style={{ position: "relative" }}
                                    >
                                        <Map
                                            google={this.props.google}
                                            style={{ width: "100%", height: "100%" }}
                                            zoom={14}
                                        >
                                            <Marker
                                                title={"The marker`s title will appear as a tooltip."}
                                                name={"SOMA"}
                                                position={{ lat: 37.778519, lng: -122.40564 }}
                                            />
                                            <Marker name={"Dolores park"} />
                                            <InfoWindow>
                                                <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Overlays</h4>
                                    <p className="card-title-desc">Example of google maps.</p>

                                    <div
                                        id="gmaps-overlay"
                                        className="gmaps"
                                        style={{ position: "relative" }}
                                    >
                                        <Map
                                            google={this.props.google}
                                            zoom={14}
                                            style={{ width: "100%", height: "100%" }}
                                            initialCenter={{
                                                lat: 40.854885,
                                                lng: -88.081807
                                            }}
                                        >
                                            <Marker onClick={this.onMarkerClick} />
                                            <InfoWindow>
                                                <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Street View Panoramas</h4>
                                    <p className="card-title-desc">Example of google maps.</p>

                                    <div
                                        id="gmaps-markers"
                                        className="gmaps"
                                        style={{ position: "relative" }}
                                    >
                                        <Map
                                            google={this.props.google}
                                            ref={(map) => this.mapRef = map}
                                            zoom={14}
                                            initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                                            style={{ height: "100%", width: "100%" }}
                                            streetViewControl={true}
                                            onReady={() => { this.activateStreetView({ lat: 40.7295174, lng: -73.9986496 }) }}>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Map Types</h4>
                                    <p className="card-title-desc">Example of google maps.</p>

                                    <div
                                        id="gmaps-overlay"
                                        className="gmaps"
                                        style={{ position: "relative" }}
                                    >
                                        <Map
                                            google={this.props.google}
                                            zoom={14}
                                            styles={LightData.Data}
                                            style={{ width: "100%", height: "100%" }}
                                        >
                                            <Marker onClick={this.onMarkerClick} />
                                            <InfoWindow>
                                                <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>            
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
})(Mapsgoogle));