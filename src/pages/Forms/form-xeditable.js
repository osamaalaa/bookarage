import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import Editable from "react-bootstrap-editable";

class FormXeditable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Forms", link : "#" },
                { title : "Form Xeditable", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Form Xeditable", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>

                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Inline Example</h4>
                                    <p className="card-title-desc">This library allows you to create editable elements on your page. It can be used with any engine (bootstrap, jquery-ui, jquery only) and includes both popup and inline modes. Please try out demo to see how it works.</p>

                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{width: "50%"}}>Inline</th>
                                                    <th>Examples</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Simple Text Field</td>
                                                    <td>
                                                    <Editable
                                                        alwaysEditing={false}
                                                        disabled={false}
                                                        editText="superuser"
                                                        id={null}
                                                        isValueClickable={false}
                                                        mode="inline"
                                                        placement="top"
                                                        showText
                                                        type="textfield"
                                                    />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Empty text field, required</td>
                                                    <td>
                                                    <Editable
                                                        ajax={null}
                                                        alwaysEditing={false}
                                                        className={null}
                                                        disabled={false}
                                                        editText="Empty"
                                                        id={null}
                                                        isValueClickable={false}
                                                        label={null}
                                                        mode="inline"
                                                        onSubmit={null}
                                                        onValidated={null}
                                                        placement="top"
                                                        showText
                                                        type="textfield"
                                                        validate={(value) => {
                                                            if(!value){
                                                              return 'Required';
                                                            }
                                                          }}
                                                    />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Select, local array, custom display</td>
                                                    <td>
                                                    <Editable
                                                        ajax={null}
                                                        alwaysEditing={false}
                                                        className={null}
                                                        disabled={false}
                                                        editText="male"
                                                        id={null}
                                                        isValueClickable={false}
                                                        label={null}
                                                        mode="inline"
                                                        onSubmit={null}
                                                        onValidated={null}
                                                        options={["male", "female"]}
                                                        placement="top"
                                                        showText
                                                        type="select"
                                                        validate={null}
                                                    />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Select, error while loading</td>
                                                    <td>
                                                    <Editable
                                                        ajax={null}
                                                        alwaysEditing={false}
                                                        className={null}
                                                        disabled={false}
                                                        editText="male"
                                                        id={null}
                                                        isValueClickable={false}
                                                        label={null}
                                                        mode="inline"
                                                        onSubmit={null}
                                                        onValidated={null}
                                                        options={["male", "female"]}
                                                        placement="top"
                                                        showText
                                                        type="select"
                                                        validate={null}
                                                    />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Combodate</td>
                                                    <td>
                                                    <Editable
                                                        ajax={null}
                                                        alwaysEditing={false}
                                                        className={null}
                                                        disabled={false}
                                                        editText="Enter Date"
                                                        id={null}
                                                        isValueClickable={false}
                                                        label={null}
                                                        mode="inline"
                                                        onSubmit={null}
                                                        onValidated={null}
                                                        placement="top"
                                                        showText
                                                        type="date"
                                                        validate={null}
                                                    />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Textarea, buttons below. Submit by ctrl+enter</td>
                                                    <td>
                                                    <Editable
                                                        ajax={null}
                                                        alwaysEditing={false}
                                                        className={null}
                                                        disabled={false}
                                                        editText="Awesome User"
                                                        id={null}
                                                        isValueClickable={false}
                                                        label={null}
                                                        mode="inline"
                                                        onSubmit={null}
                                                        onValidated={null}
                                                        placement="top"
                                                        showText
                                                        type="textarea"
                                                        validate={null}
                                                    />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>     
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(FormXeditable);