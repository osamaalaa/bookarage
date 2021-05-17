import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import {
  _confirmRequestByServiceProvider,
  _getRequestsByStatusID,
} from "../../../../services/dashboardRequests";
import StateContext from "../../../../component/context/stateContext";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import SweetAlert from "react-bootstrap-sweetalert";
const AppointmentTab = () => {
  const [state, setState] = useState({
    default_date: "",
  });
  const [alert_confrim, setAlertConfirm] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const { setShowModal, updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const history = useHistory();

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
              params.value === "Not Confirmed" ? "yellowColor" : "greenColor"
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
      width: 250,
    },
    {
      field: "customer",
      headerName: "Customer",
      description: "Cervice decription and status",
      sortable: true,
      width: 220,
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      sortable: true,
      width: 250,
    },
    {
      field: "service",
      headerName: "Service",
      width: 250,
    },
    {
      field: "REQUEST_DATE",
      headerName: "Time",
      width: 120,
    },
    {
      field: "details",
      headerName: "Car Details",
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
              type: "appointment",
              data: params.row,
            },
          });

          console.log(appointmentData)
        };
        return (
          <div className="view-container">
            <Icon name="eye" onClick={onClick} />
          </div>
        );
      },
    },
    {
      field: "confirm",
      width: 120,
      renderCell: (params) => {
        const onClick = () => {
          console.log("clicked", params);
          setAlertConfirm(true);
          _confirmRequestByServiceProvider(params.value).then((res) => {
            if (res.success) {
              const arr = [...appointmentData];
              const index = appointmentData.findIndex(
                (obj) => obj.id === params.value
              );
              arr.splice(index, 1);
              setAppointmentData(arr);
              setUpdateRequests(3);
              window.location.reload();
            }
          });
        };
        return (
          <div className="confirmTableAction" onClick={onClick}>
            <p>Confirm</p>
            <Icon className="view-icon" name="angle right" />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;

    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getRequestsByStatusID(serviceProviderID.SERVICE_PROVIDER_ID, 2).then(
        (res) => {
          if (!res.success) {
            if (res.error === "token") {
              history.push("/login");
              return;
            }
            setAppointmentData([]);
            return;
          }
          let appData = [];
          console.log("The Response : " , res)
          res.result.map((appointment) => {

         
            return appData.push({
              id: appointment.REQUEST_ID,
              status: "Not Confirmed",
              CAR_MODAL: appointment.CAR_MAKE + " " + appointment.CAR_MODAL,
              customer: appointment.firstname + " " + appointment.lastname,
              phonenumber: appointment.phonenumber,
              service: appointment.SERVICE_NAME,
              REQUEST_DATE: appointment.REQUEST_DATE,
              CAR_IMAGE: appointment.CAR_IMAGE[0].CAR_PHOTO_PATH,
              details: appointment.REQUEST_ID,
              confirm: appointment.REQUEST_ID,
              CAR_LOCATION_LAT: appointment.CAR_LOCATION_LAT,
              CAR_LOCATION_LNG: appointment.CAR_LOCATION_LNG,
              CAR_MAKE: appointment.CAR_MAKE,
              CAR_MILEAGE: appointment.CAR_MILEAGE,
              CAR_MODAL: appointment.CAR_MODAL,
              CAR_PLATE_NUMBER: appointment.CAR_PLATE_NUMBER,
              CAR_YEAR: appointment.CAR_YEAR,
              SERVICE_NAME: appointment.SERVICE_NAME,
              email: appointment.email,
              CAR_COLOR: appointment.CAR_COLOR


            });
          });
          setAppointmentData(appData);
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, [history]);

  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };

  // Handle on click create appointment
  const handleOnClickCreate = () => {
    setShowModal({ modalName: "createAppointment", data: null });
  };
  return (
    <TabPane tabId="5" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between">

            <h3 className="title-with-line">Appointments</h3>

            <div className="d-flex align-items-center mt-3 mt-lg-0 flex-wrap">

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
            <button
              onClick={handleOnClickCreate}
              className="d-flex align-items-center justify-content-center btn-create"
            >
              <i className="fas fa-plus mr-2 text-white"></i>
              <span className="text-white">Create Appointment</span>
            </button>
          </div>
          <div className="table-responsive">
            <DataGrid rows={appointmentData} columns={columns} pageSize={5} />
            {state.alert_confirm === true ? (
              <SweetAlert
                title="Are you sure?"
                warning
                showCancel
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => setAlertConfirm(false)}
                onCancel={() => setAlertConfirm(false)}
              >
                You won't be able to revert this!
              </SweetAlert>
            ) : null}
          </div>
        </Col>
      </Row>
    </TabPane>
  );
};

export default AppointmentTab;
