import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/orders';
import DatatableOrders from '../common/datatableOrders'
import axios from 'axios';

export class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            myData: [],
            ordersTotal:0
        }
    }
    componentDidMount(){
        this.getAllAdmins()
        console.log(this.props.myData)
    }
    getAllAdmins = ()=>{
        axios.get('http://localhost:4000/products/orders').then((response)=>{
            console.log("data was retrieved successfully ")
            const data = response.data.result; 
            var result = data.toString().split(',');
            const myData = [...data]
            console.log(myData[0].user.email)
            //console.log(data[0].placedItems[0].title  )
            //lezz go 
            var employees = {
                accounting: [],
                length:"122"
            };
            var sum=0 
            for(var i in myData) {    
                
                var file = myData[i];    
                for(var j in myData[i].items){
                    employees.accounting.push({ 
                        "id":file?._id,
                        "product" : file?.items[j]?.title,
                        "status":file?.status,
                        "price" : file?.items[j]?.price,
                        "user":file?.user?.firstName,
                        "phone":file?.user?.phone,
                        "city":file?.user?.city,
                        "date":file?.date
                        
                    });
                    sum+=file?.items[j]?.price
                }
                
            }
            this.setState({ordersTotal:sum  })
           
            
            
            
        
        }).catch((Error)=>{
            console.log(Error)
            console.log("error fetching data ")
            
        })
    }
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Orders" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Order</h5>
                                </div>
                                <div className="card-body order-datatable">
                                <DatatableOrders
                                            multiSelectOption={false}
                                            myData={data}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />
                                </div>
                                <div>
                                    <h5>the total of today is {this.state.ordersTotal} $</h5>
                                    <h5> </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Orders
