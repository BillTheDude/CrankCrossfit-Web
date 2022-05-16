import React, { Component, createElement, createRef } from "react";
import "../../global.css";
import "../../pages/Contact/contact.css"
// import { useRef } from "react";

import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,  faFacebookF} from '@fortawesome/free-brands-svg-icons';

document.title = "CrankCrossfit | Contact"

function onClickHandle() {
     window.alert('Button Clicked!!!')
     console.log('Button clicked:)')
 }

function onClickSubmitHandle() {
    console.log('form submitted. Button clicked')
    window.alert('Form Submitted. Thank you!')
}
export default function ContactUs() {


        return (
            <div className="contactUs">
            {/* 
            ------------START OF HEADER SECTION--------------
            */}
    
            <header className="nav-header" style={{height: "125px", fontSize: "18px",alignContent:"center"}}>
            
                <nav className="navbar navbar-expand-lg navbar-dark " style={ {minHeight: "10%", height: "100%", backgroundColor:"#090B0B"}}>
                        <div className="container-fluid">
    
                            <a className="navbar-brand" href="/">
                                <img src={require('../../images/Logo/crankcrossfit-logo.jpg')} alt="gym logo"width="115" height="115"/>
                            </a>
    
                            <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <i className="fas fa-bars"></i>
                            </button>
    
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/aboutus">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/schedule">Schedule</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/getStarted">Get Started</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </nav>
            </header>
            
            {/* 
            ------------END OF HEADER SECTION--------------
            */}
    
            {/* START OF FIRST SECTION*/}
            {/* TODO: TAKE A PICTURE HORIZONTALLY OF THE WHOLE GYM. OR CLOSEUP TO ONE OF THE BOXES*/}
            <section className="contactUs-first-section ready-apply">
                <div className="register-now-content">
                    <h2 style={{fontSize: "42px",fontWeight: "700",textTransform:"uppercase"}}>Ready to make your first step?</h2>
                    <p>First class completely free!</p>
                </div>
                <div className="contactUs-button-div">
                            <button id="btnScrollForm" onClick={onClickHandle} className="btn-submit text-white rounded-pill border" style={{fontSize: "20px", padding:"6px 18px", display:"flex",justifyContent:"center", backgroundColor: "#ff4b40"}}>
                                Schedule
                            </button>
                </div>
            </section>
            {/* END OF FIRST SECTION */}
    
            {/* START OF SECOND SECTION*/}
            <section className="contactUs-second-section follow-us">
                <div className="follow-us-content">
                    <h2 style={{fontSize: "42px",fontWeight: "700",textTransform:"uppercase"}}>Follow us</h2>
                    <p>Follow us on social media and tag us <a href="https://www.instagram.com/therealcrankcrossfit/?hl=en" id="insta-gym-link"  target={'_blank'} style={{color: "white"}}>@therealcrankcrossfit</a></p>
                </div>
                <img src={require('../../images/crankcrossfit-insta-iphone-screenshot-lightMode.png')} alt="crank-ig-page-iphone-screenshot" />
            </section>
            
            {/* END OF SECOND SECTION */}
    
           {/* START OF FORM SECTION*/}
           <section className="gym-form-section">
                <div className="subhead">
                    <h2 style={{fontSize:"42px"}}>Have Questions?</h2>
                </div>
                <form>
                                <div className="row">
                                    <div className="form-group required col-md-6">
                                            <label htmlFor="inputFirstName">First Name</label>
                                            <input type="email" id="inputFirstName" className="form-control" />
                                    </div>
                                    <div className="form-group required col-md-6">
                                            <label htmlFor="inputLastName">Last Name</label>
                                            <input type="email" id="inputLastName" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPhone">Your Phone Number</label>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"id="inputPhone" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                         <label htmlFor="inputEmail">Your Email</label>
                                        <input type="text" id="inputEmail"className="form-control"/>
                                    </div>
                                </div>
                             
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="inputMessage">Your Message</label>
                                        <textarea className="form-control" cols={25} rows={5} placeholder="Enter your message..."></textarea>
                                </div>
                                  
                                </div>
                                <div className="button-div">
                                    <button type="submit" onClick={onClickSubmitHandle} className="btn btn-primary rounded-pill">Submit</button>
                                </div>
                    </form>
            </section>
            {/* END OF FOURTH SECTION */}
            {/* 
            ------------START OF FOOTER SECTION--------------
            */}
            <section className="footer-section">
                        <footer className="text-white text-center text-md-start " style={{backgroundColor:"#090B0B"}}>
                        
                            <div className="container p-4">
                    
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">our location</h5>
    
                                        <p>
                                        12117 SW 114th Pl, Miami, FL 33176
                                        </p>
                                        <p>
                                            Gym Phone Number
                                        </p>
                                    </div>
                            
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase">Links</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="/aboutUs" className="text-white">About Us</a>
                                            </li>
    
                                            <li>
                                                <a href="/schedule" className="text-white">Schedule</a>
                                            </li>
    
                                            <li>
                                                <a href="/getStarted" className="text-white">Get Started</a>
                                            </li>
                                            
                                            <li>
                                                <a href="/contact" className="text-white">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase mb-0">FOLLOW US</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="btn btn-outline-light btn-floating m-2" href="#!" target={'_blank'} role="button"
                                                >
                                                    <FontAwesomeIcon icon={faFacebookF}/>
                                                </a>           
                                            </li>
    
                                            <li>
                                                <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/therealcrankcrossfit/?hl=en" target={'_blank'} role="button"
                                                >
                                                    <FontAwesomeIcon icon={faInstagram}/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    
                            
                            <div className="text-center p-3">
                                Copyright 2022&copy; CrankCrossfit. All rights reserved.
                                <a className="text-white" href="https://mdbootstrap.com/"></a>
                            </div>
                        
                        </footer>
             </section>
            {/* 
            ------------END OF FOOTER SECTION--------------
            */}
        </div>
        );
    }

