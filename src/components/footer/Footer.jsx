import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import logo from "../../assets/png/icgc_logo-removebg.png";
import { Link } from "react-router-dom";
import { links } from "../../static";
function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col xs={12} className="firstFooterCol" md={4}>
          <Image className="footerLogo" src={logo} rounded />
          <h4>ICGC Joy Temple</h4>
          <p>
            Dan's Bar, Adjacent St.Monica School.
            <br />
            North-Kaneshie
          </p>
        </Col>
        <Col className="firstFooterCol" xs={12} md={4}>
          <ul>
            {links.map((link, index) => (
              <Link id="footerLink" key={index} to={link.navigation}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </Col>
        <Col className="firstFooterCol" xs={12} md={4}>
          <p>
            +233(0) 20412200
            <br />
            info@icgcjoytemple.com
          </p>
          <div className='socialIcons'>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
