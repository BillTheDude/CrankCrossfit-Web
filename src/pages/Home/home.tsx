import React from "react";
import "./home.css";


function Home() {
    return (
        <div className="home">
             {/* 
            ------------START OF HEADER SECTION--------------
            */}

            <header className="nav-header" style={{height: "100px", fontSize: "18px",alignContent:"center"}}>
          
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={ {minHeight: "10%", height: "100%"}}>
                        <div className="container-fluid">

                            <a className="navbar-brand" href="/home">
                                <img src="" alt="gym logo"width="130" height="130"/>
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
                                    <a className="nav-link active" aria-current="page" href="/aboutus">About Us</a>
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

            <div className="first-section">
                <h2 style={{fontSize: "52px",fontStyle:"bolder", justifyContent:"center"}}>CRANK IT UP!</h2>
                <p style={{fontSize:"24px"}}>Kendall's most fittest crossfit</p>

                {/* button */}
                <button className="btn-submit bg-danger text-white rounded-pill border border-light" style={{fontSize: "20px", padding:"6px 18px", display:"flex",justifyContent:"center"}}>
                    Start Now</button>
                
            </div>

            <div className="section second-section ">
                <div id="content-second-section">
                    <h2 style={{fontSize: "52px", fontStyle:"bolder", justifyContent:"center",textTransform:"uppercase"}}>Crossfit for all levels</h2>
                    <p style={{fontSize:"22"}}>Whether you’re a beginner at Crossfit or you’re experienced in it, Crossfit has no boundaries for anyone who wants to stay fit and live a healthy life.</p>
                </div>       
                <img src={require('../../images/group-pic1.jpg')} alt="group-pic-1" />
        
            </div>

            <div className="wrapper-section">
                <div className="wrapper-content">
                    <div className="box1">Live a healthy life
                        <p>
                            Nutrition is as important as exercise.
                            Our coaches ensure to give the neccesary
                            nutritional help that will lead to a 
                            healthier lifestyle.
                        </p>
                        <img src={require('../../images/miguel-portrait.jpg')} alt="" />
                       
                    </div>
                    <div className="box2">Bootcamp Saturdays</div>
                </div>
            </div>


            <div className="section third-section">
                <img src={require('../../images/gym1.jpeg')} alt="more than a just img"/>
                <div id="content-third-section">
                    <h2 style={{fontSize: "52px", fontStyle:"bolder",justifyContent:"center",textTransform: "uppercase"}}>More than just a gym</h2>
                    <p style={{fontSize:"22"}}>For over 10 years, we ensure to make our gym a second home to everyone. Essential guidance from our professional coaches to accomplish their fitness goals.</p>
                </div>
            </div>

            <div className="section fourth-section">
                <div id="content-fourth-section">
                    <h2 style={{fontSize: "52px", fontStyle:"bolder",justifyContent:"center",textTransform: "uppercase"}}>First Workout For Free</h2>
                    <p style={{fontSize:"22"}}>Want to try out our gym or want to learn more about crossfit with us? We got you. Your first class is completely FREE. Come to the gym and let the coaches know!</p>
                </div>

            </div>
            

            {/* 
            ------------START OF FOOTER SECTION--------------
            */}
            <section className="footer-section">
                <footer className="bg-dark text-white text-center text-md-start ">
                
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