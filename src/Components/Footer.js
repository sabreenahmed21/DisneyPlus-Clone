import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../StyledComponents/Footer.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
        <div className="footer_main">
          <div className="company divv">
            <h4 className="fs-5 mb-4 fw-bold">Company</h4>
            <p>About Us</p>
            <p>Careers</p>
          </div>
          <div className="view_website divv">
            <h4 className="fs-5 mb-4 fw-bold">View Website in</h4>
            <div className="text">
            <FontAwesomeIcon icon={faCheck} />
            <p> English</p>
            </div>
          </div>
          <div className="need_help divv">
            <h4 className="fs-5 mb-4 fw-bold">Need Help?</h4>
            <p>Visit Help Center</p>
            <p>Share Feedback</p>
          </div>
          <div className="connect divv">
            <h4 className="fs-5 mb-4 fw-bold">Connect With Us</h4>
            <div>
              <FontAwesomeIcon icon={faFacebookF} className="icon"/>
              <FontAwesomeIcon icon={faXTwitter} className="icon"/>
            </div>
          </div>
        </div>
        <div className="rightcopy">
          <p class="copy">
            Copyright &copy;2023 All rights reserved | This template is made
            with ❤ by{" "}
            <Link to="https://github.com/sabreenahmed21" target="_blank">
              Sabreen Ahmed
            </Link>
          </p>
        </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
