import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaFacebookF, FaSquareFull, FaTwitter } from "react-icons/fa";
import "../../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer py-4">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="footer__logo d-flex align-items-center gap-2">
              <p className="text-white">All Rights Reserved @</p>
              <p className="logo mb-0">
                WATCH<sup>+</sup>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="social d-flex align-items-center gap-3 justify-content-end">
              <span>
                {" "}
                <FaFacebookF className="icon"/>{" "}
              </span>
              <span>
                {" "}
                <FaTwitter className="icon"/>
              </span>
            </div>
          </Col>
        </Row>

        <div className="terms d-flex align-items-center gap-3 justify-content-center mt-2 text-white">
          <Link className="nav-link footer-link mb-0">Privacy</Link> 
          <span><FaSquareFull /></span>
          <Link className="nav-link footer-link mb-0">Terms of service</Link>
          <span><FaSquareFull /></span>
          <Link className="nav-link footer-link mb-0">DMCA</Link>
          </div> 
      </Container>
    </footer>
  );
}

export default Footer;
