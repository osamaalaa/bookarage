import React, { useEffect } from "react";
import classnames from "classnames";
import { NavLink, NavItem, Nav } from "reactstrap";
import { useState } from "react";
import {  _getRequestsCountByStatus } from "../../../services/dashboardRequests";

const CardNavLinks = ({ activeTab }) => {
  const [state, setState] = useState({
    activeTabJustify: "5",
    appointmentsCount: 0,
    carArrived: 0,
    workInProgress:0,
    CarReady: 0,
    invoiceCreated: 0,
    invoicePaid: 0,
    InvoiceApproved: 0
  });

  // Get all requests count
  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return; 
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getRequestsCountByStatus(serviceProviderID.SERVICE_PROVIDER_ID).then((res) => {
    
      setState({ appointmentsCount: res.result[0].notConfirmed, carArrived: res.result[0].carArrived , workInProgress: res.result[0].inProgress , CarReady: res.result[0].CarReady, invoiceCreated: res.result[0].InvoiceCreated,InvoiceApproved: res.result[0].InvoiceApproved  });
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleOnClickTab = (tab) => {
    setState({ ...state, activeTabJustify: tab });
    activeTab(tab);
  };

  console.log(state)
  return (
    <Nav tabs justified className="nav-tabs-custom" role="tablist">
      <NavItem>
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: state.activeTabJustify === "5",
          })}
          onClick={() => {
            handleOnClickTab("5");
          }}
        >
          <span className="d-flex flex-column d-sm-none">
            <span className="total text-left">{state.appointmentsCount}</span>
            <span className="nav-title">Appointments</span>
          </span>
          <span className="d-none d-sm-flex flex-column">
            <span className="total text-left">{state.appointmentsCount}</span>
            <span className="nav-title">Appointments</span>
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: state.activeTabJustify === "6",
          })}
          onClick={() => {
            handleOnClickTab("6");
          }}
        >
          <span className="d-flex flex-column d-sm-none">
            <span className="total text-left">{state.carArrived}</span>
            <span className="nav-title">Cars Arrived</span>
          </span>
          <span className="d-none d-sm-flex flex-column">
            <span className="total text-left">{state.carArrived}</span>
            <span className="nav-title">Cars Arrived</span>
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: state.activeTabJustify === "7",
          })}
          onClick={() => {
            handleOnClickTab("7");
          }}
        >
          <span className="d-flex flex-column d-sm-none">
            <span className="total text-left">{state.workInProgress}</span>
            <span className="nav-title">Work in progress</span>
          </span>
          <span className="d-none d-sm-flex flex-column">
            <span className="total text-left">{state.workInProgress}</span>
            <span className="nav-title">Work in progress</span>
          </span>
        </NavLink>
      </NavItem>
    
      
      <NavItem>
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: state.activeTabJustify === "10",
          })}
          onClick={() => {
            handleOnClickTab("10");
          }}
        >
          <span className="d-flex flex-column d-sm-none">
            <span className="total text-left">{state.CarReady}</span>
            <span className="nav-title" Style="font-size: 10px;">Cars ready / Invoice Created</span>
          </span>
          <span className="d-none d-sm-flex flex-column">
            <span className="total text-left">{state.CarReady}</span>
            <span className="nav-title" Style="font-size: 10px;">Cars ready / Invoice Created</span>
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: state.activeTabJustify === "8",
          })}
          onClick={() => {
            handleOnClickTab("8");
          }}
        >
          <span className="d-flex flex-column d-sm-none">
            <span className="total text-left">{state.InvoiceApproved}</span>
            <span className="nav-title">Invoices Paid</span>
          </span>
          <span className="d-none d-sm-flex flex-column">
            <span className="total text-left">{state.InvoiceApproved}</span>
            <span className="nav-title">Invoices Paid</span>
          </span>
        </NavLink>
      </NavItem>
     
    
    </Nav>
  );
};

export default CardNavLinks;
