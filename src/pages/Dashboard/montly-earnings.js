import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class MonthlyEarnings extends Component {
    render() {
        const data = {
            columns: [
                ["Download Sales",12],
                ["In-Store Sales",30],
                ["Mail Order Sales",20]
            ],
            type:"donut",
          };

        const donut = {
              title:"Sales",
              width:30,
              label:{show:!1}
        };

        const color = {
            pattern:["#f0f1f4","#F2421B","#244066"]
        };

        const size = {
            height: 300,
            width : 207.25
        };
        return (
            <React.Fragment>
                            <Card>
                                <CardBody>
                                <h4 className="card-title mb-4">Monthly Earnings</h4>
                                    <Row className="text-center mt-4">
                                        <Col xs="6">
                                            <h5 className="font-size-20">$56241</h5>
                                            <p className="text-muted">Marketplace</p>
                                        </Col>
                                        <Col xs="6">
                                            <h5 className="font-size-20">$23651</h5>
                                            <p className="text-muted">Total Income</p>
                                        </Col>
                                    </Row>
                                    <C3Chart data={data} donut={donut} color={color} size={size}/>
                                    
                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default MonthlyEarnings;
