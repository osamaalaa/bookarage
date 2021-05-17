import React from "react";
import { NavLink, NavItem, Nav } from "reactstrap";
import classnames from "classnames";

const RequestTabs = ({ nextStep, tabs }) => {
  return (
    <Nav id="inquires_list" pills justified className="w-100">
      <NavItem className="waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: tabs === "5",
          })}
          onClick={() => {
            nextStep("5");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home"></i>
          </span>
          <span className="d-none d-sm-block">New</span>
        </NavLink>
      </NavItem>
      {/* <NavItem className="waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: tabs === "6",
          })}
          onClick={() => {
            nextStep("6");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Accepted</span>
        </NavLink>
      </NavItem> */}
      {/* <NavItem className="waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: tabs === "7",
          })}
          onClick={() => {
            nextStep("7");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Car Arrived</span>
        </NavLink>
      </NavItem> */}
      {/* <NavItem className="waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: tabs === "8",
          })}
          onClick={() => {
            nextStep("8");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Ongoing</span>
        </NavLink>
      </NavItem> */}
      {/* <NavItem className="waves-light">
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: tabs === "9",
          })}
          onClick={() => {
            nextStep("9");
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Car Ready</span>
        </NavLink>
      </NavItem> */}
    </Nav>
  );
};

export default RequestTabs;
