import React, { Component } from 'react';
import { Container, Row, Col, CardBody, Button, Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Nav, NavItem, NavLink, TabContent, TabPane, Form } from "reactstrap";
import classnames from 'classnames';
import { Link } from "react-router-dom";

//Simple bar
import SimpleBar from "simplebar-react";


//Import Images

import avatar2 from "../../assets/images/bookarage.svg";


  let username = "Admin";
   if(localStorage.getItem("serviceProviderData"))
   {
        const obj = JSON.parse(localStorage.getItem("serviceProviderData"));
        const uNm = obj.PROVIDER_NAME;
        username = uNm;
   }
  
  const  serviceProvider = JSON.parse(
    localStorage.getItem("serviceProviderData") || "[]"
  );
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "perfume", link : "#" },
                { title : "Chat", link : "#" },
            ],
            chats: [
                { id: 1, status: "online", image: avatar2, name: "Admin", description: "Hey!  Welcome To Bookarage ", time: "05 min", isActive: true },
                
            ],
            groups: [
                { id: 1, image: "B", name: "Bookarage" },
               
            ],
            contacts: [
                {
                    category: "A",
                    child: [
                        { id: 1, name: "Adam Miller" },
                        { id: 2, name: "Alfonso Fisher" },
                    ]
                },
                {
                    category: "B",
                    child: [
                        { id: 3, name: "Bonnie Harney" },
                    ]
                },
                {
                    category: "C",
                    child: [
                        { id: 4, name: "Charles Brown" },
                        { id: 5, name: "Carmella Jones" },
                        { id: 6, name: "Carrie Williams" },
                    ]
                },
                {
                    category: "D",
                    child: [
                        { id: 7, name: "Dolores Minter" },
                    ]
                },
            ],
            messages: [

                { id : "34", isRight : false, image : avatar2, name : "Admin", message:"Hey! Welcome To Bookarage", time : "09:09" },
                { id: "35", isRight: false, image : avatar2 ,name: "Admin", message: " I am available", time: "10:02" },
                { id : "36", isRight : false, image : avatar2, name : "Admin", message : "If you need anything please call me on +971 58 882 6203", time : "10:03" },
                { id : "37", isRight : false, image : avatar2, name : "Admin", message : "Earn Points With Get Notified  , Have a good day", time : "10:04" },
            
            ],
            other1 : false,
            other2 : false,
            settings : false,
            settings2 : false,
            activeTab: '1',
            Chat_Box_Username: "Admin",
            Chat_Box_Username2:username,
            Chat_Box_User_Status: "online",
            Chat_Box_User_isActive: false,
            curMessage: ""
        }

        this.toggleTab = this.toggleTab.bind(this);

        this.UserChatOpen = this.UserChatOpen.bind(this);

        this.addMessage = this.addMessage.bind(this);

    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ 
                activeTab: tab
            });
        }
    }

        //Use For Chat Box
    UserChatOpen = (id, name, status, image) => {

      
    }

    addMessage() {
        let d = new Date();
        var n = d.getSeconds();
        let demoMsg = this.state.messages;
        demoMsg.push({ isRight: true, name: this.state.Chat_Box_Username2, message: this.state.curMessage, time: "00:" + n });
        this.setState({ messages: demoMsg, curMessage: "" });
    }


    
    render() {
        return (
            <React.Fragment>
                {/* <div className="page-content"> */}
                    <Container fluid>
                        <div className="d-lg-flex mb-4">
                            <div className="chat-leftsidebar">
                                <div className="p-3 border-bottom">
                                    <Media>
                                        <div className="align-self-center mr-3">
                                            <img src={serviceProvider.PROVIDER_LOGO_PATH} className="avatar-xs rounded-circle" alt=""/>
                                        </div>
                                        <Media body>
                                            <h5 className="font-size-15 mt-0 mb-1">{username}</h5>
                                            <p className="text-muted mb-0"><i className="mdi mdi-circle text-success align-middle mr-1"></i> Active</p>
                                        </Media>

                                        <div>
                                            <Dropdown isOpen={this.state.other1} toggle={() => this.setState({other1 : !this.state.other1})} className="dropdown chat-noti-dropdown">
                                                <DropdownToggle tag="button" className="btn dropdown-toggle" type="button">
                                                    <i className="mdi mdi-dots-horizontal font-size-20"></i>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </Media>
                                </div>
                                <CardBody className="border-bottom py-2">
                                    <div className="search-box chat-search-box">
                                        <div className="position-relative">
                                            <Input type="text" className="form-control" placeholder="Search..."/>
                                            <i className="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </CardBody>

                                <div className="chat-leftsidebar-nav">
                                    <Nav pills justified>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.toggleTab('1'); }}
                                            >
                                                <i className="ri-message-2-line font-size-20"></i>
                                                <span className="mt-2 d-none d-sm-block"></span>
                                            </NavLink>
                                        </NavItem>
                                        
                                    </Nav>
                                </div>

                                <TabContent activeTab={this.state.activeTab} className="py-4">
                                    <TabPane tabId="1">
                                        <div>
                                            <h5 className="font-size-14 px-3 mb-3">Recent</h5>
                                            <ul className="list-unstyled chat-list" >
                                                <SimpleBar style={{maxHeight:"345px"}}> 
                                                    {
                                                        this.state.chats.map((chat, key) =>
                                                            <li key={key} className={chat.isActive ? "active" : ""}>
                                                                <Link to="#" onClick={() => { this.UserChatOpen(chat.id, chat.name, chat.status, chat.image) }}>
                                                                    <Media>
                                                                        {
                                                                            chat.image === "Null" ?
                                                                                <div className={chat.status === "online" ? "user-img mr-3 online" : chat.status !== "Intermediate" ? "user-img mr-3" : "user-img mr-3 away"}>
                                                                                    <div className="avatar-xs align-self-center">
                                                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                                                            {chat.name.charAt(0)}
                                                                                        </span>
                                                                                        <span className="user-status"></span>
                                                                                    </div>
                                                                                </div>
                                                                            :
                                                                            <div className={"user-img align-self-center mr-3 " + chat.status}>
                                                                                <img src={chat.image} className="rounded-circle avatar-xs" alt=""/>
                                                                                <span className="user-status"></span>
                                                                            </div>
                                                                        }
                                                                        
                                                                        <Media body className="overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">{chat.name}</h5>
                                                                            <p className="text-truncate mb-0">{chat.description}</p>
                                                                        </Media>
                                                                        <div className="font-size-11">{chat.time}</div>
                                                                    </Media>
                                                                    
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                </SimpleBar>
                                            </ul>
                                        </div>
                                    </TabPane>

                                    <TabPane tabId="2">
                                        <h5 className="font-size-14 px-3 mb-3">Group</h5>
                                        <ul className="list-unstyled chat-list">
                                        <SimpleBar style={{maxHeight:"345px"}}>
                                            {
                                                this.state.groups.map((group, key) =>
                                                    <li key={key} >
                                                        <Link to="#" onClick={() => { this.UserChatOpen(group.id, group.name, group.status, group.image) }}>
                                                            <Media className="align-items-center">
                                                                <div className="avatar-xs mr-3">
                                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                                        {group.image}
                                                                    </span>
                                                                </div>
                                                                
                                                                <Media body>
                                                                    <h5 className="font-size-14 mb-0">{group.name}</h5>
                                                                </Media>
                                                            </Media>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                            </SimpleBar>
                                        </ul>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <h5 className="font-size-14 px-3 mb-3">Contact</h5>

                                        <SimpleBar style={{maxHeight:"345px"}}>
                                            {
                                                this.state.contacts.map((contact, key) =>
                                                    <div key={key} className={(key+1 !== 1) ? "mt-4" : ""}>
                                                        <div className="p-3">
                                                            {contact.category}
                                                        </div>

                                                        <ul className="list-unstyled chat-list">
                                                            {
                                                                contact.child.map((array, key) =>
                                                                    <li key={key}>
                                                                        <Link to="#" onClick={() => { this.UserChatOpen(array.id, array.name, array.status, array.image) }}>
                                                                            <h5 className="font-size-14 mb-0">{array.name}</h5>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                        </SimpleBar>

                                    </TabPane>
                                </TabContent>
                            </div>

                            <div className="w-100 user-chat mt-4 mt-sm-0">
                                <div className="p-3 px-lg-4 user-chat-border">
                                    <Row>
                                        <Col md={4} xs={6}>
                                            <h5 className="font-size-15 mb-1 text-truncate">{this.state.Chat_Box_Username}</h5>
                                            <p className="text-muted text-truncate mb-0">
                                                <i className={this.state.Chat_Box_User_Status === "online"
                                                    ? "mdi mdi-circle text-success align-middle mr-1"
                                                    : this.state.Chat_Box_User_Status === "Intermediate" ? "mdi mdi-circle text-warning align-middle mr-1" : "mdi mdi-circle align-middle mr-1"
                                                }></i>
                                                {this.state.Chat_Box_User_Status}
                                            </p>
                                        </Col>
                                        <Col md={8} xs={6}>
                                            <ul className="list-inline user-chat-nav text-right mb-0">
                                                <li className="list-inline-item d-inline-block d-sm-none">
                                                    <Dropdown isOpen={this.state.settings} toggle={()=> this.setState({settings : !this.state.settings})}>
                                                        <DropdownToggle className="btn nav-btn dropdown-toggle" type="button" >
                                                            <i className="mdi mdi-magnify"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu right className="dropdown-menu-md">
                                                            
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </li>
                                              
                                                <li className="list-inline-item m-0 d-none d-sm-inline-block">
                                                    <Dropdown isOpen={this.state.settings2} toggle={()=> this.setState({settings2 : !this.state.settings2})}>
                                                        <DropdownToggle className="btn nav-btn" tag="i" >
                                                            <i className="mdi mdi-cog"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem href="#">View Profile</DropdownItem>
                                                            <DropdownItem href="#">Clear chat</DropdownItem>
                                                            <DropdownItem href="#">Muted</DropdownItem>
                                                            <DropdownItem href="#">Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </li>

                                                <li className="list-inline-item">
                                                    <Dropdown isOpen={this.state.other2} toggle={()=> this.setState({other2 : !this.state.other2})}>
                                                        <DropdownToggle className="btn nav-btn " tag="i">
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem href="#">Action</DropdownItem>
                                                            <DropdownItem href="#">Another action</DropdownItem>
                                                            <DropdownItem href="#">Something else</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </li>
                                                
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="px-lg-2">
                                    <div className="chat-conversation p-3 chat-conversation-height">
                                        <ul className="list-unstyled mb-0 pr-3">
                                        <SimpleBar style={{maxHeight:"450px"}}>
                                            {
                                                this.state.messages.map((message, key) =>
                                                    <li key={key} className={message.isRight ? "right" : ""}  style={{ paddingRight: "20px"}}>
                                                        <div className="conversation-list">
                                                            {
                                                                message.isRight === false ?
                                                                    <div className="chat-avatar">
                                                                        <img src={message.image} alt=""/>
                                                                    </div>
                                                                : null
                                                            }
                                                            
                                                            <div className="ctext-wrap">
                                                                <div className="conversation-name">{message.name}</div>
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0">
                                                                    {message.message}
                                                                    </p>
                                                                </div>
                                                                <p className="chat-time mb-0"><i className="mdi mdi-clock-outline align-middle mr-1"></i> {message.time}</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                           </SimpleBar> 
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="px-lg-3">
                                    <div className="p-3 chat-input-section ">
                                        <Row>
                                            <Col>
                                                <div className="position-relative">
                                                    <Input type="text" value={this.state.curMessage} onChange={(e) => { this.setState({ curMessage: e.target.value }) }} className="form-control chat-input" placeholder="Enter Message..."/>
                                                    
                                                </div>
                                            </Col>
                                            <Col xs={{size:'auto'}}>
                                                <Button onClick={this.addMessage} type="submit" color="primary" className="chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">Send</span> <i className="mdi mdi-send"></i></Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </Container>
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export default Messages;