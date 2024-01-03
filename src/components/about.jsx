import React from 'react';
import './about1.css';

import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';

const AboutPage = () => {
  return (
    <div>
    <div className='body'>
        <br></br>
        <br></br>
        <br></br>
      <h1>🌸 About PetalPharm 🌸</h1>
      <br></br>
      <br></br>
      <h3><p>Welcome to PetalPharm, your trusted destination for quality pet medications and supplies!</p>
      <p>At PetalPharm, we understand the importance of keeping your pets healthy and happy. Our mission is to provide a wide range of pharmaceutical products, supplements, and accessories tailored to the well-being of your beloved pets.</p>
      <p>With a team of experienced veterinarians and knowledgeable staff, we aim to offer personalized guidance and support to ensure that your furry companions receive the best care.</p>
      <p>Explore our catalog of products and discover the perfect solutions for your pet's needs. Thank you for choosing PetalPharm!</p>
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

export default AboutPage;
