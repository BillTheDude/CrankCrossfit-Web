import React from "react";


function Home() {
    return (
        <div className="Home">
             {/* 
            ------------START OF HEADER SECTION--------------
            */}

            <header className="nav-header" style={{height: "150px", fontSize: "20px",alignContent:"center"}}>
          
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={ {minHeight: "10%", height: "100%"}}>
                        <div className="container-fluid">

                            <a className="navbar-brand" href="#">
                                <img src="/images/Logo/crankcrossfit-logo.jpg" alt="gym logo"width="130" height="130"/>
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
                                    <a className="nav-link" href="#">Get Started</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </nav>
            </header>
            
            {/* 
            ------------END OF HEADER SECTION--------------
            */}

            <div className="first-section" style={{justifyContent:"center"}}>
                <h2 style={{fontSize: "52px",fontStyle:"bolder"}}>CRANK IT UP!</h2>
                <p style={{fontSize:"24px"}}>Kendall's most fittest crossfit</p>

                {/* button */}
                <button className="btn-submit bg-danger text-white rounded-pill border border-light" style={{fontSize: "24px", padding:"12px 18px"}}>
                    Start Now</button>
                
            </div>

            <div className="second-section">
                
            </div>
            

            {/* 
            ------------START OF FOOTER SECTION--------------
            */}
            <section className="">
                <footer className="bg-dark text-white text-center text-md-start fixed-bottom">
                
                    <div className="container p-4">
            
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer Content</h5>

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
                                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
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