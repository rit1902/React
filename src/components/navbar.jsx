import React, { useState } from "react";
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../assets/Group 13.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';
import appointment from '../assets/appointment.jpg';
import checkup from '../assets/checkup.jpg';
import med from '../assets/med.jpg';
import persc from '../assets/persc.jpg';
import consult from '../assets/consult.jpg';
import city from '../assets/city.jpeg';
import { Link } from "react-router-dom";

const Navbar=()=>{
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="back">
            <div className="navbar-bg">
                <div className="sb__navbar">
                    <div className="sb__navbar-links">
                        <div className="sb__navbar-links_logo">
                            <a href="www.google.com">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="sb__navbar-links_container">
                            <p>
                                <a href="www.google.com">
                                   <Link to='/about'> <b>ABOUT</b></Link>
                                </a>
                            </p>
                            <p>
                                <a href="www.google.com">
                                 <Link to='/contact'> <b>CONTACT</b></Link>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="sb__navbar-button">
                        <a href="www.google.com">
                          <Link to='/login'><button type="button">sign in/sign up</button></Link>
                        </a>
                    </div>
                    <div className="sb__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                        color="#000"
                        size={27}
                        onClick={()=> setToggleMenu(false)}
                    />) : (
                        <RiMenu3Line
                        color="#000"
                        size={27}
                        onClick={()=> setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="sb__navbar-menu_container scale-up-center">
                            <div className="sb__navbar-menu_container-links">
                                <p>
                                    <a href="www.google.com">ABOUT</a>
                                </p>
                                <p>
                                    <a href="www.google.com">ORGANIZATIONS</a>
                                </p>
                                <p>
                                    <a href="www.google.com">INDIVIDUALS</a>
                                </p>
                                </div>
                            <div className="sb__navbar-menu_container-links-sign">
                                <a href="www.google.com">
                                    <button type="button">JOIN US</button>
                                </a>
                                </div> 
                                </div> 
                    )}
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            {/* body */}
            <section>
                <div className="welcome">
                    <b className="wel"><p><h2>Welcome to PetalPharm!<p>🌸</p></h2></p>
                    <h3>
                    <p>Your wellness journey begins here. Our dedicated team offers expert care, prescriptions, consultations, and wellness products tailored just for you.</p>
                    <p>Explore our range of services, backed by a commitment to your health and well-being.</p> 
                    <p>Trust us to be your partners on the path to a healthier life.</p> 
                    <p>Thank you for choosing PetalPharm for your wellness needs! 🌸</p>
                    </h3></b>
                </div>

            </section>
            <section class="items">
                <div class="item">
                    <Link to='/bookappointment'><img src={appointment}></img></Link>
                    <h4>Book appointment</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                <div  class="item">
                    <Link to='/healthcheck'><img src={checkup}></img></Link>
                    <h4>Health checkup</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                <div class="item">
                    <a href="#"><img src={med}></img></a>
                    <h4>Medicines</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                <div class="item">
                    <a href="#"> <img src={persc}></img></a>
                    <h4>your prescription</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                <div  class="item">
                    <a href="#"><img src={consult}></img></a>
                    <h4>Consult Online</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                <div class="item">
                    <a href="#"><img src={city}></img></a>
                    <h4>city's</h4>
                    {/* <button><a href="Transaction.html">Order</a></button> */}
                </div>
                
            </section>

            <section>
                <div className="thank">
                    <b className="th"><p><h2>🌸 Thank you for choosing PetalPharm! 🌸</h2></p>
                    <h3>
                    <p>Your support blossoms our commitment to delivering top-notch pharmaceutical care.</p>
                    <p>We're honored to be your go-to source for health and wellness.</p> 
                    <p>Your trust fuels our dedication to excellence.</p> 
                    <p> Let's bloom together on this journey towards better health.</p>
                    </h3></b>
                </div>
            </section>    


            {/* footer */}
            <div className="footer">
            <div className=""sb__footer section__padding>
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Buisness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>health plan</p>
                        </a>
                        <a href="/individual">
                            <p>individual</p>
                        </a>
                    </div>
                    
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>R tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/contact">
                            <p>Contact us</p>
                        </a>
                        
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>find us on</h4>
                        <div className="socialmedia">
                            <p><a href="https://www.facebook.com/"><img src={fb} alt="facebook"/></a> </p>
                            <p><a href="https://twitter.com/i/flow/login"><img src={twitter} alt="twitter"/></a> </p>
                            <p><a href="https://in.linkedin.com/"><img src={linkedin} alt="linkedin"/></a> </p>
                            <p><a href="https://www.instagram.com/"><img src={insta} alt="instagram"/></a> </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} petalpharm. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms">
                            <div>
                                <p>
                                    Terms & Conditons
                                </p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>
                                    Privacy Policy
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
 
        </div>

        </div>

        




    )
}


export default Navbar;