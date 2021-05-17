import React, { Component } from 'react';
import { Col, Card, CardBody, Badge } from "reactstrap";

class MiniCard extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.reports.map((report, key) =>
                        <Col xl="3" md="6" key={key}>
                            <Card className="mini-stat bg-primary">
                                <CardBody className="mini-stat-img">
                                    <div className="mini-stat-icon">
                                        <i className={"mdi " + report.icon + " float-right"}></i>
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3 font-size-16">{report.title}</h6>
                                        <h2 className="mb-4">{report.value}</h2>
                                        <Badge color={report.color}> {report.result}</Badge> <span className="ml-2">{report.desc}</span>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                } 
            </React.Fragment>
        );
    }
}

export default MiniCard;