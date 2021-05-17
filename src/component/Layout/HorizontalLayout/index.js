import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Import Components
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RightSideBar from "../right-sidebar";

const Layout = (props) => {
  const [state, setState] = useState({ isMenuOpened: false });

  useEffect(
    (prevProps) => {
      let isMounted = true;
      if (!isMounted) return;
      if (prevProps !== props) {
        if (props.isPreloader === true) {
          document.getElementById("preloader").style.display = "block";
          document.getElementById("status").style.display = "block";

          setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("status").style.display = "none";
          }, 2500);
        } else {
          document.getElementById("preloader").style.display = "none";
          document.getElementById("status").style.display = "none";
        }
      }
      window.scrollTo(0, 0);
      let currentage = capitalizeFirstLetter(props.location.pathname);

      document.title = currentage + " | Bookarage";

      return () => {
        isMounted = false;
      };
    },
    [props]
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  const openMenu = (e) => {
    setState({ ...state, isMenuOpened: !state.isMenuOpened });
  };
  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
      <div id="layout-wrapper">
        {window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" &&
        window.location.pathname !== "/forget-password" ? (
          <header id="page-topbar">
            <Topbar
              isMenuOpened={state.isMenuOpened}
              openLeftMenuCallBack={openMenu}
            />
            <div className="page-title-content">
              <Container fluid>{/* <Breadcrumb/> */}</Container>
            </div>
            <Navbar menuOpen={state.isMenuOpened} />
          </header>
        ) : null}

        <div
          className="main-content"
          id={
            window.location.pathname === "/login" ||
            window.location.pathname === "/register" ||
            window.location.pathname === "/forget-password"
              ? "auth"
              : ""
          }
        >
          <div className="page-content">
            <Container fluid>
              {props.children}
              {window.location.pathname !== "/login" &&
              window.location.pathname !== "/register" &&
              window.location.pathname !== "/forget-password" ? (
                <Footer />
              ) : null}
            </Container>
          </div>
        </div>
      </div>
      <RightSideBar />
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { isPreloader } = state.Layout;
  return { isPreloader };
};

export default withRouter(connect(mapStatetoProps, {})(Layout));
