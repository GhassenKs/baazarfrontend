import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export class DatatableTransactions extends Component {
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
                for(var j in myData[i].placedItems){
                    employees.accounting.push({ 
                        "id":file?.placedItems[j]?._id,
                        "product" : file?.placedItems[j]?.title,
                        
                        "price" : file?.placedItems[j]?.price,
                        "user":file?.user?.firstName,
                        "phone":file?.user?.phone,
                        "city":file?.user?.city,
                        
                    });
                }
                
            }
            console.log(employees.accounting)
            console.log(myData)
            let responseInfo = JSON.stringify(employees)
 
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

export default DatatableTransactions
