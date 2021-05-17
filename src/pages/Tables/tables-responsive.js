import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

class ResponsiveTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Tables", link : "#" },
                { title : "Responsive Table", link : "#" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Responsive Table", this.state.breadcrumbItems);
    }

    render() {
        const columns = [
            {
                dataField: 'id',
                text: 'Sr. No'
            },
            {
                dataField: 'company',
                text: 'Company'
            }, {
                dataField: 'trade',
                text: 'Last Trade'
            }, {
                dataField: 'time',
                text: 'Trade Time'
            }, {
                dataField: 'change',
                text: 'Change'
            }, {
                dataField: 'close',
                text: 'Prev Close'
            }, {
                dataField: 'Open',
                text: 'Open'
            }, {
                dataField: 'Bid',
                text: 'Bid'
            }, {
                dataField: 'Ask',
                text: 'Ask'
            }, {
                dataField: 'target',
                text: '1y Target Est'
            }
        ];

        //Id should be unique
        const data = [
            { id: 1, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 2, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 3, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 4, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 5, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 6, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 7, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 8, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
            { id: 9, company: "GOOG Google Inc.", trade: 597.74, time: "12:12PM", change: "14.81 (2.54%)", close:582.93, Open:597.95, Bid:"597.73 x 100", Ask:"597.91 x 300", target:731.10 },
        ];
          
        const CustomToggleList = ({
            columns,
            onColumnToggle,
            toggles
          }) => (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              {
                columns
                  .map(column => ({
                    ...column,
                    toggle: toggles[column.dataField]
                  }))
                  .map(column => (
                    <button
                      type="button"
                      key={ column.dataField }
                      className={ `btn btn-secondary ${column.toggle ? 'active' : ''}` }
                      data-toggle="button"
                      aria-pressed={ column.toggle ? 'true' : 'false' }
                      onClick={ () => onColumnToggle(column.dataField) }
                    >
                      { column.text }
                    </button>
                  ))
              }
            </div>
          );

        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Example</h4>
                                    <p className="card-title-desc">This is an experimental awesome solution for responsive tables with complex data.</p>

                                    <div className="table-rep-plugin">
                                        <div className="table-responsive mb-0" data-pattern="priority-columns">
                                        <ToolkitProvider
                                        keyField="id"
                                        data={ data }
                                        columns={ columns }
                                        columnToggle
                                        >
                                        {
                                            props => (
                                            <div>
                                                <CustomToggleList { ...props.columnToggleProps } />
                                                <hr />
                                                <BootstrapTable
                                                striped
                                                { ...props.baseProps }
                                                />
                                            </div>
                                            )
                                        }
                                        </ToolkitProvider>
                                        </div>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}


export default connect(null, { setBreadcrumbItems })(ResponsiveTables);