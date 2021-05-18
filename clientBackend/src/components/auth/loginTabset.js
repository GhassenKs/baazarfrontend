import React, { Component, Fragment } from 'react';
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin} from '../../actions/auth';
const initialState = {email:'',password:''}

const LoginTabset = () => {
    const [activeShow,setActiveShow] = useState(true)
    const [formData,setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    
    const clickActive = (event) => {
        document.querySelector(".nav-link").classList.remove('show');
        event.target.classList.add('show');
    }
    const handleChange = (e) =>{
        setFormData({ ...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(signin(formData,history))
        console.log("successfully registered ")
    };
    return (
        <div>
            
                <Fragment>
                    <Tabs>
                        <TabList className="nav nav-tabs tab-coupon" >
                            <Tab className="nav-link" onClick={(e) => clickActive(e)}><User />Login</Tab>
                            <Tab className="nav-link" onClick={(e) => clickActive(e)}><Unlock />Register</Tab>
                        </TabList>
 
                        <TabPanel>
                            <form className="form-horizontal auth-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input required="" onChange={handleChange}  name="email" type="email" className="form-control" placeholder="Username" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="password" onChange={handleChange}  type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-terms">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="d-block">
                                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Remember Me <span className="pull-right"> <a href="#" className="btn btn-default forgot-pass p-0">lost your password</a></span>
                                                    </label>
                                    </div>
                                </div>
                                <div className="form-button">
                                    <button className="btn btn-primary" type="submit" >Login</button>
                                    
                                </div>
                                <div className="form-footer">
                                    <span>Or Login up with social platforms</span>
                                    <ul className="social">
                                        <li><a className="fa fa-facebook" href=""></a></li>
                                        <li><a className="fa fa-twitter" href=""></a></li>
                                        <li><a className="fa fa-instagram" href=""></a></li>
                                        <li><a className="fa fa-pinterest" href=""></a></li>
                                    </ul>
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <form className="form-horizontal auth-form">
                                <div className="form-group">
                                    <input required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail12" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="form-terms">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="d-block">
                                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                            I agree all statements in <span><a href="">Terms &amp; Conditions</a></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-button">
                                    <button className="btn btn-primary" type="submit" onClick={() => this.routeChange()}>Register</button>
                                </div>
                                <div className="form-footer">
                                    <span>Or Sign up with social platforms</span>
                                    <ul className="social">
                                        <li><a className="fa fa-facebook" href=""></a></li>
                                        <li><a className="fa fa-twitter" href=""></a></li>
                                        <li><a className="fa fa-instagram" href=""></a></li>
                                        <li><a className="fa fa-pinterest" href=""></a></li>
                                    </ul>
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </Fragment>
            </div>
    )
};

export default withRouter(LoginTabset)         
       


