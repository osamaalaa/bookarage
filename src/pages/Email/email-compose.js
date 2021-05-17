import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import Components
import EmailSidebar from "./email-sidebar";

class EmailCompose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Email", link : "#" },
                { title : "Email Compose", link : "#" },
            ],

        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Email Compose", this.state.breadcrumbItems);
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
                                    <CardBody>

                                        <Form>
                                            <FormGroup>
                                                <Input type="email" className="form-control" placeholder="To"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Input type="text" className="form-control" placeholder="Subject"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <div className="summernote">
                                                <Editor
                                                    toolbarClassName="toolbarClassName"
                                                    wrapperClassName="wrapperClassName"
                                                    editorClassName="editorClassName"
                                                    editorStyle={{minHeight : "500px"}}
                                                />
                                                </div>
                                            </FormGroup>

                                            <FormGroup className="btn-toolbar mb-0">
                                                <div className="">
                                                    <Button type="button" color="success" className="waves-effect waves-light mr-1"><i className="far fa-save"></i></Button>
                                                    <Button type="button" color="success" className="waves-effect waves-light mr-1"><i className="far fa-trash-alt"></i></Button>
                                                    <Button color="primary" className="waves-effect waves-light">
                                                        <span>Send</span> <i className="fab fa-telegram-plane ml-2"></i>
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(EmailCompose);