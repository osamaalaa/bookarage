import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Button
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class UiTabsAccordions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Tabs & Accordions", link : "#" },
            ],
            activeTab: "1",
            activeTab1: "5",
            activeTab2: "9",
            activeTab3: "13",
            customActiveTab: "1",
            activeTabJustify: "5",
            col1: true,
            col2: false,
            col3: false,
            col5: true
        }
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

        this.t_col1 = this.t_col1.bind(this);
        this.t_col2 = this.t_col2.bind(this);
        this.t_col3 = this.t_col3.bind(this);
        this.t_col5 = this.t_col5.bind(this);

        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);

        this.toggleCustomJustified = this.toggleCustomJustified.bind(this);
        this.toggleCustom = this.toggleCustom.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Tabs & Accordions", this.state.breadcrumbItems);
    }

    t_col1() {
        this.setState({ col1: !this.state.col1, col2:false, col3:false });
      }
      t_col2() {
        this.setState({ col2: !this.state.col2, col1:false, col3:false });
      }
      t_col3() {
        this.setState({ col3: !this.state.col3, col1:false, col2:false });
      }
      t_col5() {
        this.setState({ col5: !this.state.col5 });
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
          this.setState({
            activeTab1: tab
          });
        }
      }
      toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
          this.setState({
            activeTab2: tab
          });
        }
      }
      toggle3(tab) {
        if (this.state.activeTab3 !== tab) {
          this.setState({
            activeTab3: tab
          });
        }
      }
    
      toggleCustomJustified(tab) {
        if (this.state.activeTabJustify !== tab) {
          this.setState({
            activeTabJustify: tab
          });
        }
      }
    
      toggleCustom(tab) {
        if (this.state.customActiveTab !== tab) {
          this.setState({
            customActiveTab: tab
          });
        }
      }

    render() {
        return (
            <React.Fragment>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Default Tabs</h4>
                                    <p className="card-title-desc">Use the tab JavaScript plugin—include it individually or through the compiled <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.</p>

                                    <Nav tabs>
                                        <NavItem>
                                                <NavLink
                                                style={{ cursor : "pointer" }}
                                                    className={classnames({
                                                    active: this.state.activeTab === "1"
                                                    })}
                                                    onClick={() => {
                                                    this.toggle("1");
                                                    }}
                                                >
                                                    <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                    <span className="d-none d-sm-block">Home</span>
                                                </NavLink>
                                        </NavItem>

                                        <NavItem>
                                                <NavLink
                                                style={{ cursor : "pointer" }}
                                                    className={classnames({
                                                    active: this.state.activeTab === "2"
                                                    })}
                                                    onClick={() => {
                                                    this.toggle("2");
                                                    }}
                                                >
                                                    <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                        <span className="d-none d-sm-block">Profile</span>
                                                </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                                style={{ cursor : "pointer" }}
                                                    className={classnames({
                                                    active: this.state.activeTab === "3"
                                                    })}
                                                    onClick={() => {
                                                    this.toggle("3");
                                                    }}
                                                >
                                                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                        <span className="d-none d-sm-block">Messages</span>
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                                style={{ cursor : "pointer" }}
                                                    className={classnames({
                                                    active: this.state.activeTab === "4"
                                                    })}
                                                    onClick={() => {
                                                    this.toggle("4");
                                                    }}
                                                >
                                                    <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                        <span className="d-none d-sm-block">Settings</span>
                                        </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="2" className="p-3">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="3" className="p-3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="4" className="p-3">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                                            </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Justify Tabs</h4>
                                    <p className="card-title-desc">Use the tab JavaScript plugin—include it individually or through the compiled <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.</p>

                                   
                                    <Nav pills justified>
                                        <NavItem className="waves-effect waves-light">
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTab1 === "5"
                                                })}
                                                onClick={() => {
                                                this.toggle1("5");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                        </NavLink>
                                        </NavItem>
                                        <NavItem className="waves-effect waves-light">
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTab1 === "6"
                                                })}
                                                onClick={() => {
                                                this.toggle1("6");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="waves-effect waves-light">
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTab1 === "7"
                                                })}
                                                onClick={() => {
                                                this.toggle1("7");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav-item waves-effect waves-light">
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTab1 === "8"
                                                })}
                                                onClick={() => {
                                                this.toggle1("8");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                  
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="5" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="6" className="p-3">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="7" className="p-3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="8" className="p-3">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                                            </p>
                                        </TabPane>
                                    </TabContent>

                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Custom Tabs</h4>
                                    <p className="card-title-desc">Example of custom tabs</p>

                                  
                                    <Nav tabs className="nav-tabs-custom" role="tablist">
                                    <NavItem>
                                    <NavLink
                                    style={{ cursor : "pointer" }}
                                        className={classnames({
                                        active: this.state.customActiveTab === "1"
                                        })}
                                        onClick={() => {
                                        this.toggleCustom("1");
                                        }}
                                    >
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.customActiveTab === "2"
                                                })}
                                                onClick={() => {
                                                this.toggleCustom("2");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.customActiveTab === "3"
                                                })}
                                                onClick={() => {
                                                this.toggleCustom("3");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.customActiveTab === "4"
                                            })}
                                            onClick={() => {
                                            this.toggleCustom("4");
                                            }}
                                        >
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                 
                                    <TabContent activeTab={this.state.customActiveTab}>
                                    <TabPane tabId="1" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="2" className="p-3">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="3" className="p-3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="4" className="p-3">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                                            </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Custom Tabs Justified</h4>
                                    <p className="card-title-desc">Example of custom tabs</p>

                              
                                    <Nav tabs justified className="nav-tabs-custom" role="tablist">
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTabJustify === "5"
                                            })}
                                            onClick={() => {
                                            this.toggleCustomJustified("5");
                                            }}
                                        >
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTabJustify === "6"
                                                })}
                                                onClick={() => {
                                                this.toggleCustomJustified("6");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTabJustify === "7"
                                                })}
                                                onClick={() => {
                                                this.toggleCustomJustified("7");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink
                                            style={{ cursor : "pointer" }}
                                                className={classnames({
                                                active: this.state.activeTabJustify === "8"
                                                })}
                                                onClick={() => {
                                                this.toggleCustomJustified("8");
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                
                                    <TabContent activeTab={this.state.activeTabJustify}>
                                        <TabPane tabId="5" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="6" className="p-3">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="7" className="p-3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="8" className="p-3">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                                            </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                    
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Default Collapse</h4>
                                    <p className="card-title-desc">
                                        You can use a link with the <code className="highlighter-rouge">href</code> attribute, or a button with the <code className="highlighter-rouge">data-target</code> attribute. In both cases, the <code className="highlighter-rouge">data-toggle="collapse"</code> is required.
                                    </p>

                                    <p>
                                        <Link to="#"
                                            onClick={this.t_col5}
                                            style={{ cursor : "pointer" }}
                                            className="btn btn-primary mo-mb-2 mr-1"
                                        >
                                            Link with href
                                        </Link>
                                        <Button onClick={this.t_col5} color="primary" className="mo-mb-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Button with data-target
                                        </Button>
                                    </p>
                                    <Collapse isOpen={this.state.col5}>
                                        <Card>
                                        <CardBody className="mb-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                            life accusamus terry richardson ad squid. Nihil anim
                                            keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                        </Card>
                                    </Collapse>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Accordion example</h4>
                                    <p className="card-title-desc">Extend the default collapse behavior to create an accordion.</p>

                                    <div id="accordion">
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingOne">
                                                <h6 className="m-0 font-size-14">
                                                    <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col1} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                        Collapsible Group Item #1
                                                    </Link>
                                                </h6>
                                            </div>

                                            <Collapse isOpen={this.state.col1}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
                                        </div>
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingTwo">
                                                <h6 className="m-0 font-size-14">
                                                <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col2} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                        Collapsible Group Item #2
                                                    </Link>
                                                </h6>
                                            </div>
                                            <Collapse isOpen={this.state.col2}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
                                        </div>
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingThree">
                                                <h6 className="m-0 font-size-14">
                                                <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col3} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                        Collapsible Group Item #3
                                                    </Link>
                                                </h6>
                                            </div>
                                            <Collapse isOpen={this.state.col3}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
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

export default connect(null, { setBreadcrumbItems })(UiTabsAccordions);