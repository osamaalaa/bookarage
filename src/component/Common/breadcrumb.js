import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//import C3Chart from 'react-c3js';
import "c3/c3.css";
import {
  _getAllUsersCount,
  _getCountOfCars,
} from "../../services/adminRequests";
import AuthService from "../../services/auth.service";
class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",

      countUsers: "",
      countCars: "",
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      //  (user.accessToken)
      this.setState({
        token: user.accessToken,
      });

      _getAllUsersCount().then((res) => {
        if (res.success === true) {
          this.setState({ countUsers: res.result[0].COUNT });
        }
      });
      _getCountOfCars().then((res) => {
        if (res.success === true) {
          this.setState({ countCars: res.result[0].COUNT });
        }
      });
    }
  }
  render() {
    /*const data = {
            columns: [
                ['Cars', 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
            ],
            type: 'bar',
            labels: false,
            colors:{Cars: "#28bbe3"}
        };

        const data1 = {
            columns: [
                ['Users', 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
            ],
            type: 'bar',
            labels: false,
            colors:{Users: "#7a6fbe"}
        };

        const legend = {
            show: false
        };

        const axis = {
            y: {
              show: false
            },
            x: {
              show: false
            }
          };

        const bar = {
            width: 5
            // or
            //width: 100 // this makes bar width 100px
        };

        const size = {
            height: 32,
            width : 101
        };

        const padding = {
            top:-10,
            bottom: -10
        };*/

    const itemLength = this.props.breadcrumbItems.length;

    return (
      <React.Fragment>
        <Row>
          <Col sm="6">
            <div className="page-title-box">
              <h4>{this.props.title}</h4>
              <ol className="breadcrumb m-0">
                {this.props.breadcrumbItems.map((item, key) =>
                  key + 1 === itemLength ? (
                    <li key={key} className="breadcrumb-item active">
                      {item.title}
                    </li>
                  ) : (
                    <li key={key} className="breadcrumb-item">
                      <Link to="#">{item.title}</Link>
                    </li>
                  )
                )}
              </ol>
            </div>
          </Col>
          {/* <Col sm="6">
                            <div className="state-information d-none d-sm-block">
                                <div className={this.props.layoutType === "horizontal" ? "state-graph float-right" : "state-graph"}>
                                    
                                <C3Chart data={data1} legend={legend} axis={axis} bar={bar} size={size} padding={padding} />
                                    
                                    <div className="info">Users {this.state.countUsers}</div>
                                </div>
                                <div className="state-graph">
                                <C3Chart data={data} legend={legend} axis={axis} bar={bar} size={size} padding={padding} />
                                    <div className="info">Cars {this.state.countCars}</div>
                                </div>
                            </div>
                        </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const Layout = state.Layout;
  const BreadcrumbData = state.Breadcrumb;
  return {
    layoutType: Layout.layoutType,
    title: BreadcrumbData.title,
    breadcrumbItems: BreadcrumbData.breadcrumbItems,
  };
};

export default connect(mapStatetoProps, {})(Breadcrumb);
