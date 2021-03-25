import React,{useState,useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col, Toast} from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from '../../../util/hooks';
import {useRouter} from 'next/router';
import { withApollo } from '../../../helpers/apollo/apollo';
import {AuthContext} from '../../../context/auth';
import Link from 'next/link';


function Login (props)  {
    const context = useContext(AuthContext)
    const router = useRouter()
    const [errors, setErrors] = useState({});
    const [user,setUser] = useState(sessionStorage.getItem('username'))
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
      });
      const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, {data:{login:userData}}) {
            context.login(userData)
            router.push('../../');
        },
        onError(err) {
          setErrors(err.graphQLErrors);
          console.log("there is an error");
         
        },
        variables: values
      });
    
      function loginUserCallback() {
        loginUser();
      }
    
    const log = user ?
    (
        router.push('/')
    ) :
    (
      <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container className="login-box">
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form onSubmit={onSubmit} noValidate className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="mail" 
                                        name="email"
                                        type="text"
                                        value={values.email}
                                        error={errors}
                                        onChange={onChange} placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" className="form-control" id="pass" 
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        error={errors.password}
                                        onChange={onChange} 
                                            placeholder="Enter your password" required="" />
                                            <Link href={'/page/account/forget-pwd'}>Forgot password?</Link>
                                    </div>
                                    <button type="submit" className="btn btn-solid"> Login</button>
                                    
                                   
                                    
                                </Form>
            


                           
                            </div>
                        </Col>
                        <Col><div className="theme-card authentication-right">
                                <h6 className="title-font">Create an Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                            able to order from our shop. To start shopping click register.</p>
                            <a href="#"
                                    className="btn btn-solid">Create an Account</a>
                            </div>
                            </Col>
                        
                        
                    </Row>
                    
                    
                </Container>
                
            </section>
        </CommonLayout>
    )

    return(log)
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      password
      token
    }
  }
`;

export default withApollo(Login);
