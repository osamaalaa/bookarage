import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const SideTabsComponent = ({ tabName }) => {
  const [sideTabs, setSideTabs] = useState("shop");

  const handleOnClickTab = (type) => {
    setSideTabs(type);
    tabName(type);
  };

  return (
    <div className="sideTabs-container">
      <ul>
        <li
          className={`${sideTabs === "shop" ? "active" : ""}`}
          onClick={() => handleOnClickTab("shop")}
        >
          <Icon>storefront</Icon>
          <p>Shop Information</p>
        </li>
        <li
          className={`${sideTabs === "hrs" ? "active" : ""}`}
          onClick={() => handleOnClickTab("hrs")}
        >
          <Icon>query_builder</Icon>
          <p>Working Hours</p>
        </li>
        <li
          className={`${sideTabs === "service" ? "active" : ""}`}
          onClick={() => handleOnClickTab("service")}
        >
          <Icon>build</Icon>
          <p>Services & Parts</p>
        </li>
        <li
          className={`${sideTabs === "emp" ? "active" : ""}`}
          onClick={() => handleOnClickTab("emp")}
        >
          <Icon>person</Icon>
          <p>Employees</p>
        </li>

        {/* <li
          className={`${sideTabs === "offer" ? "active" : ""}`}
          onClick={() => handleOnClickTab("offer")}
        >
          
           
          <p> <LocalOfferIcon />   Default Offers</p>
        </li> */}
        
        {/* <li
          className={`${sideTabs == "customer" ? "active" : ""}`}
          onClick={() => handleOnClickTab("customer")}
        >
          <Icon>featured_play_list</Icon>
          <p>Customer List</p>
        </li> */}
      </ul>
    </div>
  );
};

export default SideTabsComponent;
