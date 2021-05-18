import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const initialState = {email:'',password:'',firstName:'',lastName:'',role:''}
const Tabset_admin=()=>{
    const [formData,setFormData] = useState(initialState)
    useEffect(() => {
        console.log("i was mounted ");
    }, [])
    const handleChange = (e) =>{
        setFormData({ ...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) =>{
        e.preventDefault()

        
        console.log(formData.email)
        addAdmin()
    };

   const  addAdmin = ()=>{
        axios.post('http://localhost:4000/admin/addAdmin',{
             email: formData.email,
             firstName:formData.firstName,
             lastName:formData.lastName,
             role:formData.role,
             pass:formData.password
            
            }).then((response)=>{
            console.log("data was sent successfully ")
            toast.success("successfully added employee");
            
   

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error sending data ")
            toast.error("bad server request");
            
        })
    }

    return (

        <Fragment>
            <ToastContainer />
            <Tabs>
                <TabList className="nav nav-tabs tab-coupon" >
                    <Tab className="nav-link">Account</Tab>
                   
                </TabList>
                <TabPanel>
                    <form className="needs-validation user-add" noValidate="" onSubmit={handleSubmit}>
                        <h4>Account Details</h4>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> First Name</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom0" onChange={handleChange} name="firstName" type="text" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Last Name</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom1" onChange={handleChange} name="lastName" type="text" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Email</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom2" onChange={handleChange} name="email" type="text" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Password</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom3" onChange={handleChange} name="password" type="password" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Role </label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom4" onChange={handleChange} name="role" type="text" required="" />
                        </div>
                        <div className="pull-right">
                          <button type="button" type="submit"  className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </TabPanel> 
               
            </Tabs>
            
        </Fragment>
    )
   
};

    
       



export default Tabset_admin
