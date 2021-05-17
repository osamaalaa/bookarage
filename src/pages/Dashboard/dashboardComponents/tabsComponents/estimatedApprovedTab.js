import React, { useEffect, useState } from "react";
import arrowDate from "../../../../assets/images/arrow-ic.svg";
import dateIcon from "../../../../assets/images/date-ic.svg";
import DatePicker from "react-datepicker";
import { Col, Row, TabPane } from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Icon } from "@material-ui/core";
import { _getRequestsByStatusID } from "../../../../services/dashboardRequests";
import { useHistory } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

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
    field: "service",
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
    field: "technician",
    headerName: "Technician",
    sortable: true,
    width: 180,
  },

  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
  {
    field: "Diagnosis",
    width: 120,
    renderCell: (params) => {
      const onClick = () => {
        console.log("clicked");
      };
      return (
        <Icon className="view-icon" onClick={onClick}>
          visibility
        </Icon>
      );
    },
  },
];
const EstimatedApprovedTab = () => {
  const [state, setState] = useState({
    default_date: "",
  });
  const [appointmentData, setAppointmentData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    if (serviceProviderID.length !== 0) {
      _getRequestsByStatusID(serviceProviderID.SERVICE_PROVIDER_ID, 8).then(
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
            appData.push({
              id: resp.REQUEST_ID,
              CAR_MODAL: resp.CAR_MAKE + " " + resp.CAR_MODAL,
              customer: resp.firstname + " " + resp.lastname,
              phonenumber: resp.phonenumber,
              service: resp.SERVICE_NAME,
              time: resp.REQUEST_DATE,
              technician: "",
              status: resp.SERVICE_DETAILS,
            });
          });
          setAppointmentData(appData);
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, []);
  // Handle on change date
  const handleDefault = (date) => {
    setState({ ...state, default_date: date });
  };
  return (
    <TabPane tabId="9" className="p-3">
      <Row>
        <Col lg="12" className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="title-with-line">Estimation Approved</h3>
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
                    columns={columns4}
                    options={options}
                    title={"User Data"}
                  />
                </div> */}
        </Col>
      </Row>
    </TabPane>
  );
};

export default EstimatedApprovedTab;
