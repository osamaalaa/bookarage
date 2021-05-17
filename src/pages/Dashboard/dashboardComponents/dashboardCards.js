import React, { useState } from "react";
import { Card, CardBody, TabContent } from "reactstrap";
import CardNavLinks from "./cardNavLinks";
import AppointmentTab from "./tabsComponents/appointments";
import "../../../assets/css/dashboard.css";
import CarArrivedTab from "./tabsComponents/carArrivedTab";
import WorkInProgressTab from "./tabsComponents/workInProgress";
import EstimatedSentTab from "./tabsComponents/estimatedSentTab";
// import EstimatedApprovedTab from "./tabsComponents/estimatedApprovedTab";
import CarReadyTab from "./tabsComponents/carReadyTab";
import InvoicesCreatedTab from "./tabsComponents/invoicesCreatedTab";
import InvoicesPaidTab from "./tabsComponents/invoicesPaid";
const DashboardCards = () => {
  const [state, setState] = useState({
    activeTab: "5",
    activeTabJustify: "5",
    customActiveTab: "1",
    default_date: "",
    modal_large: false,
  });

  const handleActiveTab = (tab) => {
    setState({ ...state, activeTab: tab });
  };

  return (
    <Card className="w-100">
      <CardBody className="p-0">
        <CardNavLinks activeTab={handleActiveTab} />

        <TabContent activeTab={state.activeTab}>
          <AppointmentTab />

          <CarArrivedTab />

          <WorkInProgressTab />
          
          <CarReadyTab />

          <InvoicesCreatedTab />
           {/* <EstimatedApprovedTab /> */}
          <EstimatedSentTab />
          {/* <InvoicesPaidTab /> */}
        </TabContent>
      </CardBody>
    </Card>
  );
};

export default DashboardCards;
