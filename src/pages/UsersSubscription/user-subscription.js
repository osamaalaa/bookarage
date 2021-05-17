import React, { Component } from "react";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
//import { MUIDataTable } from "mui-datatables"
import axios from "axios"; // axios for connect backend with frontend

import AuthService from "../../services/auth.service";

//import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Col, Row, Table } from "reactstrap";

//import { Link } from "react-router-dom"
import { MDBDataTable } from "mdbreact";
import Breadcrumb from "../../component/Common/breadcrumb";
//Import datatable css
import "./datatables.scss";
class UserSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bookarage", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Subscribtion Users", link: "/users-subscription" },
      ],
      token: "",
      datatableData: [],
      countUserSubcriper: [],
    };
  }
  componentDidMount() {
    this.props.setBreadcrumbItems(
      "Subscribtion Users",
      this.state.breadcrumbItems
    );
    const user = AuthService.getCurrentUser();

    if (user) {
      //  (user.accessToken)
      this.setState({
        token: user.accessToken,
      });
    }

    axios
      .get("http://localhost:5000/user-subscription/getAllUserSubcription")
      .then((res) => {
        this.setState({ datatableData: res.data.result });
        //  (res.data)

        //  (this.state.datatableData)
      })
      .catch(function (error) {});

    axios
      .get("http://localhost:5000/user-subscription/getCountOfUserSubscription")
      .then((res) => {
        this.setState({ countUserSubcriper: res.data.result[0].COUNT })(
          this.state.countUserSubcriper
        );
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      Header: [
        {
          label: "SUPSCRIPE ID",
          field: "SUPSCRIPE_ID",
        },
        {
          label: "SUBSCRIPE NAME",
          field: "SUBSCRIPE_NAME",
        },
        {
          label: "SUBCRIPE EMAIL",
          field: "SUBCRIPE_EMAIL",
        },
        {
          label: "PHONE NUMBER",
          field: "PHONE_NUMBER",
        },

        {
          label: "CREATED AT",
          field: "CREATED_AT",
        },

        {
          label: "ACTIVATION_NAME",
          field: "ACTIVATION_NAME",
        },
      ],
    });

    this.setState({
      totalCount: Math.ceil(
        this.state.datatableData.length / this.state.pageSize
      ),
    });
  }

  render() {
    const data = {
      columns: this.state.Header,

      rows: this.state.datatableData,
    };

    return (
      <React.Fragment>
        <Row>
          <Col lg="12">
            <br />
            <Breadcrumb />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <div
              className="card card-body text-center"
              Style="border-radius: 15px;"
            >
              <div
                class="p-3 mb-2 text-white"
                Style="background-color: #325A8F "
              >
                <div className="text-center">
                  <h4 className="card-title" Style="margin-top: 25px;">
                    Subscribtion Users
                  </h4>
                  <h1>{this.state.countUserSubcriper}</h1>
                </div>
                {/* <CardText>
                    </CardText> */}
              </div>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Activation</th>
                      <th>Subscribe Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>Osama Alaa</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Mohamed Mahmoud</td>
                      <td>0</td>
                    </tr> */}

                    {/* {this.state.datatableData.map((data) => (
                          <tr>
                          <td>Mohamed Mahmoud</td>
                          <td>{data}</td>
                        </tr> 
                        ))} */}

                    {this.state.datatableData.map((item) => (
                      <tr key={item}>
                        <td>{item.SUBSCRIPE_NAME}</td>
                        <td>{item.ACTIVATION_NAME}</td>
                        <td>{item.CREATED_AT}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
          <Col lg="8">
            <MDBDataTable responsive bordered striped hover data={data} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(UserSubscription);
