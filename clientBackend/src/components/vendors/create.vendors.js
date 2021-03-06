import React, { Component,Fragment } from 'react';
import Tabset_admin from '../users/tabset-admin';
import Breadcrumb from '../common/breadcrumb';

export class Create_vendors extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Create Vendor" parent="Vendors" />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5> Add Vendor</h5>
                            </div>
                            <div className="card-body">
                                <Tabset_admin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Create_vendors
