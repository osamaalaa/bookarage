import React, { useContext, useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { withRouter } from "react-router-dom";

//Import Images
import user from "../../../assets/images/users/avatar.jpg";
import AuthService from "../../../services/auth.service"; // authservices
import StateContext from "../../context/stateContext";
const ProfileMenu = (props) => {
  const [state, setState] = useState({
    menu: false,
    user: {},
  });

  const { currentImage } = useContext(StateContext);

  const toggle = () => {
    setState((prevState) => ({
      ...state,
      menu: !prevState.menu,
    }));
  };

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const user = AuthService.getCurrentUser();
    if (user) {
      setState({
        user: user,
        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || currentImage === "") return;
    state.user.USER_IMAGE_PATH = currentImage;

    return () => {
      isMounted = false;
    };
  }, [currentImage, state.user.USER_IMAGE_PATH]);

  return (
    <React.Fragment>
      <Dropdown isOpen={state.menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          {state.user.USER_IMAGE_PATH && !currentImage ? (
            <img
              className="rounded-circle header-profile-user"
              src={state.user.USER_IMAGE_PATH}
              alt="Header Avatar"
            />
          ) : null}
          {!state.user.USER_IMAGE_PATH && !currentImage ? (
            <img
              className="rounded-circle header-profile-user"
              src={user}
              alt="Header Avatar"
            />
          ) : null}
          {state.user.USER_IMAGE_PATH && currentImage ? (
            <img
              className="rounded-circle header-profile-user"
              src={currentImage}
              alt="Header Avatar"
            />
          ) : null}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag="a" href="/user-profile">
            <i className="mdi mdi-account-circle font-size-17 text-muted align-middle mr-1"></i>{" "}
            {state.user.firstname} {state.user.lastname}
          </DropdownItem>
          <DropdownItem tag="a" href="/wallet">
            <i className="mdi mdi-wallet font-size-17 text-muted align-middle mr-1"></i>{" "}
            My Wallet
          </DropdownItem>
          {/* <DropdownItem tag="a" href="#" className="d-block">
            <span className="badge badge-success float-right">11</span>
            <i className="mdi mdi-settings font-size-17 text-muted align-middle mr-1"></i>{" "}
            Settings
          </DropdownItem> */}
          <DropdownItem tag="a" href="#">
            <i className="mdi mdi-lock-open-outline font-size-17 text-muted align-middle mr-1"></i>{" "}
            Lock screen
          </DropdownItem>
          <DropdownItem tag="a" href="#" divider></DropdownItem>
          <DropdownItem tag="a" href="/logout" className="text-danger">
            <i className="mdi mdi-power font-size-17 text-muted align-middle mr-1 text-danger"></i>{" "}
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withRouter(ProfileMenu);
