import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Progress
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiProgressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Progress Bars", link : "#" },
            ],
        }
    }
    
    componentDidMount(){
        this.props.setBreadcrumbItems("Progress Bars", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Default Examples</h4>
                                    <p className="card-title-desc">Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

                                    <div className="">
                                        <div className="mb-4">
                                        <Progress color="primary" value={25}></Progress>
                                        </div>
                                        <div className="mb-4">
                                        <Progress color="primary" value={50}></Progress>
                                        </div>
                                        <div className="mb-4">
                                        <Progress color="primary" value={75}></Progress>
                                        </div>
                                        <div className="">
                                        <Progress color="primary" value={100}></Progress>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Backgrounds</h4>
                                    <p className="card-title-desc">Use background utility classNamees to change the appearance of individual progress bars.</p>

                                    <div className="">
                                        <div className="mb-4">
                                        <Progress color="success" value={25}></Progress>
                                        </div>
                                        <div className="mb-4">
                                        <Progress color="info" value={50}></Progress>
                                        </div>
                                        <div className="mb-4">
                                        <Progress color="warning" value={75}></Progress>
                                        </div>
                                        <div className="">
                                        <Progress color="danger" value={100}></Progress>
                                        </div>
                                    </div>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Labels Example</h4>
                                    <p className="card-title-desc">Add labels to your progress bars by placing text within the <code className="highlighter-rouge">.progress-bar</code>.</p>

                                    <div className="">
                                    <Progress color="primary" value={25} >
                                    25%
                                    </Progress>
                                    </div>
                                    </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Multiple bars</h4>
                                    <p className="card-title-desc">Include multiple progress bars in a progress component if you need.</p>

                                    <div className="">
                                    <Progress multi>
                                        <Progress bar color="primary" value={15}></Progress>
                                        <Progress bar color="success" value={30}></Progress>
                                        <Progress bar color="info" value={20}></Progress>
                                    </Progress>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Height</h4>
                                    <p className="card-title-desc">We only set a <code className="highlighter-rouge">height</code> value on the <code className="highlighter-rouge">.progress-bar</code>, so if you change that value the outer <code className="highlighter-rouge">.progress</code> will automatically resize accordingly.</p>

                                    <Progress
                                        className="mb-2"
                                        value={25}
                                        color="primary"
                                        style={{ height: "3px" }}
                                    ></Progress>
                                        <Progress
                                        value={25}
                                        color="primary"
                                        style={{ height: "24px" }}
                                    ></Progress>
                                    </CardBody>
                            </Card>
                        </Col>
                        

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Animated stripes</h4>
                                    <p className="card-title-desc">The striped gradient can also be animated. Add <code className="highlighter-rouge">.progress-bar-animated</code> to <code className="highlighter-rouge">.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>

                                    <div className="">
                                    <Progress striped animated color="danger" value="80" />
                                    </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Striped</h4>
                                    <p className="card-title-desc">Add <code className="highlighter-rouge">.progress-bar-striped</code> to any <code className="highlighter-rouge">.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>

                                    <div className="">
                                        <div className="mb-3">
                                        <Progress striped color="primary" value={10}></Progress>
                                        </div>
                                        <div className="mb-3">
                                        <Progress striped color="success" value={25}></Progress>
                                        </div>
                                        <div className="mb-3">
                                        <Progress striped color="info" value={50}></Progress>
                                        </div>
                                        <div className="mb-3">
                                        <Progress striped color="warning" value={75}></Progress>
                                        </div>
                                        <div className="">
                                        <Progress striped color="danger" value={100}></Progress>
                                        </div>
                                    </div>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiProgressbar);