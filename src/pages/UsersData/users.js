import React, { Component } from "react"
import { connect } from "react-redux"


import { setBreadcrumbItems } from "../../store/actions"

import AuthService from "../../services/auth.service"
import { Col, Row, Table } from "reactstrap"


import { MDBDataTable } from 'mdbreact';
import Breadcrumb from "../../component/Common/breadcrumb";
import { _getAllUsers , _getAllRoles , _getAllUsersCount } from "../../services/adminRequests";
//Import datatable css
import "./datatables.scss";
  class Users extends Component {
    constructor(props) {
      super(props)
      this.state = {
        breadcrumbItems: [
          { title: "Bookarage", link: "/" },
          { title: "Pages", link: "#" },
          { title: "Bookarage Users", link: "/users" },
        ],
        token: "",
        datatableData: [],
       countUsers: "",
       rolesDataTable: []
  
      }
    }
    componentDidMount() {
      
      this.props.setBreadcrumbItems("Bookarage Users", this.state.breadcrumbItems)
      const user = AuthService.getCurrentUser()
  
      if (user) {
        //  (user.accessToken)
        this.setState({
          token: user.accessToken,
        })
        _getAllUsers().then(res =>{
         
            if(res.success === true){
              this.setState({ datatableData: res.result })
           
            }
           
          })
          _getAllRoles().then(res =>{
         
            if(res.success === true){
              this.setState({ rolesDataTable: res.result })

            }
          })

          _getAllUsersCount().then(res =>{
         
            if(res.success === true){
              this.setState({ countUsers: res.result[0].COUNT })
         
            }
          })
      
      }
          this.setState({ Header: [
           
            {
              label: "First Name",
              field: 'firstname',
             
            }, 
            {
              label: "Last Name",
              field: 'lastname',
             
            },
            {
              label: "Country",
              field: 'country',
              
            },
            {
              label: "City",
              field: 'city',
             
            },
            {
              label: "Nationality",
              field: 'nationality',
             
            },
            {
              label: "Joined At",
              field: 'createdAt',
             
            },
            
            {
              label: "User Type",
              field: 'rolename',
             
            },
           ] });
  
  
  
          this.setState({
            totalCount: Math.ceil(this.state.datatableData.length / this.state.pageSize)
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
                Style="background-color: #325A8F ">
                <div className="text-center">
                  <h4 className="card-title" Style="margin-top: 25px;">
                   Bookarage Users
                  </h4>
                  <h1>{this.state.countUsers}</h1>
                </div>
                {/* <CardText>
                    </CardText> */}
              </div>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Type Id</th>
                      <th>Type Name</th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                 

                      {this.state.rolesDataTable.map(item => (
                                 <tr key={item} >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                 </tr> 
                                ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
          <Col lg="8">
                            <MDBDataTable
                                        responsive
                                        bordered
                                        striped
                                        hover
                                        data={data}
                                    />
      
          </Col>
       
       
        </Row>
      </React.Fragment>
    )
}
  }


export default connect(null, { setBreadcrumbItems })(Users)
