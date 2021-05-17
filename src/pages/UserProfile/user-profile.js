import React, { Component } from 'react';
import {
    Col,
    Card,
    UncontrolledTooltip,
    CardBody,
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,
    Nav,
  Button
  } from "reactstrap";
  import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import AuthService from "../../services/auth.service";
import classnames from "classnames";
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Profiles", link : "#" },
                { title : "User Profile", link : "#" },
            ],

            currentUser: {},
            Profile: {}
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
       
            const user = AuthService.getCurrentUser();
        
            if (user) {
              this.setState({
                currentUser: user,
                Profile: user.ProfileData,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
              });
            }

            console.log(user);
          
        this.props.setBreadcrumbItems("User Profile", this.state.breadcrumbItems);
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
       
                    <Col  md="12" key="osama">
                        <Card className="directory-card">
                        <div>
                                    <div className="directory-bg text-center">
                                        <div className="directory-overlay">
                                            <img className="rounded-circle avatar-lg img-thumbnail" src= {this.state.Profile.USER_IMAGE_PATH} alt="Generic placeholder"/>
                                        </div>
                                    </div>

                                    <div className="directory-content text-center p-4">
                                        <p className=" mt-4">{this.state.currentUser.firstname} {this.state.currentUser.lastname}</p>
                                        {/* <h5 className="font-size-16">{this.state.currentUser.username}</h5>

                                        <p className="text-muted">{this.state.currentUser.username}</p> */}
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

                                    </div>
                                </div>

                        </Card>
                    </Col>
                
                  
        </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UserProfile);