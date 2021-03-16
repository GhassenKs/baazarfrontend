import React,{useState} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col} from 'reactstrap';
import { toast } from 'react-toastify';
import Axios from 'axios';


const Login = () => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: false,
      url: "http://localhost:4001/login",
    }).then((res) => console.log(res));
  };

  
    
    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container className="login-box">
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="mail"  onChange={e => setLoginUsername(e.target.value)} placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" className="form-control" id="pass" onChange={e => setLoginPassword(e.target.value)} 
                                            placeholder="Enter your password" required="" />
                                    </div><a href="#" onClick={login} className="btn btn-solid">Login</a>
                                </Form>
                                <hr></hr>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create an Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                            able to order from our shop. To start shopping click register.</p>
                            <a href="#"
                                    className="btn btn-solid">Create an Account</a>
                            </div>
                            </div>
                        </Col>
                        
                        
                    </Row>
                    
                    
                </Container>
                
            </section>
        </CommonLayout>
    )
}

export default Login;