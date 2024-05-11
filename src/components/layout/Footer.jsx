import { Container, Row, Col, Image } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><IoMail size={30} color="white"/></a>
              <a href="#"><IoLogoGithub size={30} color="white"/></a>
              <a href="#"><IoLogoLinkedin size={30} color="white"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;