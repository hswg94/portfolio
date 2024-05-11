import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/icons/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import socialsData from "../data/socialsData";

const ContactsSection = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility
              once={true}>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <h2 className="my-3">Get In Touch</h2>
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
