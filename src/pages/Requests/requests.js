import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TabContent, Modal, ModalHeader, ModalBody } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import filterIcon from "../../assets/images/Inquires/filter-ic.svg";
import searchIcon from "../../assets/images/Inquires/Search.svg";
import RequestTabs from "./requestComponents/requestTabs";
import NewRequestsTab from "./requestComponents/requestsTabs/newRequests";
import AcceptedRequestsTab from "./requestComponents/requestsTabs/acceptedRequests";
import CarArrivedTab from "./requestComponents/requestsTabs/carArrived";
import OnGoingTab from "./requestComponents/requestsTabs/ongoing";
import CarReadyTab from "./requestComponents/requestsTabs/carReady";

const Requests = (props) => {
  const [state, setState] = useState({
    tabs: "5",
    breadcrumbItems: [
      { title: "Bookarage", link: "#" },
      { title: "Pages", link: "#" },
      { title: "Requests", link: "/offers" },
    ],
    modal_center: false, 
  });

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    props.setBreadcrumbItems("Offers", state.breadcrumbItems);

    return () => {
      isMounted = false;
    };
  }, []);

  const tog_center = () => {
    setState((prevState) => ({
      modal_center: !prevState.modal_center,
    }));
  };

  return (
    <React.Fragment>
      <section id="inquires">
        <div className="d-flex align-items-center mt-4">
          <RequestTabs
            nextStep={(value) => setState({ ...state, tabs: value })}
            tabs={state.tabs}
          />
          <button
            className="filter-btn d-flex align-items-center mx-5"
            onClick={tog_center}
          >
            <img src={filterIcon} alt="filter" className="mr-2" />
            <span>Filter</span>
          </button>

          <div className="position-relative w-75 bg-white d-flex align-items-center justify-content-between">
            <input
              type="text"
              className="search-input"
              placeholder="Search by ID, Service name, Owner, Car Details"
            />
            <button className="bg-transparent border-0">
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </div>

        <TabContent activeTab={state.tabs}>
          <NewRequestsTab />
          <AcceptedRequestsTab />
          <CarArrivedTab />
          <OnGoingTab />
          <CarReadyTab />
        </TabContent>
        <Modal
          isOpen={state.modal_center}
          toggle={tog_center}
          autoFocus={true}
          centered={true}
        >
          <ModalHeader toggle={tog_center}>Filter</ModalHeader>
          <ModalBody>
            <div className="row w-100 mx-0 p-3">
              <div className="col-md-6">
                <label htmlFor="name">By Service</label>
                <div className="form-group">
                  <select className="form-control">
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="name">Car Make</label>
                <div className="form-group">
                  <select className="form-control">
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="name">Requested Date</label>
                <div className="switch-toggle d-flex align-items-center justify-content-between switch-3 switch-candy">
                  <input id="all" name="state-d" type="radio" />
                  <label htmlFor="all">All Dates</label>
                  <input id="na" name="state-d" type="radio" />
                  <label htmlFor="na">This week</label>

                  <input id="off" name="state-d" type="radio" />
                  <label htmlFor="off">Next week</label>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button className="submit-create mr-3">Show Result</button>
              <button className="cancel-btn" onClick={tog_center}>
                Cancel
              </button>
            </div>
          </ModalBody>
        </Modal>
      </section>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(Requests);
