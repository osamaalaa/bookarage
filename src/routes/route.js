import React from "react";
import { Route, Redirect } from "react-router-dom";
import HorizontalLayout from "../component/Layout/HorizontalLayout";

// Get all Auth methods
import { isUserAuthenticated } from "../helpers/authUtils";

const AppRoute = ({ component: Component, isAuthProtected, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !isUserAuthenticated()) {
          
          // localStorage.clear()
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
              exact
            />
          );
        }

        return (
          <HorizontalLayout>
            <Component {...props} />
          </HorizontalLayout>
          // <React.Fragment>

          // </React.Fragment>
        );
      }}
    />
  );
};

export default AppRoute;
