import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export class DatatableOrders extends Component {
        constructor(props) {
            super(props)
            this.state = {
                checkedValues: [],
                myData: []
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
                accounting: []
            };
            
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
                }
                
            }
            
            
            this.setState({myData:employees.accounting  })
    

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error fetching data ")
            
        })
    }

    selectRow = (e, i) => {
        if (!e.target.checked) {
            this.setState({
                checkedValues: this.state.checkedValues.filter((item, j) => i !== item)
            });
        } else {
            this.state.checkedValues.push(i);
            this.setState({
                checkedValues: this.state.checkedValues
            })
            console.log(i)
        }
    }

    handleRemoveRow = () => {
        const selectedValues = this.state.checkedValues;
        const updatedData = this.state.myData.filter(function (el) {
            
            return selectedValues.indexOf(el.id) < 0;
        });
        this.setState({
            myData: updatedData
        })
        console.log("abay")
        toast.success("Successfully Deleted . ") 
        
        
    };

    renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ myData: data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { pageSize, myClass, multiSelectOption, pagination } = this.props;
        const { myData } = this.state

        const columns = [];
        for (var key in myData[0]) {

            let editable = this.renderEditable
            if (key === "image") {
                editable = null;
            }
            if (key === "status") {
                editable = null;
            }
            if (key === "avtar") {
                editable = null;
            }
            if (key === "vendor") {
                editable = null;
            }
            if(key === "order_status"){
                editable = null;
            }

            columns.push(
                {
                    Header: <b>{this.Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: {
                        textAlign: 'center'
                    }
                });
        }

        if (multiSelectOption == true) {
            columns.push(
                {
                    Header: <button className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
                        onClick={
                            (e) => {
                                if (window.confirm('Are you sure you wish to delete this item?'))
                                    this.handleRemoveRow()
                            }}>Delete</button>,
                    id: 'delete',
                    accessor: str => "delete",
                    sortable: false,
                    style: {
                        textAlign: 'center'
                    },
                    Cell: (row) => (
                        <div>
                            <span >
                                <input type="checkbox" name={row.original.id} defaultChecked={this.state.checkedValues.includes(row.original.id)}
                                    onChange={e => this.selectRow(e, row.original.id)} />
                            </span>
                        </div>
                    ),
                    accessor: key,
                    style: {
                        textAlign: 'center'
                    }
                }
            )
        } else {
            columns.push(
                {
                    Header: <b>Action</b>,
                    id: 'delete',
                    accessor: str => "delete",
                    Cell: (row) => (
                        <div>
                            <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?')) {
                                    let data = myData;
                                    data.splice(row.index, 1);
                                    this.setState({ myData: data });
                                    //handeling request

                                    console.log(row.original.id)
                                    axios.put('http://localhost:4000/products/orderDelete', { _id: row.original.id }).then((response)=>{
                                        console.log("data was retrieved  ")
                                    }).catch((Error)=>{
                                        console.log(Error)
                                        console.log("error fetching data ")
            
                                    })
                                }
                                toast.success("Successfully Deleted .. ")
                               

                            }}>
                                <i className="fa fa-trash" style={{ width: 35, fontSize: 20, padding: 11, color: '#e4566e' }}
                                ></i>
                            </span>

                        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}></i></span>
                    </div>
                ),
                style: {
                    textAlign: 'center'
                },
                sortable: false
            }
        )
        }

        return (
            <Fragment>
                <ReactTable
                    data={myData}
                    columns={columns}
                    defaultPageSize={pageSize}
                    className={myClass}
                    showPagination={pagination}
                />
                <ToastContainer />
            </Fragment>
        )
    }
}

export default DatatableOrders
