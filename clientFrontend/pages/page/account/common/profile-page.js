import React from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import jwtDecode from 'jwt-decode';
import Page404 from '../../../404'
import { Redirect } from 'react-router-dom';



const ProfilePage = () => {

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
      const profile = initialState.user ? 
    ( 
        <>
        
            <section className="contact-page register-page">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>PERSONAL DETAIL</h3>
                            <Form className="theme-form">
                                <Row>
                                    <Col md="6">
                                        <Label for="name">Prenom</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Nom</Label>
                                        <Input type="text" className="form-control" id="last-name" placeholder="Email" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">Numero de telephone</Label>
                                        <Input type="text" className="form-control" id="review" placeholder="Enter your number"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </Col>
                                   
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-page register-page section-b-space">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>Addresse de livraison</h3>
                            <Form className="theme-form">
                                <Row>
                                    
                                    <Col md="6">
                                        <Label for="name">Addresse *</Label>
                                        <Input type="text" className="form-control" id="address-two" placeholder="Address"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Code postale *</Label>
                                        <Input type="text" className="form-control" id="zip-code" placeholder="zip-code"
                                            required="" />
                                    </Col>
                                    
                                    <Col md="6">
                                        <Label for="review">Ville *</Label>
                                        <Input type="text" className="form-control" id="city" placeholder="City" required="" />
                                    </Col>
                                    
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit">enregistrer</button>
                                    </div>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
            ) : 
            (
                <Page404 />
            )

            return(profile)
}

export default ProfilePage;