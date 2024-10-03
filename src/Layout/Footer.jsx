import React from "react";
import { Link, useLocation } from "react-router-dom";
import black_mob from "../Assets/images/black_mob.svg";
import brochure_mob from "../Assets/images/brochure_mob.svg";
import facebook from "../Assets/images/facebook.svg";
import linkedin from "../Assets/images/linkedin.svg";
import twitter from "../Assets/images/twitter.svg";
import youtube from "../Assets/images/youtube.svg";
import pintrest from "../Assets/images/pintrest.svg";
import instagram from "../Assets/images/instagram.svg";
import footer_btn from "../Assets/images/footer_btn.png";
import logo2 from "../Assets/images/logo2.png";
import scrolltotop from "../Assets/images/scrolltotop.svg";

const Footer = () => {
  const location = useLocation();
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <footer className={`${location.pathname == '/otp' && 'footer_bg'}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 foot_left">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-sm-12 col-xs-12 col-12 foot_list1">
                  <ul>
                    <li>About us</li>
                    <li>Signup</li>
                    <li>Login</li>
                    <li>How it works</li>
                    <li className=" sm-hide">Purchase subscriptions</li>
                    <li className=" sm-hide">Testimonial</li>
                    <li className=" sm-hide">Faq</li>
                    <li className=" sm-hide">Contact us</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 col-12 foot_list1 foot_list2 sm-show">
                  <ul>
                    <li>Purchase subscriptions</li>
                    <li>Testimonial</li>
                    <li>Faq</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-12  foot_address">
                  <h4>Address:</h4>
                  <p>Simply caption text show here, kitty official address will be show here</p>
                  <h4 className="my-3">Call : <span>+91 9876543210  /  +91 9876543210</span></h4>
                  <h4>Email : <span>info-kitty123@gmail.com</span></h4>
                </div>
                <div className="col-lg-5 col-sm-12 col-xs-12 col-12  foot_brochure">
                  <div className="brochure position-relative">
                    <h2>Download Our App</h2>
                    <div className="bro_text d-flex">
                      <img src={black_mob} className="img-fluid" />
                      <p>Take our app anywhere you go with our exclusive 
                      apps for Android and IOS devices</p>
                    </div>     
                    <img src={footer_btn} className="img-fluid brochur_btn" />               
                    <img src={brochure_mob} className="img-fluid brochure_mob" />
                  </div>
                </div>
              </div>
              <div className="footer_border"></div>
              <div className="row">
              {/* <div className="col-12 d-flex  justify-content-between"> */}
                <div className="col-lg-8 col-md-12 col-sm-12 fb-left d-flex">
                <img src={logo2} className="img-fluid" /> 
                <ul>
                  <li>© Copyright 2023 kitty.com  &nbsp; |</li>
                  <li>All Rights Reserved</li>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                </ul>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 fb-right">
                <h4>Connect on Social</h4>
                <ul>
                  <li><img src={facebook} className="img-fluid" /></li>
                  <li><img src={linkedin} className="img-fluid" /></li>
                  <li><img src={twitter} className="img-fluid" /></li>
                  <li><img src={youtube} className="img-fluid" /></li>
                  <li className="pintrest"><img src={pintrest} className="img-fluid" /></li>
                  <li><img src={instagram} className="img-fluid" /></li>
                </ul>
                </div>
              {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-1 foot_right position-relative">
          <Link to="javascript:;" onClick={handleClick}><img src={scrolltotop} className="img-fluid" /> </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
