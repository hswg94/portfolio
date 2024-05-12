import { Container, Row, Col, Nav } from "react-bootstrap";
import socialsData from "../../data/socialsData";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col>
          <div className="d-flex gap-3">
            {socialsData.map(({ icon: Icon, url }, index) => (
              <Nav.Link key={index} href={url} target="_blank" rel="noreferrer">
                <Icon size={30} />
              </Nav.Link>
            ))}
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
