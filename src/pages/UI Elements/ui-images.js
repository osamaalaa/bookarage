import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Images
import user1 from "../../assets/images/users/user-1.jpg";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img2 from "../../assets/images/small/img-2.jpg";

class UiImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Images", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Images", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Image thumbnails</h4>
                                    <p className="card-title-desc">In addition to our border-radius utilities, you can use
                                        <code className="highlighter-rouge">.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>

                                    <div className="">
                                        <img className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true"/>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Image Rounded & Circle</h4>
                                    <p className="card-title-desc">Use classNames
                                        <code>.rounded</code> and <code>.rounded-circle</code>.</p>

                                    <div className="">
                                        <img className="rounded mr-2 mo-mb-2" alt="200x200" width="200" src={img4} data-holder-rendered="true"/>
                                        <img className="rounded-circle" alt="200x200" src={user4} data-holder-rendered="true"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Responsive images</h4>
                                    <p className="card-title-desc">Images in Bootstrap are made responsive with <code className="highlighter-rouge">.img-fluid</code>. <code className="highlighter-rouge">max-width: 100%;</code> and <code className="highlighter-rouge">height: auto;</code> are applied to the image so that it scales with the parent element.</p>

                                    <div className="">
                                        <img src={img2} className="img-fluid" alt="Responsive"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Default media object</h4>
                                    <p className="card-title-desc">The default media displays a media object (images, video, audio) to the left or right of a content block.
                                    </p>

                                    <Media className="mb-4">
                                        <img className="d-flex mr-3 rounded-circle" src={user6} alt="Generic placeholder" height="64"/>
                                        <Media body>
                                            <h5 className="mt-0 font-size-16">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>

                                    <Media className="mb-4">
                                        <img className="d-flex mr-3 rounded-circle" src={user2} alt="Generic placeholder" height="64"/>
                                        <Media body>
                                            <h5 className="mt-0 font-size-16">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                            <Media className="mt-3">
                                                <Link className="d-flex pr-3" to="#">
                                                    <img src={user3} alt="Generic placeholder" height="64" className="rounded-circle"/>
                                                </Link>
                                                <Media body>
                                                    <h5 className="mt-0 font-size-16">Media heading</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </Media>
                                            </Media>
                                        </Media>
                                    </Media>

                                    <Media>
                                        <Media body>
                                            <h5 className="mt-0 mb-1 font-16">Media object</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <img className="d-flex ml-3 rounded-circle" src={user4} alt="Generic placeholder" height="64"/>
                                    </Media>

                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Media alignment</h4>
                                    <p className="card-title-desc">The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>

                                    <Media className="mb-4">
                                        <img className="d-flex align-self-start rounded mr-3" src={user3} alt="Generic placeholder" height="64"/>
                                        <Media body>
                                            <h5 className="mt-0 font-size-16">Top-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </Media>
                                    </Media>

                                    <Media className="mb-4">
                                        <img className="d-flex align-self-center rounded mr-3" src={user5} alt="Generic placeholder" height="64"/>
                                        <Media body>
                                            <h5 className="mt-0 font-size-16">Center-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </Media>
                                    </Media>

                                    <Media>
                                        <img className="d-flex align-self-end rounded mr-3" src={user1} alt="Generic placeholder" height="64"/>
                                        <Media body>
                                            <h5 className="mt-0 font-size-16">Bottom-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </Media>
                                    </Media>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiImages);