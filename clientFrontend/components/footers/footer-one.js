import React, { useEffect } from 'react';
import Link from 'next/link'
import { SlideUpDown } from "../../services/script"
import LogoImage from "../headers/common/logo"
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import CopyRight from './common/copyright';

const FooterOne = ({ fluid, logoName ,layoutClass ,footerClass }) => {

    useEffect(() => {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }, [])

    return (
        <footer className={`footer-light ${footerClass}`}>
            <div className="light-layout upper-footer">
                <Container fluid={fluid}>
                    <section className="small-section border-section border-top-0">
                        <Row>
                            <Col lg="6">
                                <div className="subscribe">
                                    <div>
                                        <h4>KNOW IT ALL FIRST!</h4>
                                        <p>Never miss anything from Bazaar by signing up to our Newsletter. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <Form className="form-inline subscribe-form">
                                    <FormGroup className="mx-sm-3">
                                        <Input type="text" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter your email" />
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-solid">subscribe</Button>
                                </Form>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
            <section className="section-b-space light-layout">
                <Container  fluid={fluid}>
                    <Row className="footer-theme partition-f">
                        <Col lg="4" md="6">
                            <div className="footer-title footer-mobile-title">
                                <h4>about</h4>
                            </div>
                            <div className="footer-contant">
                                <div className="footer-logo">
                                    <LogoImage logo={logoName} />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank">  <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com" target="_blank"> <i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li>
                                       
                                        <li>
                                            <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className="offset-xl-1">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>my account</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li>
                                            <Link href={`/page/account/dashboard`} >
                                                <a>Profile</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/shop/left_sidebar`} ><a>Orders</a></Link>
                                        </li>
                                    
                                        <li>
                                            <Link href={`/shop/left_sidebar`} ><a>Wishlist</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>Our company</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul className="contact-list">
                                        <li><i className="fa fa-map-marker"></i>Immeuble le montplaisir -
                                         A64, Avenue Kheireddine Pacha, Tunis 1067
                                            </li>
                                        <li><i className="fa fa-phone"></i>Call: 00 216 52 588 822</li>
                                        <li><i className="fa fa-envelope-o"></i>Email: <a
                                            href="#">contact@onepack.tech</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            
        </footer>
    )
}


export default FooterOne;