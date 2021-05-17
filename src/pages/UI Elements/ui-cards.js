import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardHeader,
  CardFooter,
  CardDeck,
  CardLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";


class UiCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Cards", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Cards", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col md="6" lg="6" xl="3">

                            
                            <Card>
                                <CardImg top className="img-fluid" src={img1} alt="Card cap"/>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
                                </CardBody>
                            </Card>

                        </Col>
                        

                        <Col md="6" lg="6" xl="3">

                            <Card>
                                <CardImg top className="img-fluid" src={img2} alt="Card cap"/>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                </ul>
                                <CardBody>
                                    <CardLink href="#" className="mr-1">Card link</CardLink>
                                    <CardLink href="#">Another link</CardLink>
                                </CardBody>
                            </Card>

                        </Col>
                        

                        <Col md="6" lg="6" xl="3">

                            <Card>
                            <CardImg top className="img-fluid" src={img3} alt="Card cap"/>
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>

                        </Col>
                        

                        <Col md="6" lg="6" xl="3">

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <h6 className="card-subtitle font-14 text-muted">Support card subtitle</h6>
                                </CardBody>
                                <CardImg top className="img-fluid" src={img4} alt="Card cap"/>
                                <CardBody>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <CardLink href="#" className="mr-1">Card link</CardLink>
                                    <CardLink href="#">Another link</CardLink>
                                </CardBody>
                            </Card>

                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col md="6">
                            <div className="card card-body">
                                <h3 className="card-title">Special title treatment</h3>
                                <CardText>With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="card card-body">
                                <h3 className="card-title">Special title treatment</h3>
                                <CardText>With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col lg="4">
                            <div className="card card-body">
                                <h4 className="card-title">Special title treatment</h4>
                                <CardText>With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card card-body text-center">
                                <h4 className="card-title">Special title treatment</h4>
                                <CardText>With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card card-body text-right">
                                <h4 className="card-title">Special title treatment</h4>
                                <CardText>With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col lg="4">
                            <Card>
                                <h4 className="card-header font-16 mt-0">Featured</h4>
                                <CardBody>
                                    <h4 className="card-title">Special title treatment</h4>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardHeader>
                                    Quote
                                </CardHeader>
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardHeader>
                                    Featured
                                </CardHeader>
                                <CardBody>
                                    <h4 className="card-title">Special title treatment</h4>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    2 days ago
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col lg="4">
                            <Card>
                                <CardImg top className="img-fluid" src={img5} alt="Card cap"/>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </CardText>
                                    <CardText>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardText>
                                </CardBody>
                                <CardImg bottom className="img-fluid" src={img7} alt="Card cap"/>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardImg className="img-fluid" src={img6} alt="Card cap"/>
                                <CardImgOverlay>
                                    <h4 className="card-title text-white font-16 mt-0">Card title</h4>
                                    <p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <CardText>
                                        <small className="text-white">Last updated 3 mins ago</small>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </Col>

                    </Row>
                    

                    <Row>
                        <Col lg="4">
                            <Card className="text-white bg-dark">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card className="text-white bg-primary">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card className="text-white bg-success">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col lg="4">
                            <Card className="text-white bg-info">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card className="text-white bg-warning">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card className="text-white bg-danger">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    

                    <Row className="mb-5">
                        <Col xs="12">
                            <h4 className="mb-4">Decks</h4>
                            <div className="card-deck-wrapper">
                                <CardDeck>
                                    <Card>
                                        <CardImg top className="img-fluid" src={img4} alt="Card cap"/>
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                            <CardText>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardImg top className="img-fluid" src={img5} alt="Card cap"/>
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                            <CardText>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardImg top className="img-fluid" src={img6} alt="Card cap"/>
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                                            <CardText>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </CardDeck>
                            </div>
                        </Col>
                    </Row>
                </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiCards);