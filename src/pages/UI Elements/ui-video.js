import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Video", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Video", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Responsive embed video 16:9</h4>
                                    <p className="card-title-desc">Aspect ratios can be customized with modifier classNamees.</p>

                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Responsive embed video 21:9</h4>
                                    <p className="card-title-desc">Aspect ratios can be customized with modifier classNamees.</p>

                                   
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                    </div>

                                    </CardBody>
                            </Card>
                        </Col>

                    </Row>

                    <Row>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Responsive embed video 4:3</h4>
                                    <p className="card-title-desc">Aspect ratios can be customized with modifier classNamees.</p>

                                   
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                    </div>
                                    </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Responsive embed video 1:1</h4>
                                    <p className="card-title-desc">Aspect ratios can be customized with modifier classNamees.</p>

                                    
                                    <div className="embed-responsive embed-responsive-1by1">
                                        <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                    </div>

                                    </CardBody>
                            </Card>
                        </Col>

                    </Row>
            </React.Fragment>
        );
    }
}


export default connect(null, { setBreadcrumbItems })(UiVideo);