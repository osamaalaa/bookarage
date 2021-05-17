import React, { Component } from "react"
import { Col, Row, Card, CardBody } from "reactstrap"

import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import BarApexChart from "../AllCharts/apex/barchart"
import AreaChart from "../AllCharts/apex/areachart"
import DonutChart from "../AllCharts/apex/dountchart"
import StackedBarChart from "../AllCharts/apex/stackedbarchart"

class ChartsAppex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Lexa", link: "#" },
        { title: "Charts", link: "#" },
        { title: "Appex Chart", link: "#" },
      ],
    }
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Appex Chart", this.state.breadcrumbItems)
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Line Chart</h4>

                <Row className="text-center mt-4">
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">25610</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">56210</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">12485</h5>
                    <p className="text-muted">Deactivated</p>
                  </Col>
                </Row>

                <div dir="ltr">
                  <LineApexChart />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6" className="pl-0">
            <Card>
              <CardBody>
                <div className="w-100">
                  <span className="revenues">Total Revenues</span>
                  <h4 className="card-title mb-4">Bar Chart</h4>
                </div>

                <Row className="text-center mt-4">
                  <Col sm="6">
                    <h5 className="mb-0 font-size-20">6,95,412</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="6">
                    <h5 className="mb-0 font-size-20">1,63,542</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                </Row>

                <div dir="ltr">
                  <BarApexChart />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Area Chart</h4>

                <Row className="text-center mt-4">
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">86541</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">2541</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">102030</h5>
                    <p className="text-muted">Deactivated</p>
                  </Col>
                </Row>

                <div dir="ltr">
                  <AreaChart />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Donut Chart</h4>

                <Row className="text-center mt-4">
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">3201</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">85120</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">65214</h5>
                    <p className="text-muted">Deactivated</p>
                  </Col>
                </Row>

                <div dir="ltr">
                  <DonutChart />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Stacked bar Chart</h4>

                <Row className="text-center mt-4">
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">86541</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">2541</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">102030</h5>
                    <p className="text-muted">Deactivated</p>
                  </Col>
                </Row>

                <div dir="ltr">
                  <StackedBarChart />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default connect(null, { setBreadcrumbItems })(ChartsAppex)
