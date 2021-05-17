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

import Knob from '../AllCharts/knob/knob';

class ChartsKnob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Charts", link : "#" },
                { title : "Jquery Knob Chart", link : "#" },
            ],
            value: 35, value_cur: 29, value_prev: 44, angle: 35, steps: 45,
        angleArc: 29, ang_offset_arc: 75, readonly: 80
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Jquery Knob Chart", this.state.breadcrumbItems);
    }

    handleChange = (newValue) => {
        this.setState({ value: newValue });
    };
    handleChangecursor = (newValue) => {
        this.setState({ value_cur: newValue });
    };
    handleChangeprev = (newValue) => {
        this.setState({ value_prev: newValue });
    }; 

    render() {
        return (
            <React.Fragment>

                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">Nice, downward compatible, touchable, jQuery dial</p>

                                    <Row className="text-center">
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Disable display input</h5>
                                            <Knob
                                                        value={this.state.value}
                                                        height={200}
                                                        width={150}
                                                        fgColor="#F2421B"
                                                        displayCustom={()=> {return false}}
                                                        onChange={this.handleChange}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Cursor mode</h5>
                                            <Knob
                                                        value={this.state.value_cur}
                                                        height={200}
                                                        width={150}
                                                        fgColor="#4ac18e"
                                                        cursor={true}
                                                        displayCustom={()=> {return false}}
                                                        onChange={this.handleChangecursor}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Display previous value</h5>
                                            <Knob
                                                        value={this.state.value_prev}
                                                        height={200}
                                                        width={150}
                                                        fgColor="#ffbb44"
                                                        onChange={this.handleChangeprev}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Angle offset</h5>
                                            <Knob
                                                        value={this.state.angle}
                                                        fgColor="#ea553d"
                                                        lineCap="round"
                                                        height={200}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ angle: e }); }}
                                                    />
                                        </Col>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4"> 5-digit values, step 1000</h5>
                                            <Knob
                                                        value={this.state.steps}
                                                        fgColor="#1d1e3a"
                                                        step={10}
                                                        height={200}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ steps: e }); }}
                                                    />
                                        </Col>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Angle offset and arc</h5>
                                            <Knob
                                                        value={this.state.angleArc}
                                                        fgColor="#f06292"
                                                        angleArc={360}
                                                        angleOffset={5}
                                                        cursor={true}
                                                        height={200}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ angleArc: e }); }}
                                                    />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4">Readonly</h5>
                                            <Knob
                                                        value={this.state.readonly}
                                                        fgColor="#5468da"
                                                        thickness={0.12}
                                                        readOnly={true}
                                                        height={200}
                                                        width={150}
                                                        onChange={(e) => { }}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center" dir="ltr">
                                            <h5 className="font-size-16 mb-4"> Angle offset and arc</h5>
                                            <Knob
                                                        value={this.state.ang_offset_arc}
                                                        fgColor="#8d6e63"
                                                        thickness={0.18}
                                                        angleArc={300}
                                                        angleOffset={5}
                                                        cursor={true}
                                                        height={200}
                                                        width={150}
                                                        onChange={(e) => { this.setState({ ang_offset_arc: e }); }}
                                                    />
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>          
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(ChartsKnob);