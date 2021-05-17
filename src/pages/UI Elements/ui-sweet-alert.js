import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert";

//Import Images
import logodark from "../../assets/images/logo-dark.png";

class UiSweetAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Sweet-Alert", link : "#" },
            ],
            basic: false,
            with_title: false,
            success_msg: false,
            confirm_msg: false,
            success_dlg: false,
            error_dlg: false,
            dynamic_title: "",
            dynamic_description: "",
            confirm_both: false,
            img_header: false,
            img_html: false,
            custom_div: false,
            emailtxt: "",
            emailerr: "",
            step1: false,
            step1_txt: "",
            step2: false,
            step2_txt: "",
            step3: false,
            step3_txt: "",
            step_queue: false,
            final_queue: false,
            current_ip: "219.91.239.22",
            close_timer: false,
            timeralert: null,
            sweet_timer : false,
            alert_confirm : false,
            success_dlg1 : false,
            success_confirm : false
        }
        this.handleStep1Change = this.handleStep1Change.bind(this);
        this.handleStep2Change = this.handleStep2Change.bind(this);
        this.handleStep3Change = this.handleStep3Change.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Sweet-Alert", this.state.breadcrumbItems);
    }
    
    handleStep1Change(e) {
        this.setState({ step1_txt: e.target.value });
    }
    
    handleStep2Change(e) {
        this.setState({ step2_txt: e.target.value });
    }
    
    handleStep3Change(e) {
        this.setState({ step3_txt: e.target.value });
    }
    
    hideTimeAlert() {
        this.setState({ timeralert: null });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.timeralert}
                {this.state.success_dlg ? (
                    <SweetAlert
                    success
                    title={this.state.dynamic_title}
                    onConfirm={() => this.setState({ success_dlg: false })}
                    >
                    {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}
                
                {
                    this.state.success_confirm ? (
                        <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() => this.setState({ success_confirm: false, alert_confirm : false })}
                        >
                            {this.state.dynamic_description}
                        </SweetAlert>
                    )
                    : null
                }
                {this.state.error_dlg ? (
                    <SweetAlert
                    error
                    title={this.state.dynamic_title}
                    onConfirm={() => this.setState({ error_dlg: false })}
                    >
                    {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

            {this.state.success_dlg1 ? (
                    <SweetAlert
                    title="Good job!"
                    success
                    showCancel
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={() => this.setState({ success_dlg1: false, alert_confirm : false })}
                    >
                    You clicked the button!
                    </SweetAlert>
                ) : null}
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.
                                    </p>

                                    <div className="row text-center">
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A basic message</p>
                                            <Button type="button" onClick={() => this.setState({ basic: true })} color="primary" className="waves-effect waves-light" id="sa-basic">Click me</Button>
                                            {this.state.basic ? (
                                            <SweetAlert
                                            title="Any fool can use a computer"
                                            onConfirm={() => this.setState({ basic: false })}
                                            ></SweetAlert>
                                        ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A title with a text under</p>
                                            <Button type="button" onClick={() => this.setState({ with_title: true })} color="primary" className="waves-effect waves-light" id="sa-title">Click me</Button>
                                            {this.state.with_title ? (
                                            <SweetAlert
                                            title="The Internet?"
                                            warning
                                            onConfirm={() => this.setState({ with_title: false })}
                                            >
                                            That thing is still around?
                                            </SweetAlert>
                                        ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A success message!</p>
                                            <Button type="button" onClick={() => this.setState({ success_msg: true })} color="primary" className="waves-effect waves-light" id="sa-success">Click me</Button>
                                                {this.state.success_msg ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    success
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                        this.setState({
                                                            success_msg: false,
                                                        })
                                                    }
                                                    onCancel={() =>
                                                        this.setState({
                                                            success_msg: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A warning message, with a function attached to the "Confirm"-button...</p>
                                            <Button type="button" onClick={() => this.setState({ alert_confirm: true })} color="primary" className="waves-effect waves-light" id="sa-warning">Click me</Button>
                                            {this.state.alert_confirm ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                        this.setState({
                                                        success_confirm: true,
                                                        alert_confirm : false,
                                                        dynamic_title: "Deleted!",
                                                        dynamic_description: "Your file has been deleted."
                                                        })
                                                    }
                                                    onCancel={() =>
                                                        this.setState({
                                                            alert_confirm: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}
                                        </div>

                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">By passing a parameter, you can execute something else for "Cancel".</p>
                                            <Button type="button" onClick={() => this.setState({ confirm_both: true })} color="primary" className="waves-effect waves-light" id="sa-params">Click me</Button>
                                                {this.state.confirm_both ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                        this.setState({
                                                        confirm_both: false,
                                                        success_dlg: true,
                                                        dynamic_title: "Deleted",
                                                        dynamic_description: "Your file has been deleted."
                                                        })
                                                    }
                                                    onCancel={() =>
                                                        this.setState({
                                                        confirm_both: false,
                                                        error_dlg: true,
                                                        dynamic_title: "Cancelled",
                                                        dynamic_description: "Your imaginary file is safe :)"
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A message with custom Image Header</p>
                                            <Button type="button" color="primary" onClick={() => this.setState({ img_header: true })} className="waves-effect waves-light" id="sa-image">Click me</Button>
                                            {this.state.img_header ? (
                                                <SweetAlert
                                                title="Sweet!"
                                                custom
                                                customIcon={logodark}
                                                onConfirm={() => this.setState({ img_header: false })}
                                                >
                                                Modal with a custom image.
                                                </SweetAlert>
                                            ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A message with auto close timer</p>
                                            <Button type="button" onClick={() => this.setState({ sweet_timer : true })} color="primary" className="waves-effect waves-light" id="sa-close">Click me</Button>
                                            {this.state.sweet_timer ? (
                                            <SweetAlert
                                            title="Auto Close Alert!"
                                            timeout={2000}
                                            showConfirm={false}
                                            onConfirm={() => this.setState({ sweet_timer: false })}
                                            >
                                                I Will close in 2 Seconds
                                            </SweetAlert>
                                        ) : null}     
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">Custom HTML description and buttons</p>
                                            <Button type="button" color="primary" onClick={() => this.setState({ img_html: true })} className="waves-effect waves-light" id="custom-html-alert">Click me</Button>
                                            {this.state.img_html ? (
                                                <SweetAlert
                                                title={
                                                    <span>
                                                    HTML <u><i>example</i></u>
                                                    </span>
                                                }
                                                warning
                                                onConfirm={() => this.setState({ img_html: false })}
                                                >
                                                You can use <b>bold</b> text, <Link to="" >links</Link> and other HTML tags
                                                
                                                </SweetAlert>
                                            ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">A message with custom width, padding and background</p>
                                            <Button type="button" onClick={() => this.setState({ custom_div: true })} color="primary" className="waves-effect waves-light" id="custom-padding-width-alert">Click me</Button>
                                            {this.state.custom_div ? (
                                                <SweetAlert
                                                title="Custom width, padding, background."
                                                style={{
                                                    padding: "100px",
                                                    width : "600px",
                                                }}
                                                onConfirm={() => this.setState({ custom_div: false })}
                                                ></SweetAlert>
                                            ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">Ajax request example</p>
                                            <Button type="button" onClick={() => this.setState({ ajax_div: true })} color="primary" className="waves-effect waves-light" id="ajax-alert">Click me</Button>
                                            {this.state.ajax_div ? (
                                                <SweetAlert
                                                showCancel
                                                title="Submit email to run ajax request"
                                                cancelBtnBsStyle="danger"
                                                confirmBtnBsStyle="success"
                                                onConfirm={() =>
                                                    this.setState({
                                                    ajax_div: false,
                                                    success_dlg: true,
                                                    dynamic_title: "Ajax request finished!",
                                                    dynamic_description:
                                                        "Submitted email : " + this.state.emailtxt
                                                    })
                                                }
                                                onCancel={() => this.setState({ ajax_div: false })}
                                                >
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                                </SweetAlert>
                                            ) : null}   
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">Chaining modals (queue) example</p>
                                            <Button type="button" color="primary" onClick={() => this.setState({ step1: true })} className="waves-effect waves-light" id="chaining-alert">Click me</Button>
                                            {this.state.step1 ? (
                                                <SweetAlert
                                                showCancel
                                                title="Question 1"
                                                cancelBtnBsStyle="danger"
                                                confirmBtnText="Next"
                                                onConfirm={() =>
                                                    this.setState({ step1: false, step2: true })
                                                }
                                                onCancel={() => this.setState({ step1: false })}
                                                >
                                                Chaining swal2 modals is easy
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={this.handleStep1Change}
                                                />
                                                </SweetAlert>
                                            ) : null}

                                            {this.state.step2 ? (
                                                <SweetAlert
                                                showCancel
                                                title="Question 2"
                                                cancelBtnBsStyle="danger"
                                                confirmBtnText="Next"
                                                onConfirm={() =>
                                                    this.setState({ step2: false, step3: true })
                                                }
                                                onCancel={() => this.setState({ step2: false })}
                                                >
                                                Chaining swal2 modals is easy
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={this.handleStep2Change}
                                                />
                                                </SweetAlert>
                                            ) : null}

                                            {this.state.step3 ? (
                                                <SweetAlert
                                                showCancel
                                                title="Question 3"
                                                cancelBtnBsStyle="danger"
                                                confirmBtnText="Next"
                                                onConfirm={() =>
                                                    this.setState({ step3: false, final_step: true })
                                                }
                                                onCancel={() => this.setState({ step3: false })}
                                                >
                                                Chaining swal2 modals is easy
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={this.handleStep3Change}
                                                />
                                                </SweetAlert>
                                            ) : null}

                                            {this.state.final_step ? (
                                                <SweetAlert
                                                title="All done!"
                                                confirmBtnText="Lovely!"
                                                onConfirm={() => this.setState({ final_step: false })}
                                                >
                                                Your answers : [{this.state.step1_txt},{" "}
                                                {this.state.step2_txt}, {this.state.step3_txt}]
                                                </SweetAlert>
                                            ) : null}
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <p className="text-muted">Dynamic queue example</p>
                                            <Button type="button" onClick={() => this.setState({ step_queue: true })} color="primary" className="waves-effect waves-light" id="dynamic-alert">Click me</Button>
                                            {this.state.step_queue ? (
                                                <SweetAlert
                                                title="Your public IP"
                                                confirmBtnText="Show my public IP"
                                                onConfirm={() =>
                                                    this.setState({ step_queue: false, final_queue: true })
                                                }
                                                >
                                                Your public IP will be received via AJAX request
                                                </SweetAlert>
                                            ) : null}

                                            {this.state.final_queue ? (
                                                <SweetAlert
                                                confirmBtnText="OK"
                                                title=""
                                                onConfirm={() => this.setState({ final_queue: false })}
                                                >
                                                {this.state.current_ip}
                                                </SweetAlert>
                                            ) : null}
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

export default connect(null, { setBreadcrumbItems })(UiSweetAlert);