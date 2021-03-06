import React, { Component,Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb';
import data from '../../../assets/data/physical_list';
import image from '../../../assets/images/fashion/pro/06.jpg'
import { Edit, Trash2 } from 'react-feather'
import axios from 'axios';


export class Product_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.getAllProducts()
        console.log(typeof this.state.data)
    }
    getAllProducts = ()=>{
        axios.get('http://localhost:4000/products/productsv2').then((response)=>{
            console.log("data was retrieved successfully ")
            const data = response.data.result;
            const myData = [...data]
            
            this.setState({data:myData})
            console.log(myData)
   

          
            
           

        }).catch((Error)=>{
            console.log(Error)
            console.log("error fetching data ")
            
        })
    } 
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Product List" parent="Physical" />
                <div className="container-fluid">
                    <div className="row products-admin ratio_asos">
                        {
                            this.state.data.map((myData, i) => {
                               
                                return (
                                    <div className="col-xl-3 col-sm-6" key={i}>
                                        <div className="card">
                                            <div className="products-admin">
                                                <div className="card-body product-box">
                                                    <div className="img-wrapper">
                                                        <div className="lable-block">
                                                            {(myData.tag === 'new' )?<span className="lable3">{myData.tag}</span> : ''}
                                                            {(myData.discount === 'on sale' )?<span className="lable4">{myData.discount}</span> : '' }
                                                            </div>
                                                        <div className="front">
                                                            <a className="bg-size"><img className="img-fluid blur-up bg-img lazyloaded" src={image} /></a>
                                                            <div className="product-hover">
                                                                <ul>
                                                                    
                                                                    <li>
                                                                        <button className="btn" type="button">
                                                                            <Trash2 className="deleteBtn" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-detail">
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a> <h6 >{myData.title}</h6></a>
                                                        <h4 >{myData.price} <del >{myData.discount_price}</del></h4>
                                                        <ul className="color-variant">
                                                            <li className="bg-light0"></li>
                                                            <li className="bg-light1"></li>
                                                            <li className="bg-light2"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product_list
