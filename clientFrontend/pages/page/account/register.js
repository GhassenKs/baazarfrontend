import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';

const Register = () => {
    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <Row>
                                        <Col md="12">
                                            <Label for="email">First Name</Label>
                                            <Input type="text" className="form-control" id="fname" placeholder="First Name"
                                                required="" />
                                        </Col>
                                        <Col md="12">
                                            <Label for="review">Last Name</Label>
                                            <Input type="password" className="form-control" id="lname" placeholder="Last Name"
                                                required="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Label for="email">email</Label>
                                            <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                        </Col>
                                        <Col md="12">
                                            <Label for="review">Password</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required="" />
                                        <a href="#" className="btn btn-solid">create Account</a>

                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register