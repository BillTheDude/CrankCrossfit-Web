import { url } from "inspector";
import React from "react";
import "./home.css";
import "../../global.css";

function Home() {
    return (
        <div className="home">
             {/* 
            ------------START OF HEADER SECTION--------------
            */}

            <header className="nav-header" style={{height: "125px", fontSize: "18px"}}>
          
                <nav className="navbar navbar-expand-lg navbar-dark  " style={ {minHeight: "10%", height: "100%", backgroundColor:"#090B0B"}}>
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
                                    <a className="nav-link" href="#">Schedule</a>
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

            {/* 
                ----------START OF FIRST SECTION----------
             */}
            <section className="first-section section">
                <div className="centered-text">    
                    <h2 style={{fontSize: "52px",fontStyle:"bolder", justifyContent:"center"}}>CRANK IT UP!</h2>
                    <p style={{fontSize:"24px"}}>Kendall's most fittest crossfit</p>
                    <div className="button-div">
                        <button className="btn-submit text-white rounded-pill border-none" style={{fontSize: "20px", padding:"6px 18px", backgroundColor: "#ff4b40"}}>
                            Start Now
                        </button>
                    </div>
                </div>  
            </section>

            {/* 
                ----------END OF FIRST SECTION----------
             */}


             {/* 
                ----------START OF  SECTION----------
             */}
            <div className="section second-section">
                <div id="content-second-section">
                    <h2 style={{fontSize: "50px", justifyContent:"center",textTransform:"uppercase"}}>Crossfit for all levels</h2>
                    <p>Whether you’re a beginner at Crossfit or you’re experienced in it, Crossfit has no boundaries for anyone who wants to stay fit and live a healthy life.</p>
                </div>       
                <img src={require('../../images/group-pic1.jpg')} alt="group-pic-1" />
        
            </div>
             {/* 
                ----------END OF SECOND SECTION----------
             */}

            {/* 
            --------------WRAPPER SECTION DISPLAYING TWO COLUMNS OF CONTENT--------------
            */}
            <section className="wrapper-section">
                <div className="wrap-media-content">
                    <div id="healthy-life">
                        <h2 className="subhead" style={{textTransform:"uppercase"}}>Live a healthy life</h2>
                        <p className="wrap-paragraph-text">
                            Nutrition is as important as exercise.
                            Our coaches ensure to give the neccesary
                            nutritional help that will lead to a 
                            healthier lifestyle.
                        </p>
                        <img className="gym-member-portrait"src={require('../../images/miguel-portrait.jpg')} alt="" />
                    </div>
                    <div id="bootcamp-saturday">
                        <h2 className="subhead" style={{textTransform:"uppercase"}}>Bootcamp Saturdays</h2>
                        <p className="wrap-paragraph-text">This is a text</p>
                    </div>
                </div>
            </section>

            {/* 
            --------------END OF WRAPPER SECTION--------------
            */}

            {/* 
            --------------START OF THIRD SECTION--------------
            */}
            <div className="section third-section">
                <img src={require('../../images/gym1.jpeg')}style={{width: "750px",margin:"0"}} alt="more than a just img"/>
                <div id="content-third-section">
                    <h2 style={{fontSize: "50px", fontStyle:"bolder",justifyContent:"center",textTransform: "uppercase"}}>More than just a gym</h2>
                    <p>For over 10 years, we ensure to make our gym a second home to everyone. Essential guidance from our professional coaches to accomplish their fitness goals.</p>
                </div>
            </div>
             {/* 
            --------------END OF FOURTH SECTION--------------
            */}


            {/* 
            --------------START OF FOURTH SECTION--------------
            */}
            <div className="section fourth-section">
                <div id="content-fourth-section">
                    <h2 style={{fontSize: "52px", fontStyle:"bolder",justifyContent:"center",textTransform: "uppercase"}}>First Workout For Free</h2>
                    <p style={{fontSize:"22"}}>Want to try out our gym or want to learn more about crossfit with us? We got you. Your first class is completely FREE. Come to the gym and let the coaches know!</p>
                </div>
                <img src={require('../../images/first_workout_free-image.jpg')} alt="" />
            </div>

             {/* 
            --------------END OF FOURTH SECTION--------------
            */}
            

            {/* 
            ------------START OF FOOTER SECTION--------------
            */}
            <section className="footer-section">
                <footer className=" text-white text-center text-md-start" style={{backgroundColor:"#090B0B"}}>
                
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
                                        <a href="#!" className="text-white">About Us</a>
                                    </li>

                                    <li>
                                        <a href="#!" className="text-white">Schedule</a>
                                    </li>

                                    <li>
                                        <a href="#!" className="text-white">Get Started</a>
                                    </li>
                                    
                                    <li>
                                        <a href="#!" className="text-white">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-0">FOLLOW US</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>           
                                    </li>

                                    <li>
                                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/therealcrankcrossfit/?hl=en" role="button"
                                        ><i className="fab fa-instagram"></i
                                        ></a>
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

export default Home;