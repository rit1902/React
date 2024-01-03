import React from 'react';
import './contact1.css';

import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';

const ContactPage = () => {
  return (
    <div>
    <div className='body'>
        <br></br>
        <br></br>
        <br></br>
      <h1>🌸 Contact PetalPharm 🌸</h1>
      <br></br>
      <br></br>
      <h3><p>Welcome to PetalPharm! We're thrilled to connect with you. Whether you have questions about our products, need assistance, or just want to share your thoughts, we're here to help.</p>
      <br></br>
      <p><h2>Contact Information:</h2></p>
      <p>Address: [Your Physical Address]</p>
      <p>Phone: [Your Contact Number]</p>
      <p>Email: [Your Email Address]</p>
      <br></br>
      <p><h2>Customer Support:</h2></p>
      <p>Our dedicated customer support team is available to assist you with any inquiries or concerns you might have. Feel free to reach out to us via email or phone during our business hours.</p>
      <br></br>
      <p><h2>Social Media:</h2></p>
      <p>Connect with us on social media for updates, news, and more! Follow us on [list of social media platforms] to stay in the loop and engage with our community.
Get in Touch:</p>
      <p>🌸</p></h3>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>


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
                            <p><img src={fb} alt="facebook"/> </p>
                            <p><img src={twitter} alt="twitter"/> </p>
                            <p><img src={linkedin} alt="linkedin"/> </p>
                            <p><img src={insta} alt="instagram"/> </p>
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
  );
};

export default ContactPage;
