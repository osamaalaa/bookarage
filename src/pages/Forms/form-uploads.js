import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Form
} from "reactstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class FormUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Forms", link : "#" },
                { title : "File Upload", link : "#" },
            ],
            selectedFiles: []
        }
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("File Upload", this.state.breadcrumbItems);
    }

    handleAcceptedFiles = files => {
        files.map(file =>
        Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        })
        );

        this.setState({ selectedFiles: files });
    };

    /**
     * Formats the size
     */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
  
    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                        <Card>
                                    <CardBody>
        
                                        <h4 className="card-title">Dropzone</h4>
                                        <p className="card-title-desc"> DropzoneJS is an open source library that provides
                                                            drag’n’drop file uploads with image previews.
                                        </p>
                                        <Form>
                                        <Dropzone
                                            onDrop={acceptedFiles =>
                                            this.handleAcceptedFiles(acceptedFiles)
                                            }
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                            <div className="dropzone">
                                                <div
                                                className="dz-message needsclick"
                                                {...getRootProps()}
                                                >
                                                <input {...getInputProps()} />
                                                <h3>Drop files here or click to upload.</h3>
                                                </div>
                                            </div>
                                            )}
                                        </Dropzone>
                                        <div
                                            className="dropzone-previews mt-3"
                                            id="file-previews"
                                        >
                                            {this.state.selectedFiles.map((f, i) => {
                                            return (
                                                <Card
                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                key={i + "-file"}
                                                >
                                                <div className="p-2">
                                                    <Row className="align-items-center">
                                                    <Col className="col-auto">
                                                        <img
                                                        data-dz-thumbnail=""
                                                        height="80"
                                                        className="avatar-sm rounded bg-light"
                                                        alt={f.name}
                                                        src={f.preview}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                        to="#"
                                                        className="text-muted font-weight-bold"
                                                        >
                                                        {f.name}
                                                        </Link>
                                                        <p className="mb-0">
                                                        <strong>{f.formattedSize}</strong>
                                                        </p>
                                                    </Col>
                                                    </Row>
                                                </div>
                                                </Card>
                                            );
                                            })}
                                        </div>
                                        </Form>
        
                                        <div className="text-center mt-4">
                                            <Button type="button" color="primary" className="waves-effect waves-light">Send Files</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                        </Col>
                    </Row>             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(FormUpload);