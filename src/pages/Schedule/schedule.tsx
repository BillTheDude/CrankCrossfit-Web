import React from "react";
import "../../global.css";
import "../../pages/Schedule/schedule.css"

import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,  faFacebookF} from '@fortawesome/free-brands-svg-icons';


function Schedule() {
    return (
        <div className="schedule">
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

        {/* START OF FIRST SECTION */}
        <section className="section schedule-first-section ready-to-change">
            <div className="ready-to-change-content">
                <h2 style={{fontSize: "48px",fontWeight:"700", justifyContent:"center", color: "white", textTransform:"uppercase"}}>Ready to make the change?</h2>
                <p>Schedule your first class now. First class completely free!</p>
            </div>
                <div className="button-div">
                    <button className="btn-submit text-white rounded-pill border" style={{fontSize: "20px", backgroundColor: "#ff4b40"}}>
                            Schedule
                    </button>
                </div>
        </section>
        {/* END OF FIRST SECTION */}

        {/* START OF SECOND SECTION - WRAPPER SECTION WITH CLASS HOURS*/}
        <section className="section schedule-second-section class-hours">
            <h2 style={{fontWeight:"700" ,textTransform:"uppercase"}}>Classes</h2>
            <p style={{fontWeight: "400"}}>(Mon-Fri)</p>
            <div className="class-hours-wrapper">
                <div className="morning-class">
                    <h3 style={{fontWeight:"700" ,textTransform:"uppercase"}}>Morning Classes</h3>
                    <p>5:00am - 6:00am</p>
                    <p>6:00am - 7:00am</p>
                    <p>7:00am - 8:00am</p>
                    <p>8:00am - 9:00am</p>
                </div>
                <div className="evening-class">
                    <h3 style={{fontWeight:"700" ,textTransform:"uppercase"}}>Evening Classes</h3>
                    <p>4:00pm - 5:00pm</p>
                    <p>5:00pm - 6:00pm</p>
                    <p>6:00pm - 7:00pm</p>
                    <p>7:00pm - 8:00pm</p>
                </div>
            </div>
        </section>
        {/* END OF SECOND SECTION */}

        {/* START OF THIRD SECTION*/}
        <section className="section schedule-third-section bootcamp-saturday">
            <div className="bootcamp-content">
                <h2 style={{fontSize: "48px",fontWeight: "700",textTransform:"uppercase"}}>BootCamp Saturdays</h2>
                <p>This saturday classes focusses on a more intense mobility and cardio workout. You are welcome to join every Saturday at 10am.</p>
            </div>
            <img src={require('../../images/sat-group-pic2-desktop.png')} alt="" />
        </section>
        {/* END OF THIRD SECTION */}

        {/* START OF FOURTH SECTION*/}
        <section className="schedule-fourth-section early-sat-class">
            <div className="sat-class-content">
                <h2 style={{fontSize: "48px",fontWeight: "700",textTransform:"uppercase"}}>Technique Session</h2>
                <p>It’s all about the technique. This session mainly focuses on practicing and help building a strong core technique movements that leads better performance. Join us every Saturday at 8:30am.</p>
            </div>
            <img src={require('../../images/group-technique.png')}/>
        </section>
        
        {/* END OF FOURTH SECTION */}

        {/* START OF FORM SECTION*/}
        <section className="gym-form-section">
            <div className="subhead">
                <h2>Have Questions?</h2>
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
                                <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
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
                                    <ul className="page.links list-unstyled mb-0">
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


export default Schedule