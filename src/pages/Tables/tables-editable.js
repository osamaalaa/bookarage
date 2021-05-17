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

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class EditableTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "Tables", link : "#" },
                { title : "Editable Table", link : "#" },
            ],
        }
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Editable Table", this.state.breadcrumbItems);
    }

    render() {
        const products = [
            { id: 1, age: 11, qty: 1, cost: 1.99 },
            { id: 2, age: 22, qty: 2, cost: 2.99 },
            { id: 3, age: 33, qty: 3, cost: 3.99 },
            { id: 4, age: 44, qty: 4, cost: 4.99 },
            { id: 5, age: 55, qty: 5, cost: 5.99 }
          ];
          
          const columns = [
            {
              dataField: "id",
              text: "ID"
            },
            {
              dataField: "age",
              text: "Age(AutoFill)"
            },
            {
              dataField: "qty",
              text: "Qty(AutoFill and Editable)"
            },
            {
              dataField: "cost",
              text: "Cost(Editable)"
            }
          ];

        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Datatable Editable</h4>

                                    <div className="table-responsive">
                                        <BootstrapTable
                                            keyField="id"
                                            data={products}
                                            columns={columns}
                                            cellEdit={cellEditFactory({ mode: "click" })}
                                        />
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>        
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(EditableTables);