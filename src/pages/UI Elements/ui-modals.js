import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Modals", link : "#" },
            ],
            visible: false,
            modal_standard: false,
            modal_large: false,
            modal_xlarge: false,
            modal_small: false,
            modal_center: false,
            modal_scroll: false
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_xlarge = this.tog_xlarge.bind(this);
        this.tog_large = this.tog_large.bind(this);
        this.tog_small = this.tog_small.bind(this);
        this.tog_center = this.tog_center.bind(this);
        this.tog_scroll = this.tog_scroll.bind(this);
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Modals", this.state.breadcrumbItems);
    }

    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }

    
    tog_large() {
        this.setState(prevState => ({
          modal_large: !prevState.modal_large
        }));
    }
    
    tog_xlarge() {
        this.setState(prevState => ({
          modal_xlarge: !prevState.modal_xlarge
        }));
    }
      
    tog_small() {
        this.setState(prevState => ({
          modal_small: !prevState.modal_small
        }));
    }

    tog_center() {
        this.setState(prevState => ({
          modal_center: !prevState.modal_center
        }));
    }

    tog_scroll() {
        this.setState(prevState => ({
          modal_scroll: !prevState.modal_scroll
        }));
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    
    render() {
        return (
            <React.Fragment>
                <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Modals Examples</h4>
                                    <p className="card-title-desc">Modals are streamlined, but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.</p>

                                    <div className="modal bs-example-modal" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0">Modal title</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>One fine body&hellip;</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                    <Row>

                                        <Col sm="6" md="3" className="mt-4">
                                            <div className=" text-center">
                                                <p className="text-muted">Standard Modal</p>
                                                <button type="button" onClick={this.tog_standard} className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">Standard Modal</button>
                                            </div>

                                            
                                            <Modal
                                                isOpen={this.state.modal_standard}
                                                toggle={this.tog_standard}
                                                autoFocus={true}
                                            > 
                                                
                                                    <ModalHeader toggle={this.tog_standard}>
                                                        Modal Heading
                                                    </ModalHeader >
                                                        <ModalBody>
                                                            <h5>Overflowing text to show scroll behavior</h5>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                                            <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                                                        </ModalFooter>                                              
                                            </Modal>
                                            
                                        </Col>

                                        <Col sm="6" md="3" className="mt-4">
                                            <div className="text-center">
                                                <p className="text-muted">Large modal</p>
                                                
                                                <Button type="button" color="primary" className="waves-effect waves-light" onClick={this.tog_large}>Large modal</Button>
                                            </div>

                                            
                                            <Modal
                                                isOpen={this.state.modal_large}
                                                toggle={this.tog_large}
                                                autoFocus={true}
                                                size = "lg"
                                            >
                                                        <ModalHeader toggle={this.tog_large}>
                                                            Large modal
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                        </ModalBody>
                                                
                                            </Modal>
                                            
                                        </Col>

                                        <Col sm="6" md="3" className="mt-4">
                                            <div className="text-center">
                                                <p className="text-muted">Small modal</p>
                                                
                                                <Button type="button" color="primary" className="waves-effect waves-light" onClick={this.tog_small}>Small modal</Button>
                                            </div>

                                            <Modal
                                                isOpen={this.state.modal_small}
                                                toggle={this.tog_small}
                                                autoFocus={true}
                                                size = "sm"
                                            >
                                                        <ModalHeader toggle={this.tog_small}>
                                                            Small modal
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                        </ModalBody>
                                            </Modal>
                                            
                                        </Col>

                                        <Col sm="6" md="3" className="col-sm-6 col-md-3 mt-4">
                                            <div className="text-center">
                                                <p className="text-muted">Center modal</p>
                                                
                                                <Button type="button" color="primary" onClick={this.tog_center} className="waves-effect waves-light" >Center modal</Button>
                                            </div>

                                            <Modal 
                                                isOpen={this.state.modal_center}
                                                toggle={this.tog_center}
                                                autoFocus={true}
                                                centered={true}
                                            >
                                                        <ModalHeader toggle={this.tog_center}>
                                                            Center modal
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                                                            </p>
                                                        </ModalBody>
                                            </Modal>
                                            
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

export default connect(null, { setBreadcrumbItems })(UiModal);