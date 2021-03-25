import React, {useContext,useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AuthContext} from '../../../context/auth';
import jwtDecode from 'jwt-decode';

const TopBarDark = ({ topClass, fluid }) => {
    const {user,logout}=useContext(AuthContext);
    const router = useRouter();
    //-----------------------

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
      

    //--------------------------
    
    
    const menuBar = initialState.user ?(
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Bazaar.tn</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: +(216) 52 588 8220</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">
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
                                        <a href="page/account/dashboard">Profile</a>
                                    </li>
                                    <li onClick={logout}>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
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
                                <li>Welcome to Bazaar.tn</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
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