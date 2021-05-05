import React, {useContext,useEffect,useState} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row ,Col} from 'reactstrap';
import { useRouter } from 'next/router';
import {AuthContext} from '../../../context/auth';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { Redirect } from 'react-router-dom';
import UserContext from '../../../helpers/user/userContext'


const Dashboard = () => {
    const {user,logout}=useContext(AuthContext);
    const router = useRouter();
    const [accountInfo,setAccountInfo] = useState(false)
 
    const initialState = {
        user: null
    }
    if (localStorage.getItem('jwtToken')) {
        const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
      
          if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('jwtToken');
          } else {
            initialState.user = decodedToken;
      }
      }


   return(
        <CommonLayout parent="home" title="dashboard">
        <section className="section-b-space">
            <Container>
                <Row>
                    <Col lg="3">
                        {window.innerWidth <= 991 ?
                        <div className="account-sidebar" onClick={() => setAccountInfo(!accountInfo)}><a className="popup-btn">my account</a></div>
                        :""}
                        <div className="dashboard-left" style={accountInfo ? {left:"0px"} : {}}> 
                            <div className="collection-mobile-back" onClick={() => setAccountInfo(!accountInfo)}>
                                <span className="filter-back">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                </span>
                            </div>
                            <div className="block-content">
                                <ul>
                                    <li className="active"><a href="#">Information</a></li>
                                    <li><a href={'/page/account/order'}>Mes commandes</a></li>
                                    <li><Link href={'/page/account/wishlist'}>Liste de souhaits</Link></li>
                                    <li><Link href={'/page/account/changepwd'}>Changer mot de passe</Link></li>
                                    <li className="last"><a href="#" onClick={() => localStorage.removeItem('jwtToken')}>Deconnexion</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className="dashboard-right">
                            <div className="dashboard">
                                <div className="page-title">
                                    <h2>{initialState.user.firstName}</h2>
                                </div>
                                <div className="welcome-msg">
                                    
                                    <p>À partir de votre tableau de bord, vous avez la possibilité d'afficher un instantané de l'activité récente de votre compte et de mettre à jour les informations de votre compte.</p>
                                </div>
                                <div className="box-account box-info">
                                    <div className="box-head">
                                        <h2>Information</h2>
                                    </div>
                                    <Row>
                                        <Col sm="6">
                                            <div className="box">
                                                <div className="box-title">
                                                    <h3>Contacte</h3><Link href={'/page/account/profile'}>Modifier</Link>
                                                </div>
                                                <div className="box-content">
                                                    <h6>{initialState.user.firstName} {initialState.user.firstName}</h6>
                                                    <h6>{initialState.user.email}</h6>
                                                    <h6>{initialState.user.phone}</h6>
                                                    <h6><a href="#">Changer mot de passe</a></h6>
                                                </div>
                                            </div>
                                        </Col>
                                         <Col sm="6">
                                            <div className="box">
                                                <div className="box-title">
                                                    <h3>Addresse</h3>
                                                </div>
                                                <div className="box-content">
                                                    <p>{initialState.user.city}</p>
                                                    <p>{initialState.user.address}</p>
                                                    <p>{initialState.user.zipcode}</p>
                                                </div>
                                            </div>
                                        </Col> 
                                    </Row>
                                    <div>
                                        <div className="box">
                                            <div className="box-title">
                                                <h3>Addresse de livraison</h3>
                                            </div>
                                            <Row>
                                                <Col sm="6">
                                                    <h6>Addresse par defaut </h6>
                                                    <address>{initialState.user.address}<br /></address>
                                                </Col>
                                                <Col sm="6">
                                                    <h6>Addresse de livraison par default</h6>
                                                    <address>{initialState.user.address}<br /></address>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </CommonLayout>
    )

       
   
}


export default Dashboard