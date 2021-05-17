import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import EmailSidebar from "./email-sidebar";
import EmailToolBar from "./email-toolbar";

//Import Image
import user1 from "../../assets/images/users/user-1.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

class EmailRead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Email", link : "#" },
                { title : "Email Read", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Email Read", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            {/* email sidebar */}
                            <EmailSidebar/>

                            <div className="email-rightbar mb-3">

                            <Card>
                                    {/* email toolbar */}
                                    <EmailToolBar/>

                                    <CardBody>

                                        <Media className="mb-4">
                                            <img className="d-flex mr-3 rounded-circle avatar-sm" src={user1} alt="Generic placeholder"/>
                                            <Media className="align-self-center" body>
                                                <h4 className="font-size-14 m-0">Humberto D. Champion</h4>
                                                <small className="text-muted">support@domain.com</small>
                                            </Media>
                                        </Media>

                                        <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                                        <p>Dear Lorem Ipsum,</p>
                                        <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                                        </p>
                                        <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                        <p>Sincerly,</p>
                                        <hr />

                                        <Row>
                                            <Col xl="2" xs="6">
                                                <Card>
                                                    <CardImg top className="img-fluid" src={img3} alt="Card image cap"/>
                                                    <div className="my-2 text-center">
                                                        <Link to="" className="text-muted font-weight-normal">Download</Link>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xl="2" xs="6">
                                                <Card>
                                                    <CardImg top className="img-fluid" src={img4} alt="Card image cap"/>
                                                    <div className="my-2 text-center">
                                                        <Link to="" className="text-muted font-weight-normal">Download</Link>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Link to="email-compose" className="btn btn-secondary waves-effect mt-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </CardBody>

                                </Card>

                            </div>

                        </Col>

                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(EmailRead)