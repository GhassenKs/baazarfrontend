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
    componentDidMount(){
        
        const userInfo =JSON.parse(localStorage.getItem("profile"))
        console.log(userInfo.result)
        
        
        if(userInfo.result.role!="super"){
            
            this.props.history.push(`${process.env.PUBLIC_URL}/dashboard`);
        }

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
