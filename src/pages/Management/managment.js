import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import "../../assets/css/management.css";
import "../../assets/css/modal.css";
import "semantic-ui-css/semantic.min.css";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import EmployeesComponent from "./components/employees";
import ServiceAndPartsComponent from "./components/serviceAndParts";
import ShopInfoComponent from "./components/shopInfo";
import SideTabsComponent from "./components/sidetabs";
import WorkingHrsComponent from "./components/workingHrs";
import DefaultOfferComponent from "./components/defaultOffer";
import AddBrandModal from "./components/modals/addBrand";
import AddServiceModal from "./components/modals/addService";
import AddDefaultService from "./components/modals/addDefaultServices";
import DeleteModal from "./components/modals/deleteModal";
import SuccessModal from "./components/modals/successModal";
import Location from "./components/modals/addLocation";



const Managment = (props) => {
  const [contents, setContents] = useState("shop");
  const [workingHrs, setWorkingHrs] = useState("");
  const [update, setUpdate] = useState("");
  return (
    <Fragment>
      <AddBrandModal updateBrands={(value) => setUpdate(value)} />
      <AddServiceModal updateService={(value) => setUpdate(value)} />
      <AddDefaultService updateDefaultServices={(value) => setUpdate(value)} />
      <DeleteModal />
      <SuccessModal />
      <Location updateLocation={(value) => setUpdate(value)}/>
      <div className="management-container">
        <Row>
          <Col lg="4" md="4" sm="12" className="mb-3">
            <SideTabsComponent tabName={(value) => setContents(value)} />
          </Col>
          <Col lg="8" md="8" sm="12" className="mb-3">
            {contents === "shop" && (
              <ShopInfoComponent workingHrs={(value) => setWorkingHrs(value)} />
            )}
            {contents === "hrs" && (
              <WorkingHrsComponent workingHrs={workingHrs} />
            )}
            {contents === "service" && (
              <ServiceAndPartsComponent update={update} />
            )}
            {contents === "emp" && <EmployeesComponent />}
            {contents === "offer" && <DefaultOfferComponent />}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};


export default connect(null, { setBreadcrumbItems })(Managment);
