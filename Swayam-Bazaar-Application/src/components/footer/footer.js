// Footer.js

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import "./footer.css";
import logo from "../images/Logo_.png"

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col" id='col1'>
        <img className="logo" src={logo} alt="logo" />
        <h4 id='footerh'>Contact</h4>
        <p><strong>Address:</strong> -</p>
        <p><strong>Phone:</strong> +91 9076858490</p>
        <p><strong>Hours:</strong> 9:00 am-11:00 pm Mon-Sun</p>
        <div className="follow" id="follow">
          <h4 id='footerh'>Follow us</h4>
          <div className="icon">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="col" id='about'>
        <h4 id='footerh'>About</h4>
        <a href="#">About us</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms and conditions</a>
        <a href="/contact-us">Contact us</a>
      </div>
      <div className="col" id='about'>
        <h4 id='footerm'>My account</h4>
        <a href="#">Sign in</a>
        <a href="#">My wishlist</a>
        <a href="#">Track my order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install" id='install2'>
        <h4 id='footerh'>Install app</h4>
        <p>From app store or google play</p>
        <div className="row">
          <img src="https://i.postimg.cc/4xTGQhr8/app.jpg" alt="" />
          <img src="https://i.postimg.cc/FKCspHb7/play.jpg" alt="" />
          <p>Secured payment gateway</p>
          <img src="https://i.postimg.cc/fR2NngVP/pay.png" alt="" style={{width:"200px"}}/>
        </div>
      </div>
      <div className="copyright">
        <p>@ 2023, Swayam Bazar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
