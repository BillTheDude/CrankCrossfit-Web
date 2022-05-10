import React from "react";
import { url } from "inspector";
import "./getStarted.css";
import "../../global.css";

// Social Media Icons fontAwesome package
import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,  faFacebookF} from '@fortawesome/free-brands-svg-icons'

function GetStarted(){
    return (
        <div className="getStarted">
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


        <section className="getStartedSections ready-for-change">
        <div>
            <h2>Ready to make the change?</h2>
            <p>Schedule your first class now. First class completely free!</p>
        </div>
        </section>


        {/* START OF SECOND SECTION */}
        <section className="coachs coach-mission">
        </section>
        {/* END OF SECOND SECTION */}
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
                                            <a href="#!" className="text-white">Schedule</a>
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
                                            <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                                            >
                                                <FontAwesomeIcon icon={faFacebookF}/>
                                            </a>           
                                        </li>

                                        <li>
                                            <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/therealcrankcrossfit/?hl=en" role="button"
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

export default GetStarted;