import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Icon } from "semantic-ui-react";
// import { Icon } from "semantic-ui-react";

import {
  _getRequestsByStatusID,
  _CompleteRequestByServiceProvider,
} from "../../../../services/dashboardRequests";

import { useHistory } from "react-router-dom";

import { _getOffersByProviderID } from "../../../../services/offersRequests";

import StateContext from "../../../../component/context/stateContext";

import {
  Form,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

import { _createNewInvoice } from "../../../../services/invoiceRequests";

import {
  Card,
  CardBody,
  TabContent,
  NavItem,
  NavLink,
  Label,
  Input,
  Progress,
} from "reactstrap";

// import UiButtons from "../pages/UI Elements/ui-buttons";
import classnames from "classnames";

const WorkInProgressTab = (props) => {
  const [state, setState] = useState({
    default_date: "",
    serviceProviderID: "",
    serviceId: "",
    offerId: "",
    requestCost: "",
    estimationTime: "",

    userId: "",
    serviceCost: "",
    serviceDetails: "",
    carRecoveryCost: "",

    loading: false,
  });
  const { setShowModal, updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const { className } = props;
  const [modal, setModal] = useState(false);
  //const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);
  const [activeOffers, setActiveOffers] = useState([]);

  const toggle = () => setModal(!modal);
  const toggleTabProgress = (tab) => {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 5) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(20);
        }
        if (tab === 2) {
          setprogressValue(40);
        }
        if (tab === 3) {
          setprogressValue(60);
        }
        if (tab === 4) {
          setprogressValue(80);
        }
        if (tab === 5) {
          setprogressValue(100);
        }
      }
    }
  };
  const [appointmentData, setAppointmentData] = useState([
    // {
    //   id: 3,
    //   CAR_MODAL: "Honda civic",
    //   customer: "Yehia Fouad",
    //   phonenumber: "+201000676611",
    //   service: "Repair",
    //   time: "27 Jan 2020",
    //   technician: "",
    //   arrived: "Arrived",
    //   details: 3,
    // },
  ]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "status",
      headerName: "Status",
      width: 250,
      renderCell: (params) => {
        return (
          <p
            className={`tableStatus ${
              params.value === "In Progress" ? "yellowColor" : "greenColor"
            }`}
          >
            {params.value}
          </p>
        );
      },
    },
    {
      field: "CAR_MODAL",
      headerName: "Car Model",
      width: 180,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 180,
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      sortable: true,
      width: 180,
    },
    {
      field: "SERVICE_NAME",
      headerName: "Service",
      width: 180,
    },
    {
      field: "time",
      headerName: "Estimated Time",
      sortable: true,
      width: 180,
    },
    {
      field: "UserId",
      headerName: "UserId",
      sortable: true,
      width: 180,
    },
    {
      field: "arrived",
      headerName: "Arrived",
      width: 180,
    },
    {
      field: "details",

      width: 120,
      renderCell: (params) => {
        
        const onClick = () => {
          console.log(params.row);
          const index = appointmentData.findIndex(
            (obj) => obj.REQUEST_ID === params.value
          );
          console.log(index);
          setShowModal({
            modalName: "details",
            data: {
              requestId: params.row.id,
              type: "inProgress",
              data: params.row,
            },
          });
        };
        return (
          <div className="view-container">
            <Icon name="eye" onClick={onClick} />
          </div>
        );
      },
    },
    {
      field: "CarReady",

      width: 120,
      renderCell: (params) => {
        const onClick = () => {
          
          setShowModal({ modalName: "estimated", data: appointmentData[0] });
        
        };
      
        const onChangeFunc = e => {
          e.preventDefault();
          this.setState({ email: e.target.value });
        };
      
        return (
          // <Button className="view-icon" onClick={onClick}>
          //   Confirm
          // </Button>
          // <p>Confirm</p>
          // <Icon className="view-icon" name="angle right" />
          <div className="confirmTableAction" onClick={onClick}>
            <p>Finished</p>
            <Icon className="view-icon" name="angle right" />
         
          </div>
        );
      },
    },
  ];
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 4) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getRequestsByStatusID(serviceProviderID.SERVICE_PROVIDER_ID, 5).then(
        (res) => {
          console.log(res);
          if (!res.success) {
            if (res.error === "token") {
              history.push("/login");
              return;
            }
            setAppointmentData([]);
            return;
          }
          let appData = [];
          res.result.map((resp) => {
            return appData.push({
              id: resp.REQUEST_ID,
              status: "Work in Progress",
              CAR_MODAL: resp.CAR_MAKE + " " + resp.CAR_MODAL,
              customer: resp.firstname + " " + resp.lastname,
              city: resp.city,
              country: resp.country,
              phonenumber: resp.phonenumber,
              SERVICE_NAME: resp.SERVICE_NAME,
              time: resp.REQUEST_DATE,
              UserId: resp.USER_ID,
              CarId: resp.USER_CAR_ID,
              CAR_IMAGE: resp.CAR_IMAGE[0].CAR_PHOTO_PATH,
              CAR_CHASSIS_NUMBER: resp.CAR_CHASSIS_NUMBER, 
              CAR_YEAR: resp.CAR_YEAR,
              CAR_PLATE_NUMBER: resp.CAR_PLATE_NUMBER,
              CAR_MAKE: resp.CAR_MAKE,
              CAR_COLOR: resp.CAR_COLOR,
              CAR_MILEAGE: resp.CAR_MILEAGE,
              email: resp.email,
            
              REQUEST_DATE: resp.REQUEST_DATE,
              UPDATED_AT: resp.UPDATED_AT,
              arrived: "Arrived",
            });
          });
          setAppointmentData(appData);
        }
      );
    }

    _getOffersByProviderID(serviceProviderID.SERVICE_PROVIDER_ID).then(
      (res) => {
        if (!res.success) {
          if (res.error === "token") {
            history.push("/login");
            return;
          }
          return;
        }
        let activeData = [];
        // let inActiveData = []

        res.result.map((offer) => {
          
            activeData.push(offer);
        
          return activeData;
        });
        setActiveOffers(activeData);
        // setInactiveOffers(inActiveData)
      }
    );

    return () => {
      isMounted = false;
    };
  }, [updateRequests, history]);

  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };

  return (
    <TabPane tabId="7" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Work In Progress</h3>
            <div className="d-flex align-items-center">
              <img src={dateIcon} alt="date" className="mr-2" />
              <span>Fitler By Date</span>
              <div className="date-filter-input ml-3">
                <DatePicker
                  className="date-input"
                  selected={state.default_date}
                  onChange={handleDefault}
                  placeholderText="From"
                />
                <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
              </div>
              <div className="date-filter-input ml-3">
                <DatePicker
                  className="date-input"
                  selected={state.default_date}
                  onChange={handleDefault}
                  placeholderText="To"
                />
                <img src={arrowDate} alt="date" className="mr-2 date-arrow" />
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <DataGrid rows={appointmentData} columns={columns} pageSize={5} />
          </div>
          {/* <div>
            <MuiDataTable
              data={data}
              columns={columns3}
              options={options}
              title={"User Data"}
            />
          </div> */}
        </Col>
      </Row>
    </TabPane>
  );
};

export default WorkInProgressTab;
