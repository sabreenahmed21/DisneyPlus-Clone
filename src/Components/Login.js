import React from "react";
import LogoOne from "../images/cta-logo-one.svg";
import LogoTwo from "../images/cta-logo-two.png";
import Img_Back from '../images/login-background.jpg'
import { Link } from "react-router-dom";
import '../StyledComponents/Login.css';

function Login() {
  return (
    <>
      <section className="section_login-page">
        <div className="content_login-page">
          <img src={Img_Back} className="img_back" alt="img"/>
          <div className="box">
            <img src={LogoOne} className="img_logo" alt="img"/>
            <Link to="/" className='link_login'>Get All </Link>
            <p className="text_login-page">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
            <img src={LogoTwo}  className="img_logo" alt="img"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;