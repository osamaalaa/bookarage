import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Buttons", link : "#" },
            ],
            check1 : true,
            check2 : false,
            check3 : false,
            radio1: true,
            radio2: false,
            radio3: false,
            drp_link : false
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Buttons", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>

                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Examples</h4>
                                    <p className="card-title-desc">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>

                                    <div className="button-items">
                                        <Button type="button" color="primary" className="waves-effect waves-light">Primary</Button>

                                        <Button type="button" color="secondary" className="waves-effect">Secondary</Button>

                                        <Button type="button" color="success" className="waves-effect waves-light">Success</Button>

                                        <Button type="button" color="info" className="waves-effect waves-light">Info</Button>

                                        <Button type="button" color="warning" className="waves-effect waves-light">Warning</Button>

                                        <Button type="button" color="danger" className="waves-effect waves-light">Danger</Button>

                                        <Button type="button" color="dark" className="bwaves-effect waves-light">Dark</Button>

                                        <Button type="button" color="link" className="waves-effect">Link</Button>

                                        <Button type="button" color="light" className="waves-effect">Light</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Outline buttons</h4>
                                    <p className="card-title-desc">Add one another property like <code className="highlighter-rouge">outline</code> ones to remove all background images and colors on any button.</p>

                                    <div className="button-items">
                                    <Button type="button" outline color="primary" className="waves-effect waves-light">Primary</Button>

                                    <Button type="button" outline color="secondary" className="waves-effect">Secondary</Button>

                                    <Button type="button" outline color="success" className="waves-effect waves-light">Success</Button>

                                    <Button type="button" outline color="info" className="waves-effect waves-light">Info</Button>

                                    <Button type="button" outline color="warning" className="waves-effect waves-light">Warning</Button>

                                    <Button type="button" outline color="danger" className="waves-effect waves-light">Danger</Button>

                                    <Button type="button" outline color="dark" className="bwaves-effect waves-light">Dark</Button>
                                    </div>
                                 </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Button tags</h4>
                                    <p className="card-title-desc">The <code className="highlighter-rouge">.btn</code> classNamees are designed to be used with the <code className="highlighter-rouge">&lt;Button&gt;</code> element. However, you can also use these classNamees on <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>

                                    <div className="button-items">
                                        <Link className="btn btn-primary waves-effect waves-light" to="#" role="Button">Link</Link>
                                        <Button className="btn btn-success waves-effect waves-light" type="submit">Button</Button>
                                        <input className="btn btn-info" type="button" value="Input"/>
                                        <input className="btn btn-danger" type="submit" value="Submit"/>
                                        <input className="btn btn-warning" type="reset" value="Reset"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Sizes</h4>
                                    <p className="card-title-desc">Fancy larger or smaller Buttons? Add {" "}
                                        <code className="highlighter-rouge">size="lg"</code> or <code className="highlighter-rouge">size="sm"</code> for additional sizes.
                                    </p>

                                    <div className="button-items">
                                        <Button type="button" color="primary" size="lg" className="waves-effect waves-light">Large Button</Button>
                                        <Button type="button" color="secondary" size="lg" className="waves-effect">Large Button</Button>
                                        <Button type="button" color="primary" size="sm" className="waves-effect waves-light">Small Button</Button>
                                        <Button type="button" color="secondary" size="sm" className="waves-effect">Small Button</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Block Buttons</h4>
                                    <p className="card-title-desc">Create block level Buttons—those that span the full width of a parent—by adding property <code className="highlighter-rouge">block</code>.</p>

                                    <div className="button-items">
                                        <Button type="button" color="primary" size="lg" block className="waves-effect waves-light">Block level Button</Button>
                                        <Button type="button" color="secondary" size="sm" block className="btn-block waves-effect">Block level Button</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Toggle states</h4>
                                    <p className="card-title-desc">Add <code className="highlighter-rouge">data-toggle="Button"</code> to toggle a Button’s <code className="highlighter-rouge">active</code> state. If you’re pre-toggling a Button, you must manually add the <code className="highlighter-rouge">.active</code> className
                                        <strong>and</strong> <code className="highlighter-rouge">aria-pressed="true"</code> to the
                                        <code className="highlighter-rouge">&lt;Button&gt;</code>.
                                    </p>

                                    <div className="button-items">
                                        <Button type="button" color="primary" className="waves-effect waves-light" data-toggle="Button" aria-pressed="false">
                                            Single toggle
                                        </Button>

                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Checkbox Buttons</h4>
                                    <p className="card-title-desc">Bootstrap’s <code className="highlighter-rouge">.Button</code> styles can be applied to other elements, such as <code className="highlighter-rouge">
                                            &lt;label&gt;</code>s, to provide checkbox or radio style Button toggling. Add <code className="highlighter-rouge">data-toggle="Buttons"</code> to a
                                        <code className="highlighter-rouge">.btn-group</code> containing those modified Buttons to enable toggling in their respective styles.</p>
                                    
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label
                                            className=
                                                {
                                                    this.state.check1
                                                    ? "btn btn-secondary active"
                                                    : "btn btn-secondary"
                                                }
                                        >
                                            <input type="checkbox" defaultChecked
                                            onClick={() =>
                                                this.setState({
                                                    check1: !this.state.check1,
                                                })
                                            }  
                                                /> Checked-1
                                        </label>

                                        <label
                                            className=
                                                {
                                                    this.state.check2
                                                    ? "btn btn-secondary active"
                                                    : "btn btn-secondary"
                                                }
                                        >
                                            <input type="checkbox"
                                            onClick={() =>
                                                this.setState({
                                                    check2: !this.state.check2,
                                                })
                                            }  
                                                /> Checked-2
                                        </label>

                                        <label
                                            className=
                                                {
                                                    this.state.check3
                                                    ? "btn btn-secondary active"
                                                    : "btn btn-secondary"
                                                }
                                        >
                                            <input type="checkbox"
                                            onClick={() =>
                                                this.setState({
                                                    check3: !this.state.check3
                                                })
                                            }  
                                                /> Checked-3
                                        </label>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Radio Buttons</h4>
                                    <p className="card-title-desc">Bootstrap’s <code className="highlighter-rouge">.Button</code> styles can be applied to other elements, such as <code className="highlighter-rouge">
                                            &lt;label&gt;</code>s, to provide checkbox or radio style Button toggling. Add <code className="highlighter-rouge">data-toggle="Buttons"</code> to a
                                        <code className="highlighter-rouge">.btn-group</code> containing those modified Buttons to enable toggling in their respective styles.</p>
                                    <div className="btn-group btn-group-toggle" data-toggle="Buttons">

                                        <label
                                            className=
                                                {
                                                    this.state.radio1
                                                    ? "btn btn-primary active"
                                                    : "btn btn-primary"
                                                }
                                        >
                                            <input type="radio" name="options" id="option1" defaultChecked
                                            onClick={() =>
                                                this.setState({
                                                    radio1: true,
                                                    radio2: false,
                                                    radio3: false
                                                })
                                            }  
                                                /> Active
                                        </label>

                                        <label
                                            className=
                                                {
                                                    this.state.radio2
                                                    ? "btn btn-primary active"
                                                    : "btn btn-primary"
                                                }
                                        >
                                            <input type="radio" name="options" id="option1"
                                            onClick={() =>
                                                this.setState({
                                                    radio1: false,
                                                    radio2: true,
                                                    radio3: false
                                                })
                                            }  
                                                /> Radio
                                        </label>

                                        <label
                                            className=
                                                {
                                                    this.state.radio3
                                                    ? "btn btn-primary active"
                                                    : "btn btn-primary"
                                                }
                                        >
                                            <input type="radio" name="options" id="option1"
                                            onClick={() =>
                                                this.setState({
                                                    radio1: false,
                                                    radio2: false,
                                                    radio3: true
                                                })
                                            }  
                                                /> Radio
                                        </label>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Button group</h4>
                                    <p className="card-title-desc">Wrap a series of Buttons with <code className="highlighter-rouge">&lt;ButtonGroup&gt;</code>.</p>

                                    <ButtonGroup role="group" aria-label="Basic example">
                                        <Button type="button" color="secondary">Left</Button>
                                        <Button type="button" color="secondary">Middle</Button>
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Button toolbar</h4>
                                    <p className="card-title-desc">Combine sets of Button groups into Button toolbars for more complex components. Use utility classNamees as needed to space out groups, Buttons, and more.</p>

                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with Button groups">
                                        <ButtonGroup className="mr-2" role="group" aria-label="First group">
                                            <Button type="button" color="secondary">1</Button>
                                            <Button type="button" color="secondary">2</Button>
                                            <Button type="button" color="secondary">3</Button>
                                            <Button type="button" color="secondary">4</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="mr-2" role="group" aria-label="Second group">
                                            <Button type="button" color="secondary">5</Button>
                                            <Button type="button" color="secondary">6</Button>
                                            <Button type="button" color="secondary">7</Button>
                                        </ButtonGroup>
                                        <ButtonGroup role="group" aria-label="Third group">
                                            <Button type="button" color="secondary">8</Button>
                                        </ButtonGroup>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Sizing</h4>
                                    <p className="card-title-desc">Instead of applying Button sizing classNames to every Button in a group, just add <code className="highlighter-rouge">size=""</code> to each <code className="highlighter-rouge">&lt;ButtonGroup&gt;</code>, including each one when nesting multiple groups.</p>

                                    <ButtonGroup size="lg" role="group" aria-label="Basic example">
                                        <Button type="button" color="secondary">Left</Button>
                                        <Button type="button" color="secondary">Middle</Button>
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>

                                    <br/>

                                    <ButtonGroup className="mt-2" role="group" aria-label="Basic example">
                                        <Button type="button" color="secondary">Left</Button>
                                        <Button type="button" color="secondary">Middle</Button>
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>

                                    <br/>

                                    <ButtonGroup size="sm" className="mt-2" role="group" aria-label="Basic example">
                                        <Button type="button" color="secondary">Left</Button>
                                        <Button type="button" color="secondary">Middle</Button>
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Vertical variation</h4>
                                    <p className="card-title-desc">Make a set of Buttons appear vertically stacked rather than horizontally. Split Button dropdowns are not supported here.</p>

                                    <div className="btn-group-vertical" role="group" aria-label="Vertical Button group">
                                        <Button type="button" className="btn btn-secondary">Button</Button>
                                        <ButtonDropdown
                                            isOpen={this.state.drp_link}
                                            toggle={() =>
                                                this.setState({ drp_link: !this.state.drp_link })
                                            }
                                        >
                                            <DropdownToggle caret color="secondary">
                                                Dropdown <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Dropdown link</DropdownItem>
                                                <DropdownItem>Dropdown link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        <Button type="button" className="btn btn-secondary">Button</Button>
                                        <Button type="button" className="btn btn-secondary">Button</Button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiButtons);