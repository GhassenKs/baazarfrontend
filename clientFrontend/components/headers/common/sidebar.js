import React,{Fragment} from 'react';
import { Row, Col, Media } from 'reactstrap';
import fashion from '../../../public/assets/images/mega-menu/fashion.jpg';

const SideBar = () => {

    const closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    const handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else {
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }

    const handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else {
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    const handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else {
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }

    const handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else {
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    const handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else {
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    return (
        <Fragment>
        <div id="mySidenav" className="sidenav">
            <a href={null} className="sidebar-overlay" onClick={closeNav}>
            </a>
            <nav>
                <a href={null} onClick={closeNav}>
                    <div className="sidebar-back text-left">
                        <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                </a>
                <ul id="sub-menu" className="sidebar-menu">
                    <li>
                        <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                            clothing
                                <span className="sub-arrow"></span>
                        </a>
                        <ul className="mega-menu clothing-menu">
                            <li>
                                <Row m='0'>
                                    <Col xl="4">
                                        <div className="link-section">
                                            <h5>women's fashion</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">dresses</a>
                                                </li>
                                                <li>
                                                    <a href="#">skirts</a>
                                                </li>
                                                <li>
                                                    <a href="#">western wear</a>
                                                </li>
                                                <li>
                                                    <a href="#">ethic wear</a>
                                                </li>
                                                <li>
                                                    <a href="#">sport wear</a>
                                                </li>
                                            </ul>
                                            <h5>men's fashion</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">sports wear</a>
                                                </li>
                                                <li>
                                                    <a href="#">western wear</a>
                                                </li>
                                                <li>
                                                    <a href="#">ethic wear</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl="4">
                                        <div className="link-section">
                                            <h5>accessories</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">fashion jewellery</a>
                                                </li>
                                                <li>
                                                    <a href="#">precious jewellery</a>
                                                </li>
                                                <li>
                                                    <a href="#">caps and hats</a>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">necklaces</a>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">wrist wear</a>
                                                </li>
                                                <li>
                                                    <a href="#">ties</a>
                                                </li>
                                                <li>
                                                    <a href="#">cufflinks</a>
                                                </li>
                                                <li>
                                                    <a href="#">pockets squares</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl="4">
                                        <div className="link-section">
                                            <h5>Bags</h5>
                                            <ul>
                            <li>
                                <a href="#">shopper bags</a>
                            </li>
                            <li>
                                <a href="#">laptop bags</a>
                            </li>
                            <li>
                                <a href="#">clutches</a>
                            </li>
                            <li>
                                <a href="#" >purses</a>
                               </li> 
                            <li>
                                <a href="#">wallets</a>
                            </li>
                             </ul>
                                        </div>
                                     
                            <div className="link-section">
                                <ul>
                                    <li>  <a href=""><h5>Watches</h5> </a></li>
                                    <li><a href="#"><h5>Footwear</h5></a> </li>
                                    <li><a href="#"><h5>Kids</h5></a> </li>
                            </ul>
                            </div>
                                  
                                    </Col>
                              
                                </Row>
                            </li>
                        </ul>
                    </li>
                   
                    <li>
                        
                        <a href="#" onClick={(e) => handleSubmenu(e)}>
                            beauty & personal care
                                <span className="sub-arrow"></span>
                        </a>
                        <ul>
                            <li>
                                <a href="#">makeup</a>
                            </li>
                            <li>
                                <a href="#">skincare</a>
                            </li>
                        
                            <li>
                                <a href="#">fragrances</a>
                            </li>
                            
                            <li>
                                <a href="#">hair care</a>
                            </li>
                            <li>
                                <a href="#">tools & brushes</a>
                            </li>
                        
                            
                        </ul>
                    </li>
                    <li>
                        <a href="#" >home & decor</a>
                    </li>
                    <li>
                        <a href="#" >Electronics</a>
                    </li>
                    <li>
                        <a href="#" >Tools</a>
                    </li>
                    <li>
                        <a href="#" >Vegetables</a>
                    </li>
                    <li>
                        <a href="#" >Nursery</a>
                    </li>
                    <li>
                        <a href="#" >Pet Supplies</a>
                    </li>
                    <li>
                        <a href="#" >Fitness Equipement</a>
                    </li>
                    
                   
                </ul>
            </nav>
        </div>
        </Fragment>
    )
}


export default SideBar;