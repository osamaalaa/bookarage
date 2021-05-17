import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Dropdowns", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Dropdowns", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>

                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Single button dropdowns</h4>
                                    <p className="card-title-desc">Any single <code className="highlighter-rouge">.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code className="highlighter-rouge">&lt;button&gt;</code> elements:
                                    </p>

                                    <Row>
                                        <Col sm="6">
                                            <Dropdown
                                                isOpen={this.state.singlebtn}
                                                toggle={() =>
                                                this.setState({ singlebtn: !this.state.singlebtn })
                                                } className="mr-1 mt-2"
                                            >
                                                <DropdownToggle className="btn btn-secondary" caret>
                                                    Dropdown button
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Col>

                                        <Col sm="6">
                                            <Dropdown
                                                isOpen={this.state.singlebtn1}
                                                toggle={() =>
                                                this.setState({ singlebtn1: !this.state.singlebtn1 })
                                                }
                                                className="mr-1 mt-2"
                                            >
                                            <DropdownToggle className="btn btn-secondary" caret>
                                                Dropdown Link <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Variant</h4>
                                    <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>

                                    <div className="">
                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btnprimary1}
                                            toggle={() =>
                                                this.setState({ btnprimary1: !this.state.btnprimary1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-primary">
                                                Primary<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </div>
                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btnsecondary1}
                                            toggle={() =>
                                                this.setState({ btnsecondary1: !this.state.btnsecondary1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-secondary">
                                                Secondary<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </div>

                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btnSuccess1}
                                            toggle={() =>
                                                this.setState({ btnSuccess1: !this.state.btnSuccess1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-success">
                                                Success<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </div>

                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btninfo1}
                                            toggle={() =>
                                                this.setState({ btninfo1: !this.state.btninfo1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-info">
                                                Info<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </div>

                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btnWarning1}
                                            toggle={() =>
                                                this.setState({ btnWarning1: !this.state.btnWarning1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-warning">
                                                Warning<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        
                                        </div>

                                        <div className="btn-group mr-1 mt-2">
                                        <Dropdown
                                            isOpen={this.state.btnDanger1}
                                            toggle={() =>
                                                this.setState({ btnDanger1: !this.state.btnDanger1 })
                                            }
                                        >
                                            <DropdownToggle tag="button" className="btn btn-danger">
                                                Danger<i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem href="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Split button dropdowns</h4>
                                    <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>

                                    <div className="">
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_primary1}
                                            toggle={() =>
                                            this.setState({
                                                drp_primary1: !this.state.drp_primary1
                                            })
                                            }
                                        >
                                            <Button id="caret" color="primary">
                                            Primary
                                            </Button>
                                            <DropdownToggle caret color="primary">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                        &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_secondary1}
                                            toggle={() =>
                                            this.setState({
                                                drp_secondary1: !this.state.drp_secondary1
                                            })
                                            }
                                        >
                                            <Button id="caret" color="secondary">
                                            Secondary
                                            </Button>
                                            <DropdownToggle caret color="secondary">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                        &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_success1}
                                            toggle={() =>
                                            this.setState({
                                                drp_success1: !this.state.drp_success1
                                            })
                                            }
                                        >
                                            <Button id="caret" color="success">
                                            Success
                                            </Button>
                                            <DropdownToggle caret color="success">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_Infoo}
                                            toggle={() =>
                                            this.setState({
                                                drp_Infoo: !this.state.drp_Infoo
                                            })
                                            }
                                        >
                                            <Button id="caret" color="info">
                                            Info
                                            </Button>
                                            <DropdownToggle caret color="info">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;

                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_warning1}
                                            toggle={() =>
                                            this.setState({
                                                drp_warning1: !this.state.drp_warning1
                                            })
                                            }
                                        >
                                            <Button id="caret" color="warning">
                                            Warning
                                            </Button>
                                            <DropdownToggle caret color="warning">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                        &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={this.state.drp_danger1}
                                            toggle={() =>
                                            this.setState({
                                                drp_danger1: !this.state.drp_danger1
                                            })
                                            }
                                        >
                                            <Button id="caret" color="danger">
                                            Danger
                                            </Button>
                                            <DropdownToggle caret color="danger">
                                            <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        
                                    </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Sizing</h4>
                                    <p className="card-title-desc">Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>

                                    <div className="">
                                        
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                        isOpen={this.state.drp_secondary}
                                        toggle={() =>
                                            this.setState({
                                            drp_secondary: !this.state.drp_secondary
                                            })
                                        }
                                        >
                                        <DropdownToggle
                                            caret
                                            color="secondary"
                                            className="btn btn-secondary btn-lg"
                                        >
                                            Large button &nbsp;{" "}
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>{" "}
                                    &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                        isOpen={this.state.drp_secondary_lg}
                                        toggle={() =>
                                            this.setState({
                                            drp_secondary_lg: !this.state.drp_secondary_lg
                                            })
                                        }
                                        >
                                        <Button className="btn btn-secondary">
                                        Large button &nbsp;{" "}
                                        </Button>
                                        <DropdownToggle
                                            caret
                                            color="secondary"
                                            className="btn btn-secondary btn-lg"
                                        >
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>{" "}
                                    &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                        isOpen={this.state.drp_secondary_sm}
                                        toggle={() =>
                                            this.setState({
                                            drp_secondary_sm: !this.state.drp_secondary_sm
                                            })
                                        }
                                        >
                                        <DropdownToggle
                                            caret
                                            color="secondary"
                                            className="btn btn-secondary btn-sm"
                                        >
                                            Small button &nbsp;{" "}
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>{" "}
                                    &nbsp;
                                    <div className="btn-group mr-1 mt-2">
                                        <ButtonDropdown
                                        isOpen={this.state.drp_secondary_sm1}
                                        toggle={() =>
                                            this.setState({
                                            drp_secondary_sm1: !this.state.drp_secondary_sm1
                                            })
                                        }
                                        >
                                        <Button className="btn btn-secondary btn-sm">
                                            {" "}
                                            Small button &nbsp;
                                        </Button>
                                        <DropdownToggle
                                            caret
                                            color="secondary"
                                            className="btn btn-secondary btn-sm"
                                        >
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Dropup variation</h4>
                                    <p className="card-title-desc">Trigger dropdown menus above elements by adding <code className="highlighter-rouge">.dropup</code> to the parent element.
                                    </p>

                                    <div className="">
                                        
                                        <div className="btn-group dropup mr-1 mt-2">
                                            <Dropdown
                                            isOpen={this.state.dropup1}
                                            direction="up"
                                            toggle={() =>
                                                this.setState({ dropup1: !this.state.dropup1 })
                                            }
                                            >
                                            <DropdownToggle className="btn btn-secondary" caret>
                                                Dropup <i className="mdi mdi-chevron-up"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                            </Dropdown>
                                        </div>

                                        
                                        <div className="btn-group dropup mr-1 mt-2">
                                            <ButtonDropdown
                                                direction="up"
                                                isOpen={this.state.drp_up11}
                                                toggle={() =>
                                                    this.setState({
                                                    drp_up11: !this.state.drp_up11
                                                    })
                                                }
                                                >
                                                <Button id="caret" color="secondary">
                                                    Split dropup
                                                </Button>
                                                <DropdownToggle caret color="secondary">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Menu alignment</h4>
                                    <p className="card-title-desc">Add <code className="highlighter-rouge">.dropdown-menu-right</code> to a <code className="highlighter-rouge">.dropdown-menu</code> to right align the dropdown menu.</p>
                                    <ButtonDropdown
                                        isOpen={this.state.drop_align}
                                        direction="right"
                                        toggle={() =>
                                        this.setState({ drop_align: !this.state.drop_align })
                                        }
                                    >
                                        <DropdownToggle
                                        caret
                                        color="secondary"
                                        className="btn btn-secondary"
                                        >
                                        Menu is right-aligned{" "}
                                        <i className="mdi mdi-chevron-right"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-right-custom">
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Dropright variation</h4>
                                    <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.
                                    </p>

                                    <div className="">
                                       
                                        <div className="btn-group mb-2 dropright">
                                        <Dropdown
                                            isOpen={this.state.info_dropup1}
                                            direction="right"
                                            toggle={() =>
                                                this.setState({
                                                info_dropup1: !this.state.info_dropup1
                                                })
                                            }
                                            >
                                            <DropdownToggle className="btn btn-info" caret>
                                                Dropright <i className="mdi mdi-chevron-right"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                            </Dropdown>
                                            &nbsp;
                                        </div>

                                        
                                        <div className="btn-group mb-2 dropright">
                                        <ButtonDropdown
                                            direction="right"
                                            isOpen={this.state.infodrp_up11}
                                            toggle={() =>
                                                this.setState({
                                                infodrp_up11: !this.state.infodrp_up11
                                                })
                                            }
                                            >
                                            <Button id="caret" color="info">
                                                Split dropright
                                            </Button>
                                            <DropdownToggle caret color="info">
                                                <i className="mdi mdi-chevron-right"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>

                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Dropleft variation</h4>
                                    <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.
                                    </p>

                                   
                                    <div className="btn-group mb-2 dropleft">
                                    <Dropdown
                                        isOpen={this.state.info_dropup111}
                                        direction="up"
                                        toggle={() =>
                                            this.setState({
                                            info_dropup111: !this.state.info_dropup111
                                            })
                                        }
                                        >
                                        <DropdownToggle className="btn btn-info" caret>
                                        <i className="mdi mdi-chevron-left"></i>  Dropleft 
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                        </Dropdown>
                                        &nbsp;
                                    </div>

                                    
                                    <div className="btn-group mb-2">
                                    <ButtonDropdown
                                        direction="up"
                                        isOpen={this.state.infodrp_up1111}
                                        toggle={() =>
                                            this.setState({
                                            infodrp_up1111: !this.state.infodrp_up1111
                                            })
                                        }
                                        >
                                        <DropdownToggle caret color="info">
                                            <i className="mdi mdi-chevron-left"></i>
                                        </DropdownToggle>
                                        <Button id="caret" color="info">
                                            Split dropleft
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiDropdown);