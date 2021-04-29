import React, {useContext,useState, useEffect} from 'react';
import { Container, Row, Col, Form, Input, Button, FormGroup  } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AuthContext} from '../../../context/auth';
import jwtDecode from 'jwt-decode';
import LogoImage from './logo'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import FilterContext from '../../../helpers/filter/FilterContext'
import ReactSearchBox from 'react-search-box'




const GET_PRODUCTS = gql`
    query  products($text:String!,$indexFrom:Int! ,$limit:Int!) {
        products (text:$text,indexFrom:$indexFrom ,limit:$limit){
            items {
                _id
                id
                title
                description
                type
                brand
                category 
                price
                new
                stock
                sale
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`; 
const TopBarDark = ({logoName, topClass, fluid }) => {
    
    const {logout}=useContext(AuthContext);
    const router = useRouter();
    const searchcontext = useContext(FilterContext)
    const setSelectedSearch = searchcontext.setSelectedSearch;
    const selectedSearch = searchcontext.selectedSearch;


    //-----------------------user verification

    const initialState = {
        user: null
      };
      if (localStorage.getItem('jwtToken')) {
        const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
      
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('jwtToken');
        } else {
          initialState.user = decodedToken;
        }
      }
      

      var { loading, data } =  useQuery(GET_PRODUCTS, {
        variables: {
            text: selectedSearch,
            indexFrom: 0,
            limit: 10
        }
    });

    console.log(selectedSearch)
    console.log(data)

    const updateSearch = (search) => {
        setSelectedSearch(search)
    }

    const showlist = () => {
        document.getElementById("liste-group").style.display = 'block';
    }

    
    const menuBar = initialState.user ?(
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="2">
                        <div className="header-contact">
                            <ul>
                            
									<li><LogoImage logo={logoName} /></li>	
									
                                
                            </ul>
                        </div>
                    </Col>
                    <Col lg="10">
                        <div className="header-contact">
                            <ul>
                            
									
                                 <li>
                                <Form className="form_search" role="textbox" >
                                 
                                 <Input id="query search-autocomplete" 
                                     placeholder="Search..."
                                     className="nav-search nav-search-field" 
                                     onChange={(e) => updateSearch(e.target.value)}
                                     onClick={showlist}
                                     aria-expanded="true" />
                                 <Button type="submit" name="nav-submit-button" className="btn-search">
                                     <i className="fa fa-search"></i>
                                     </Button>
                                     <div className="liste-group" id="liste-group">
                                     
                                        {  selectedSearch && data ?
                                        data.products.items.map((product,i) => 
                                     
                                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                            <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{product.title}</h5>
                                            
                                            </div>
                                            <p className="mb-1">{product.price}</p>
                                            
                                        </a>
                                      

                                        ): 'no'
                                        }
                                        </div>
                             </Form> 
									 
                                     </li>  

                                     <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {initialState.user.firstName}
                                    <ul className="onhover-show-div">
                                    <li>
                                    <Link href={`/page/account/dashboard`}>
                                            <a>Profile</a>
                                        </Link>
                                    </li>
                                    <li onClick={logout}>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </li>
                                
                                
                            </ul>
                            
                        </div>
                    </Col>
                    
                    {/* <Col lg="6" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {initialState.user.firstName}
                                    <ul className="onhover-show-div">
                                    <li>
                                    <Link href={`/page/account/dashboard`}>
                                            <a>Profile</a>
                                        </Link>
                                    </li>
                                    <li onClick={logout}>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col> */}
                </Row>
            </Container>
        </div>
    ) : (
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                            <li><LogoImage logo={logoName} /></li>	
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: +(216) 52 588 8220</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> wishlist</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> My Account
                                    <ul className="onhover-show-div">
                                    <li>
                                        <Link href={`/page/account/login`}>
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/page/account/register`}>
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    return (
        menuBar
    )
}


export default TopBarDark;