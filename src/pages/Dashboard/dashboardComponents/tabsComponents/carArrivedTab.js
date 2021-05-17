import React, { useContext, useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import {
  _getRequestsByStatusID,
  _updateRequestStatus,
} from "../../../../services/dashboardRequests";
import { useHistory } from "react-router-dom";
import StateContext from "../../../../component/context/stateContext";
import { Icon } from "semantic-ui-react";

const CarArrivedTab = () => {
  const [state, setState] = useState({
    default_date: "",
  });
  const { setShowModal, updateRequests, setUpdateRequests } = useContext(
    StateContext
  );
  const [appointmentData, setAppointmentData] = useState([]);
  const [carArrivedData, setCarArrivedData] = useState([]);

  const history = useHistory();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "CAR_MODAL",
      headerName: "Car Model",
      width: 250,
    },
    {
      field: "pno",
      headerName: "Plate Number",
      description: "Cervice decription and status",
      sortable: true,
      width: 250,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 250,
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
      field: "arrived",
      headerName: "Arrived",
      width: 250,
    },
    {
      field: "details",
      headerName: "Car Details",
      width: 120,
      renderCell: (params) => {
        
        const onClick = () => {
          console.log("Arrived" , params.row);
          const index = appointmentData.findIndex(
            (obj) => obj.REQUEST_ID === params.value
          );
          console.log(index);
          setShowModal({
            modalName: "details",
            data: {
              requestId: params.row.id,
              type: "Arrived",
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
      field: "assign",
      headerName: "",
      width: 120,
      renderCell: (params) => {
        const onClick = () => {
          //  ("clicked", params);
          const update = {
            REQUEST_ID: params.value,
            STATUS_ID: 5,
          };
          _updateRequestStatus(update).then((res) => {
            if (!res.success) {
              if (res.error === "token") {
                history.push("/login");
                return;
              }
              return;
            }

            const arr = [...appointmentData];
            const index = appointmentData.findIndex(
              (obj) => obj.id === params.value
            );
            arr.splice(index, 1);
            setAppointmentData(arr);
            setUpdateRequests(5);
            window.location.reload();
          });
        };
        return (
          <div className="confirmTableAction">
            <p>Assign</p>
            <Icon className="view-icon" name="angle right" onClick={onClick} />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 3) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getRequestsByStatusID(serviceProviderID.SERVICE_PROVIDER_ID, 3).then(
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
          setCarArrivedData(res.result);
          let appData = [];
          res.result.map((resp) => {
            appData.push({
              id: resp.REQUEST_ID,
              CAR_MODAL: resp.CAR_MAKE + " " + resp.CAR_MODAL,
              pno: resp.CAR_PLATE_NUMBER,
              customer: resp.firstname + " " + resp.lastname,
              phonenumber: resp.phonenumber,
              service: resp.SERVICE_NAME,
              arrived: "Arrived", 
              REQUEST_DATE: resp.REQUEST_DATE,
              CAR_IMAGE: resp.CAR_IMAGE[0].CAR_PHOTO_PATH,
              details: resp.REQUEST_ID,
              assign: resp.REQUEST_ID,
              CAR_LOCATION_LAT: resp.CAR_LOCATION_LAT,
              CAR_LOCATION_LNG: resp.CAR_LOCATION_LNG,
              CAR_MAKE: resp.CAR_MAKE,
              CAR_MILEAGE: resp.CAR_MILEAGE,
              CAR_MODAL: resp.CAR_MODAL,
              CAR_PLATE_NUMBER: resp.CAR_PLATE_NUMBER,
              CAR_YEAR: resp.CAR_YEAR,
              SERVICE_NAME: resp.SERVICE_NAME,
              email: resp.email,
              CAR_COLOR: resp.CAR_COLOR
            });
            return appData;
          });
          setAppointmentData(appData);
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, [updateRequests, history]);
  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };

  return (
    <TabPane tabId="6" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Car Arrived</h3>
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
        </Col>
      </Row>
    </TabPane>
  );
};

export default CarArrivedTab;
