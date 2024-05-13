import { Container, Col, Row, Nav } from "react-bootstrap";
import socialsData from "../../data/socialsData";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="d-flex gap-3">
              {socialsData.map(({ icon: Icon, url }, index) => (
                <Nav.Link key={index} href={url} target="_blank" rel="noreferrer">
                  <Icon size={24} />
                </Nav.Link>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
