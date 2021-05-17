import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Media,
} from "reactstrap";
import notificationIcon from "../../../assets/images/notif-ic.svg";
//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { _getNotifications } from "../../../services/notifications";
import AuthService from "../../../services/auth.service";
const NotificationMenu = (props) => {
  const [state, setState] = useState({
    notifications: [],
    title: "",
    body: "",
    sound: "",
    menu: false,
    token: "",
  });
  const history = useHistory();

  useEffect(() => {
    let isMounted = new AbortController();
    // if (!isMounted) return;
    const user = AuthService.getCurrentUser();
    if (user) {
      //  (user.accessToken)
      setState({
        token: user.accessToken,
      });
      _getNotifications().then((res) => {
        if (res.success) {
          setState({
            ...state,
            title: res.notification.title,
            body: res.notification.body,
          });
        } else {
          history.push("/login");
        }

        //  ( state.title)
        // //  ("notification" , res.notification.body)
      });
    }
    return () => {
      isMounted.abort();
    };
  }, [history, state]);

  const toggle = () => {
    setState({ ...state, menu: !state.menu });
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={state.menu}
        toggle={toggle}
        className="d-inline-block ml-1"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <img alt="notification" src={notificationIcon} width="22px" />
          <span className="badge badge-primary badge-pill">1</span>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h5 className="m-0"> {state.title}</h5>
              </Col>
            </Row>
          </div>
          <PerfectScrollbar style={{ height: "230px" }}>
            {/* { state.notifications.map((notification, key) => ( */}
            <Link to="/" className="text-reset notification-item">
              <Media>
                <div className="avatar-xs mr-3">
                  <span className="avatar-title border-success rounded-circle ">
                    <i className={"mdi " + state.title}></i>
                  </span>
                </div>
                <Media body>
                  <h6 className="mt-0 mb-1">{state.body}</h6>
                  <div className="text-muted">
                    <p className="mb-1">{state.title}</p>
                  </div>
                </Media>
              </Media>
            </Link>
            {/* ))} */}
          </PerfectScrollbar>
          <div className="p-2 border-top">
            {/* <Link
                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                to="#"
              >
                View all
              </Link> */}
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationMenu;
