import React from 'react';
import '../styles/styles_footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Bussiness</h4>
            <a href='/#'>
              <p>Employer</p>
            </a>
            <a href='/#'>
              <p>Health Plan</p>
            </a>
            <a href='/#'>
              <p>Individual</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='/#'>
              <p>Resource Center</p>
            </a>
            <a href='/#'>
              <p>Testimonials</p>
            </a>
            <a href='/#'>
              <p>STV</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/#'>
              <p>About Us</p>
            </a>
            <a href='/#'>
              <p>Press</p>
            </a>
            <a href='/#'>
              <p> Career</p>
            </a>
            <a href='/#'>
              <p>Contact</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming soon on</h4>
            <div className='socialmedia'>
              <p><img src='../img/footer/facebook.png' alt=" " /> </p>
              <p><img src='../img/footer/twitter.png' alt=" " /> </p>
              <p><img src='../img/footer/linkedin.png' alt=" " /> </p>
              <p><img src='../img/footer/instagram.jpeg' alt=" " /> </p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/#'>
              <p>Terms & Conditions </p>
            </a>
            <a href='/#'>
              <p>Privacy</p>
            </a>
            <a href='/#'>
              <p>Security</p>
            </a>
            <a href='/#'>
              <p>Cookie Declaration</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;