import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listVendor';
import DatatableAdmins from '../common/datatableAdmins'

export class List_vendors extends Component {

    componentDidMount(){
        
        const userInfo =JSON.parse(localStorage.getItem("profile"))
        console.log(userInfo.result)
        
        
        if(userInfo.result.role!="super"){
            
            this.props.history.push(`${process.env.PUBLIC_URL}/dashboard`);
        }

    }

    render() {
        return (
            <Fragment>
                <Breadcrumb title="Vendor List" parent="Vendors" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>Employees Details</h5>
                        </div>
                        <div className="card-body vendor-table coupon-list-delete">
                            <DatatableAdmins
                                multiSelectOption={false}
                                myData={data}
                                pageSize={5}
                                pagination={true}
                                class="-striped -highlight"
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default List_vendors
