import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DataGrid } from "@material-ui/data-grid";
import "semantic-ui-css/semantic.min.css";

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import "../../assets/css/wallet.css";
import { Col, Row, Card, CardBody, Table } from "reactstrap";
import { useHistory } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import arrowDate from "../../assets/images/arrow-ic.svg";
import moment from "moment";

import { Icon } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import {
  /*_getAllServicesByUserId,
  _getUsersTransactions,*/
  _getPaymentForServiceProvider,
  _getCharsForServiceProvider,
  _getBalanceForServiceProvider,
  _getRequestWithDrawByServiceProvider

} from "../../services/axiosRequests";
import RequestWithdrawalModal from "./modals/requestWithdraw";
import StateContext from "../../component/context/stateContext";

const columns = [
  { field: "_id", hide: true },
  { field: "id", headerName: "ID", width: 90 },

  { field: "firstname", headerName: "Customer", width: 250 },

  {
    field: "phonenumber",
    headerName: "Customer PhoneNumber",
    sortable: true,
    width: 250,
  },
  {
    field: "PAYMENT_DATE",
    headerName: "Payment Date",
    sortable: true,
    width: 250,
  },
  {
    field: "PAYMENT_AMOUNT",
    headerName: "Payment Amount",
    width: 250,
  },
  {
    field: "PAYMENT_STATUS",
    headerName: "Payment Status",
    width: 250,
  },
];

const Wallet = (props) => {
  const [date] = useState({ from: "", to: "" });
  const [walletTableData, setWalletTableData] = useState([]);
  const [withdrawTable, setWithDrawTable] = useState([]);
  const [walletBalance, setWalletBalance] = useState([]);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const [viewAll] = useState(false);
  const { setShowModal } = useContext(StateContext);

  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    if (!isMounted) return;
    //props.setBreadcrumbItems("Wallet", breadcrumbItems);

    const providerID = JSON.parse( localStorage.getItem("serviceProviderData") || "[]" );

    _getPaymentForServiceProvider( providerID.SERVICE_PROVIDER_ID ).then(
      (res) => {
        //(res);
        let serviceData = [];
        if (res.message && /Invalid/.test(res.message)) {
          history.push("/login");
          localStorage.removeItem("user");
          return;
        }
        res.result.map((service) => {
          serviceData.push({

            PAYMENT_ID: service.PAYMENT_ID,

            PAYMENT_AMOUNT: service.PAYMENT_AMOUNT,

            CARD_NUMBER: service.CARD_NUMBER,

            USER_CARD_EMAIL: service.USER_CARD_EMAIL,

            PAYMENT_DATE: service.PAYMENT_DATE,

            PAYMENT_CURRENCY: service.PAYMENT_CURRENCY,

            SERVICE_PROVIDER_ID: service.SERVICE_PROVIDER_ID,

            SERVICE_ID: service.SERVICE_ID,

            SERVICE_NAME: service.SERVICE_NAME,

            id: service.PAYMENT_ID,

            firstname: service.firstname + " " + service.lastname,

            PAYMENT_STATUS: service.PAYMENT_STATUS,

            phonenumber: service.phonenumber,

          });

          return serviceData;
        });

        console.log("SERVICE_DATA" , serviceData)

        setWalletTableData(serviceData);
      }
    );

    _getBalanceForServiceProvider(providerID.SERVICE_PROVIDER_ID).then(
      (res) => {
        //(res);
        let Balance = [];
        if (res.message && /Invalid/.test(res.message)) {
          history.push("/login");
          localStorage.removeItem("user");
          return;
        }
        res.result.map((service) => {
          Balance.push({
            PAYMENT_COUNT: service.PAYMENT_COUNT,
          });
          return Balance;
        });

        setBalanceHistory(Balance);
      }
    );
    // ===============================
    _getCharsForServiceProvider(providerID.SERVICE_PROVIDER_ID).then((res) => {
      //(res);
      let balanceData = [];
      if (res.message && /Invalid/.test(res.message)) {
        history.push("/login");
        localStorage.removeItem("user");
        return;
      }
      res.result.map((service) => {
        balanceData.push({
          YEAR: service.YEAR,
          MONTH: service.MONTH,
          PAYMENT_AMOUNT: service.PAYMENT_AMOUNT,
        });
        return balanceData;
      });

      setWalletBalance(balanceData);
    });


    _getRequestWithDrawByServiceProvider(providerID.SERVICE_PROVIDER_ID).then((res) => {
      //(res);
      let balanceData = [];
      if (res.message && /Invalid/.test(res.message)) {
        history.push("/login");
        localStorage.removeItem("user");
        return;
      }
      res.result.map((service) => {
        balanceData.push({
          CREATED_AT: service.CREATED_AT,
          WITHDRAW_AMOUNT: service.WITHDRAW_AMOUNT,
        });
        return balanceData;
      });

      setWithDrawTable(balanceData);
    });

    // ===========================================

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOnClick = () => {
    if (walletBalance.length === 0) {
      return;
    } else {
      setShowModal({ modalName: "requestWithdraw", data: null });
    }
  };

  return (
    <React.Fragment>
      <RequestWithdrawalModal />

      <Row className="wallet-container">
        <Col lg="4">
          <div
            className="card card-body text-center sticky"
            style={{ borderRadius: "15px" }}
          >
            <div
              className="p-3 mb-2 text-white"
              style={{ backgroundColor: "#325A8F" }}
            >
              <div className="text-center" >
                <h4 className="card-title" style={{ marginTop: "25px" , color: "#fff" }}>
                  Available Balance
                </h4>
                {balanceHistory.map((balance, i) => (
                  <h1 Style="color: #fff"> {balance.PAYMENT_COUNT} AED</h1>
                ))}
              </div>

              <Button
                className="btn-auth btn-my-wallet waves-effect waves-light"
                onClick={handleOnClick}
              >
                Request withdraw
              </Button>
            </div>
            <div className="table-responsive">
              <Table className="table mb-0">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Withdraw date</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawTable.length > 0 ? (
                    withdrawTable.map((balance, i) => (
                      <tr key={i}>
                        <td>{balance.WITHDRAW_AMOUNT}</td>
                      
                        {/* <td>
                          {moment(balance.WITHDRAW_DATE).format("DD MMM YYYY")}
                        </td> */}
                        <td>  {moment(balance.CREATED_AT).format("DD MMM YYYY")}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No balance history</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
            {viewAll && (
              <div className="view-all-container">
                <p onClick={() => history.push("/allBalance")}>View All</p>
                <Icon>arrow_forward_ios</Icon>
              </div>
            )}
          </div>
        </Col>

        <Col lg="8">
          <Card style={{ borderRadius: "15px" }}>
            <CardBody>
              <Row>
                <Col lg="6">
                  <h4 className="card-title mb-4">income chart</h4>
                </Col>
                <Col lg="6">
                  <UncontrolledDropdown>
                    <DropdownToggle caret>2020</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>2020</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>2019</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>2018</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Col>
              </Row>
              <Row className="text-center mt-4">
                <Col sm="4">
                  <h5 className="mb-0 font-size-20">0</h5>
                  <p className="text-muted">2018</p>
                </Col>
                <Col sm="4">
                  <h5 className="mb-0 font-size-20">0</h5>
                  <p className="text-muted">2019</p>
                </Col>
                <Col sm="4">
                  <h5 className="mb-0 font-size-20">0</h5>
                  <p className="text-muted">2020</p>
                </Col>
              </Row>

              <div dir="ltr">
                <LineApexChart />
              </div>

              <div className="wallet-content">
                <div className="wallet-chart-title">
                  <h4>Income Details</h4>
                </div>
                <div className="wallet-chart-content">
                  <p></p>
                  {balanceHistory.length > 0 ? (
                    balanceHistory.map((balance, i) => (
                      <tr key={i}>
                        <p>
                          Year {moment(balance.WITHDRAW_DATE).format("YYYY")}
                        </p>
                        <p className="big-text">
                          {balance.PAYMENT_COUNT} AED
                        </p>
                        {/* <td>
                          {moment(balance.WITHDRAW_DATE).format("DD MMM YYYY")}
                        </td> */}
                      </tr>
                    ))
                  ) : (
                    <p>No Transactions This Year</p>
                  )}
                </div>
                <div className="wallet-chart-content">
                  <p></p>
                  {balanceHistory.length > 0 ? (
                    balanceHistory.map((balance, i) => (
                      <tr key={i}>
                        <p>
                          Month {moment(balance.WITHDRAW_DATE).format("MMMM")}
                        </p>
                        <p className="big-text">
                          {balance.PAYMENT_COUNT} AED
                        </p>
                      </tr>
                    ))
                  ) : (
                    <p>No Transactions This Year</p>
                  )}
                </div>
              </div>

              <div className="wallet-content">
                <div className="wallet-chart-title d-flex wallet-flex">
                  <h4>Income Details</h4>
                  <div className="wallet-sort">
                    <p>Latest</p>
                    <Icon>sort</Icon>
                  </div>
                </div>
                <div className="wallet-filter-table">
                  <Row>
                    <Col lg="6" className="d-flex justify-content-center">
                      <div
                        className="d-flex align-items-center search"
                        id="wallet-search"
                      >
                        <Icon>search</Icon>
                        <input placeholder="Search" className="form-control" />
                      </div>
                    </Col>
                    <Col lg="6" className="d-flex justify-content-center">
                      <div className="d-flex align-items-center mt-3 mt-lg-0 flex-wrap">
                        <div className="date-filter-input ml-3">
                          <DatePicker
                            className="date-input"
                            selected={date.from}
                            // onChange={(e, { value }) =>
                            //   setDate({ ...date, from: value })
                            // }
                            placeholderText="From"
                          />
                          <img
                            src={arrowDate}
                            alt="date"
                            className="mr-2 date-arrow"
                          />
                        </div>

                        <div className="date-filter-input ml-3">
                          <DatePicker
                            className="date-input"
                            selected={date.to}
                            // onChange={(e, { value }) =>
                            //   setDate({ ...date, to: value })
                            // }
                            placeholderText="To"
                          />
                          <img
                            src={arrowDate}
                            alt="date"
                            className="mr-2 date-arrow"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="wallet-table-responsive">
                    <DataGrid
                     id={Math.random()}
                      rows={walletTableData}
                      columns={columns}
                      pageSize={0}
                    />
                    {/* <MuiDataTable
                      data={walletTableData}
                      columns={columnsTest}
                      options={optionsTest}
                      title={"WalletTable"}
                    /> */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(Wallet);
