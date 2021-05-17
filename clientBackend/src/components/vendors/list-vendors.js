import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listVendor';
import DatatableAdmins from '../common/datatableAdmins'

export class List_vendors extends Component {
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
                                pageSize={10}
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
