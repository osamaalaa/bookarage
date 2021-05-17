import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Form
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class FormEditors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Forms", link : "#" },
                { title : "Form Editors", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Form Editors", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">react-draft-wysiwyg</h4>
                                    <p className="card-title-desc">react-draft-wysiwygis a react plugin that makes it easy to create simple, beautiful wysiwyg editors with the help of wysihtml5 and Twitter Bootstrap.</p>

                                    <Form method="post">
                                        <Editor
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            editorStyle={{minHeight : "500px"}}
                                        />
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>          
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(FormEditors);