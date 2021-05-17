import React from "react";

//Import Action to copy breadcrumb items from local state to redux state
import { NavLink, NavItem, Nav } from "reactstrap";
import classnames from "classnames";

const OffersNavItems = ({ tabs, activeTab }) => {
  const handleOnClickTab = (type) => {
    tabs(type);
  };
  return (
    <Nav pills justified>
      <NavItem className="waves-effect waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: activeTab === "active",
          })}
          onClick={() => {
            handleOnClickTab("active");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home"></i>
          </span>
          <span className="d-none d-sm-block">Active</span>
        </NavLink>
      </NavItem>
      <NavItem className="waves-effect waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: activeTab === "Inactive",
          })}
          onClick={() => {
            handleOnClickTab("Inactive");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Inactive</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default OffersNavItems;