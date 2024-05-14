import { Container, Row, Col } from "react-bootstrap";
const contactImg ='./images/contact-img.svg';
import "animate.css";
import TrackVisibility from "react-on-screen";
import socialsData from "../data/socialsData";

const ContactsSection = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col sm={12} md={6}>
            <h2 className="mt-5 mb-2 mt-md-0">Get In Touch</h2>
            <div className="d-flex gap-4">
              {socialsData.map(({icon: Icon, url}, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <Icon size={50} color="white"/>
              </a>
            ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactsSection;
