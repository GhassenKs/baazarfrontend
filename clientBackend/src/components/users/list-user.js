import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listUser';
import DatatableUsers from '../common/datatableUsers';
import axios from 'axios';

  
export class List_user extends Component {
    state={
        users:[]
        
    }
    
    componentDidUpdate= ()=>{
         this.getAllAdmins()
        
    }
    
    getAllAdmins = ()=>{
        axios.get('http://localhost:4000/admin/admins').then((response)=>{
            console.log("data was retrieved successfully ")
            const data = response.data.result;
            const myData = [...data]
            
             this.setState({users:myData})
            console.log(this.state.users)

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error fetching data ")
            
        })
    }
    render() {
        
        console.log(this.state.users)
        return (
            <Fragment>
                <Breadcrumb title="User List" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>User Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="btn-popup pull-right">
                                <Link to="/users/create-user" className="btn btn-secondary">Create User</Link>
                            </div>
                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <DatatableUsers
                                    multiSelectOption={false}
                                    myData={data}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default List_user
