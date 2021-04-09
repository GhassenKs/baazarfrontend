import React , {useState,useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';
//-------------------------------
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from '../../../util/hooks';
import { withApollo } from '../../../helpers/apollo/apollo';
import { onError } from "@apollo/client/link/error";
import { useRouter } from 'next/router';
import {AuthContext} from '../../../context/auth';
//-------------------------------

function Register() {

    //---------------------
    const context = useContext(AuthContext)
    const [user,setUser] = useState(sessionStorage.getItem('username'))

    const router = useRouter()
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(registerUser, {
      firstName: '',
      lastName:'',
      email: '',
      password: ''
      
    });
  
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
      update(_, {data:{register:userData}}) {
        console.log(userData);
        context.login(userData)
        router.push('../../');
        
        
      },
      onError(err) {
        setErrors(err.graphQLErrors);
          console.log("there is an error");
      },
      variables: values
    });
  
    function registerUser() {
      addUser();
    }
    //--------------------------

    const reg = user ? (
    
      router.push('/')
    ) : (
    <CommonLayout parent="home" title="register">
    <section className="register-page section-b-space">
        <Container>
            <Row>
                <Col lg="6">
                    <h3>create account</h3>
                    <div className="theme-card">
                        <Form onSubmit={onSubmit} noValidate className="theme-form">
                            <Row>
                                <Col md="12">
                                    <Label for="email">First Name</Label>
                                    <Input type="text" className="form-control" id="fname" label="Username"
  placeholder="firstName.."
  name="firstName"
  type="text"
  value={values.firstName}
  error={errors}
  onChange={onChange}
                                        required="" />
                                </Col>
                                <Col md="12">
                                    <Label for="review">Last Name</Label>
                                    <Input type="text" label="lastName"
  placeholder="lastName.."
  name="lastName"
  type="text"
  value={values.lastName}
  error={errors}
  onChange={onChange} className="form-control" id="lname" placeholder="Last Name"
                                        required="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Label for="email">email</Label>
                                    <Input type="text" 
  
  name="email"
  type="email"
  value={values.email}
  error={errors}
  onChange={onChange} className="form-control" id="email" placeholder="Email" required="" />
                                </Col>
                                <Col md="12">
                                    <Label for="review">Password</Label>
                                    <Input type="password" label="Password"
  
  name="password"
  
  value={values.password}
  error={errors}
  onChange={onChange} className="form-control" id="review"
                                        placeholder="Enter your password" required="" />
                                <button type="submit" className="form-control" >
  Register
</button>

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
return(reg)
}
const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName:String!
    $email: String!
    $password: String!
    
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        
      }
    ) {
      id
      firstName
      lastName
      email
      password
      token
      

    }
  }
`;

export default withApollo(Register)