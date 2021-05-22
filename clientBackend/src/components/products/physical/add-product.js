import React, { Component,Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import one from '../../../assets/images/pro3/1.jpg'
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
const initialState = {title:'',description:'',type:'',brand:'',collection:'',category:'',price:'',sale:'',discount:'',stock:'',new:'',tags:''}
const Add_product=()=>{ 
    const [formData,setFormData] = useState(initialState)
    useEffect(() => {
        console.log("create product component was mounted ");
    }, [])
    const handleChange = (e) =>{
        setFormData({ ...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = (e) =>{
        e.preventDefault()

        
        console.log(formData.title)
        addProduct()
    };
    const  addProduct = ()=>{
        axios.post('http://localhost:4000/products/newProduct',{
             
             title:formData.title,
             description:formData.description,
             type:formData.type,
             brand:formData.brand,
             collection:formData.collection,
             category:formData.category,
             price:formData.price,
             sale:formData.sale,
             discount:formData.discount,
             stock:formData.stock,
             new:formData.new,
             tags:formData.tags
            
            }).then((response)=>{
            console.log("data was sent successfully ")
            
            
   

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error sending data ")
           
            
        })
    }
    
    
    

    //image upload
 
   
    
        return (
            <Fragment>
                <Breadcrumb title="Add Product" parent="Physical" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Product</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row product-adding">
                                        <div className="col-xl-5">
                                            <div className="add-product">
                                                <div className="row">
                                                    <div className="col-xl-9 xl-50 col-sm-6 col-9">
                                                        <img src={one} alt="" className="img-fluid image_zoom_1 blur-up lazyloaded" />
                                                    </div>
                                                    <div className="col-xl-3 xl-50 col-sm-6 col-3">
                                                        <ul className="file-upload-product">
                                                            
                                                         </ul>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                        <div className="col-xl-7">
                                        <form className="needs-validation " noValidate="" onSubmit={handleSubmit}>
                                            
                                                <div className="form form-label-center"  >
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">Title:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="title" onChange={handleChange} id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">Description:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <textarea className="form-control col-xl-8 col-md-7" name="description"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">type:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="type"  onChange={handleChange}   id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">brand:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="brand"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">collection:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="collection"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">category:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="category"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">price:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="price"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">sale:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="sale"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">discount:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="discount"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">stock:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="stock"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">new:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="new"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3 row">
                                                        <label className="col-xl-3 col-sm-4 mb-0">tags:</label>
                                                        <div className="col-xl-8 col-sm-7">
                                                            <input className="form-control col-xl-8 col-md-7" name="tags"  onChange={handleChange}  id="validationCustom01" type="text"   />
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div className="offset-xl-3 offset-sm-4">
                                                    <button type="submit" className="btn btn-primary">Add</button>
                                                    <button type="button" className="btn btn-light">Discard</button>
                                                </div>
                                                </div>
                                               
                                                
                                            
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    
}

export default Add_product
