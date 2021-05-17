import React, { Component } from 'react';
import { Media} from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

class EmailSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                            {/* left sidebar start */}
                            <div className="email-leftbar card">
                                <Link to="/email-compose" className="btn btn-danger rounded btn-custom btn-block waves-effect waves-light">Compose</Link>

                                <div className="mail-list mt-3">
                                    <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                    <Link to="#">Starred</Link>
                                    <Link to="#">Important</Link>
                                    <Link to="#">Draft</Link>
                                    <Link to="#">Sent Mail</Link>
                                    <Link to="#">Trash</Link>
                                </div>

                                <h5 className="mt-4">Labels</h5>

                                <div className="mail-list mt-3">
                                    <Link to="#"><span
                                            className="mdi mdi-arrow-right-drop-circle text-info float-right mt-1  ml-2"></span>Theme
                                        Support</Link>
                                    <Link to="#"><span
                                            className="mdi mdi-arrow-right-drop-circle text-warning float-right mt-1 ml-2"></span>Freelance</Link>
                                    <Link to="#"><span
                                            className="mdi mdi-arrow-right-drop-circle text-primary float-right mt-1 ml-2"></span>Social</Link>
                                    <Link to="#"><span
                                            className="mdi mdi-arrow-right-drop-circle text-danger float-right mt-1 ml-2"></span>Friends</Link>
                                    <Link to="#"><span
                                            className="mdi mdi-arrow-right-drop-circle text-success float-right mt-1  ml-2"></span>Family</Link>
                                </div>

                                <h5 className="mt-4">Chat</h5>

                                <div className="mt-3">
                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user2} alt="Generic placeholder" height="36"/>
                                        <Media className="chat-user-box" body>
                                            <p className="user-title m-0">Scott Median</p>
                                            <p className="text-muted">Hello</p>
                                        </Media>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user3} alt="Generic placeholder" height="36"/>
                                        <Media className="chat-user-box" body>
                                            <p className="user-title m-0">Julian Rosa</p>
                                            <p className="text-muted">What about our next..</p>
                                        </Media>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user4} alt="Generic placeholder" height="36"/>
                                        <Media className="chat-user-box" body>
                                            <p className="user-title m-0">David Medina</p>
                                            <p className="text-muted">Yeah everything is fine</p>
                                        </Media>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user6} alt="Generic placeholder" height="36"/>
                                        <Media className="chat-user-box" body>
                                            <p className="user-title m-0">Jay Baker</p>
                                            <p className="text-muted">Wow that's great</p>
                                        </Media>
                                    </Link>

                                </div>
                            </div>
                            {/* left sidebar over */}
            </React.Fragment>
        );
    }
}

export default EmailSidebar;