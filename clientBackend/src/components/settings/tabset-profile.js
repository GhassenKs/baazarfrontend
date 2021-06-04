import React, { Component,Fragment } from 'react';
import { useContext, useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {User,Settings} from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const initialState = {emailU:'',roleU:'',firstNameU:'',lastNameU:''}
const  Tabset_profile =()=> { 
    const [firstName,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setemail] = useState("")
    const [role,setRole] = useState("")
    const [formData,setFormData] = useState(initialState)
   

    useEffect(() => {
        const userInfo =JSON.parse(localStorage.getItem("profile"))
        setFirstName( userInfo.result.firstName);
        setlastName( userInfo.result.lastName );
        setemail(userInfo.result.email);
        setRole(userInfo.result.role)
       
    }, [])

    const handleChange = (e) =>{
        setFormData({ ...formData,[e.target.name]:e.target.value})
        
    };
    const handleSubmit = (e) =>{
        e.preventDefault()

        
        
        updateAdmin()
    };
    const  updateAdmin = ()=>{
        const userInfo =JSON.parse(localStorage.getItem("profile"))
        axios.put('http://localhost:4000/admin/adminUpdate',{
             email: userInfo.result.email,
             firstName:formData.firstNameU,
             lastName:formData.lastNameU,
             role:"super",
             
            
            }).then((response)=>{
            console.log("data was sent successfully ")
            toast.success("successfully added employee");
            console.log(formData)
            
   

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error sending data ")
            toast.error("bad server request");
            
        })
    }
    

        return (
            <div>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link"><User className="mr-2" />Profile</Tab>
                        <Tab className="nav-link"><Settings className="mr-2" />Edit profile</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-pane fade show active">
                            <h5 className="f-w-600 f-16">Profile</h5>
                            <div className="table-responsive profile-table">
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>First Name:</td>
                                            <td>{firstName}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name:</td>
                                            <td>{lastName}</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td> {email} </td>
                                        </tr>
                                        <tr>
                                            <td>Role:</td>
                                            <td>{role} </td>
                                        </tr>
                                        
                                        
                                        <tr>
                                            <td>Location:</td>
                                            <td>Tunisia</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
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
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom0"  name="firstNameU" onChange={handleChange} type="text" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Last Name</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom1" name="lastNameU" onChange={handleChange} type="text" required="" />
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-md-4"><span>*</span> Email</label>
                            <input className="form-control col-xl-8 col-md-7" id="validationCustom2" name="emailU" onChange={handleChange} type="text" required="" />
                        </div>
                        
                        
                        <div className="pull-right">
                          <button type="button" type="submit"  className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </TabPanel> 
               
            </Tabs>
            
        </Fragment>
                    </TabPanel>
                </Tabs>
            </div>
        )
    
};

export default Tabset_profile
