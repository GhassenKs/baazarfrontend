import React, { useContext, useState } from 'react';
import { Media, Container, Form, Row, Input, Col } from 'reactstrap';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import CartContext from '../../../../helpers/cart';
import paypal from '../../../../public/assets/images/paypal.png';
import { useForm } from 'react-hook-form';
import {useRouter} from 'next/router';
import { CurrencyContext } from '../../../../helpers/Currency/CurrencyContext';
import jwtDecode from 'jwt-decode';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';



const CheckoutPage = () => {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.state;
    const cartTotal = cartContext.cartTotal;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol
    const [obj, setObj] = useState({});
    const [payment, setPayment] = useState('stripe');
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const router = useRouter();
    //checking user

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
    
    var userID= null;
    if(initialState.user){userID=initialState.user.id}

    const [placeOrder, { data:orderPlaced }] = useMutation(PLACE_ORDER);
  
      //end of this
    const checkhandle = (value) => {
        setPayment(value)
    }

    const onSuccess = (payment) => {
        router.push({
            pathname: '/page/order-success',
            state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
        })

    }

    const onSubmit = data => {

        if (data !== '') {
            var list = []
            console.log(' %c tracing here ' + String.fromCodePoint(0x1F480), ' color: #000000;font-weight: bold;font-size:15px');
            console.log(userID)
            placeOrder({

                variables: {
                   id:userID
                  
                 }
                });
                localStorage.setItem("cartList",JSON.stringify(list))
            
            router.push({
                pathname: '/page/order-success',
                state: { items: cartItems, orderTotal: cartTotal, symbol: symbol }
            })
        } else {
            errors.showMessages();
        }
    };                                                                                                                                                                                                                                                                                                                                                          

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj)
    }


    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    const client = {
        sandbox: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
    }
    
 
    return (

        <section className="section-b-space">
            <Container>
                <div className="checkout-page">
                    <div className="checkout-form">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col lg="6" sm="12" xs="12">
                                    <div className="checkout-title">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row check-out">
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                             
                                        <div className="field-label">First Name</div>
                                            <input type="text" className={`${errors.firstName?'error_border':''}`} name="first_name" ref={register({ required: true })} />
                                            <span className="error-message">{errors.firstName && 'First name is required'}</span>
                                            
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name</div>
                                            <input type="text" className={`${errors.last_name?'error_border':''}`}  name="last_name" ref={register({ required: true })} />
                                            <span className="error-message">{errors.last_name && 'Last name is required'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Phone Number</div>
                                            <input type="text" name="phone" className={`${errors.phone?'error_border':''}`} ref={register({ pattern: /\d+/ })} />
                                            <span className="error-message">{errors.phone && 'Please enter number for phone.'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Email Address</div>
                                            <input className="form-control" className={`${errors.email?'error_border':''}`} type="text" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                                            <span className="error-message">{errors.email && 'Please enter proper email address .'}</span>
                                        </div>
                                        {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Governate</div>
                                            <select name="country" ref={register({ required: true })}>
                                                <option>Ariana</option>
                                                <option>Béja</option>
                                                <option>Sousse</option>
                                                <option>Bizerte</option>
                                                <option>Gabès</option>
                                                <option>Nabeul</option>
                                                <option>Jendouba</option>
                                                <option>Kairouan</option>
                                                <option>Zaghouan</option>
                                                <option>Kebili</option>
                                                <option>Kef</option>
                                                <option>Mahdia</option>
                                                <option>Manouba</option>
                                                <option>Medenine</option>
                                                <option>Monastir</option>
                                                <option>Gafsa</option>
                                                <option>Sfax</option>
                                                <option>Sidi Bouzid</option>
                                                <option>Siliana</option>
                                                <option>Ben Arous</option>
                                                <option>Tataouine</option>
                                                <option>Tozeur</option>
                                                <option>Tunis</option>
                                                <option>Kasserine</option>
                                                
                            
                                            </select>
                                                */}
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Address</div>
                                            <input className="form-control" className={`${errors.address?'error_border':''}`} type="text" name="address" ref={register({ required: true, min: 20, max: 120 })} placeholder="Street address" />
                                            <span className="error-message">{errors.address && 'Please right your address .'}</span>
                                        </div>
                                        
                                        
                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                            <div className="field-label">Postal Code</div>
                                            <input className="form-control" type="text" name="pincode" className={`${errors.pincode?'error_border':''}`} ref={register({ pattern: /\d+/ })} />
                                            <span className="error-message">{errors.pincode && 'Required integer'}</span>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="checkbox" name="create_account" id="account-option" />
                                                    &ensp; <label htmlFor="account-option">Create An Account?</label>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" sm="12" xs="12">
                                    {cartItems && cartItems.length > 0 ?
                                        <div className="checkout-details">
                                            <div className="order-box">
                                                <div className="title-box">
                                                    <div>Product <span>Total</span></div>
                                                </div>
                                                <ul className="qty">
                                                    {cartItems.map((item, index) =>
                                                        <li key={index}>{item.title} × {item.qty} <span>{symbol}{item.total}</span></li>
                                                    )}
                                                </ul>
                                                <ul className="sub-total">
                                                    <li>Subtotal <span className="count">{symbol}{cartTotal}</span></li>
                                                    <li>Shipping
                                                        <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="total">
                                                    <li>Total <span className="count">{symbol}{cartTotal}</span></li>
                                                </ul>
                                            </div>
                                            <div className="payment-box">
                                                <div className="upper-box">
                                                    <div className="payment-options">
                                                        <ul>
                                                            <li>
                                                                <div className="radio-option stripe">
                                                                    <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => checkhandle('stripe')} />
                                                                    <label htmlFor="payment-2">Stripe</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="radio-option paypal">
                                                                    <input type="radio" name="payment-group" id="payment-1" onClick={() => checkhandle('paypal')} />
                                                                    <label htmlFor="payment-1">PayPal<span className="image">
                                                                        <Media src={paypal} alt="" /></span></label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {(cartTotal !== 0) ?
                                                    <div className="text-right">
                                                        {(payment === 'stripe') ? <button type="submit" className="btn-solid btn" >Place Order</button> :
                                                            <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={cartTotal} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                            </div>
                                        </div>
                                        : ''}

                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    )
    
}
const PLACE_ORDER = gql`
  mutation placeOrder($id:String) {

    placeOrder(id:$id){id}
}
  
`;


export default CheckoutPage;