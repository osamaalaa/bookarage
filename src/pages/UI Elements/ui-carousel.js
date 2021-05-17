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

// Carousel
import Slide from "./CarouselTypes/slide";
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol";
import Slidewithindicator from "./CarouselTypes/slidewithindicator";
import Slidewithcaption from "./CarouselTypes/slidewithcaption";
import Slidewithfade from "./CarouselTypes/slidewithfade";


class UiCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Carousel", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Carousel", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Slides only</h4>
                                    <Slide />
                                </CardBody>
                            </Card>
                        </Col>
                        

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">With controls</h4>
                                    <p className="card-title-desc">Adding in the previous and next controls:</p>
                                    <Slidewithcontrol />
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">With indicators</h4>
                                    <p className="card-title-desc">You can also add the indicators to the carousel, alongside the controls, too.</p>

                                    <Slidewithindicator />
                                </CardBody>
                            </Card>
                        </Col>
                        

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">With captions</h4>
                                    <Slidewithcaption />
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Crossfade</h4>
                                    
                                    <Slidewithfade />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>      
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiCarousel);