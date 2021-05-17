import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";
import NonAuthLayout from "./component/NonAuthLayout/NonAuthLayout";

// Import scss
import "./theme.scss";
import StateContext from "./component/context/stateContext";
import SuccessModal from "./shared/successModal";

//Fake backend

const App = (props) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showModal, setShowModal] = useState({
    modalName: "",
    data: null,
  });
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");
  const [modalBreadCrumb, setModalBreadCrumb] = useState([]);
  const [updateRequests, setUpdateRequests] = useState(0);

  window.onload = () => {
    setShowLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;

    
    // localStorage.clear();
    const elmnt = document.querySelector("body");

    if (
      showModal.modalName === "details" ||
      showModal.modalName === "estimated" ||
      showModal.modalName === "newCard"
    ) {
       
      elmnt.className = "modal-open";
    } else {
      elmnt.className = "";
    }
    return () => {
      isMounted = false;
    };
  }, [showModal]);

  return (
    <StateContext.Provider
      value={{
        showModal,
        setShowModal,
        loading,
        setLoading,
        currentImage,
        setCurrentImage,
        modalBreadCrumb,
        setModalBreadCrumb,
        updateRequests,
        setUpdateRequests,
      }}
    >
      <React.Fragment>
        <SuccessModal />
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                component={route.component}
                layout={NonAuthLayout}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    </StateContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
