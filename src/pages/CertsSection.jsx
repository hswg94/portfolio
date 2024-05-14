import { Container, Row, Col, Card } from "react-bootstrap";
import certsData from "../data/certsData";
const colorRight = './images/background/colorRight.webp';

const CertsSection = () => {
  return (
    <section className="cert" id="cert">
      <img className="z-n1 background-image-right2" src={colorRight}></img>
      <Container>
        <Row>
          <Col size={12}>
            <h1>Certificates</h1>
            <p>
              These certifications represent my dedication to staying current in
              the ever-evolving landscape of technology and my passion for
              acquiring new skills.
            </p>
            <div className="d-flex justify-content-center">
              <Row xs={1} md={3} className="g-4">
                {certsData.map(({ title, date, image, url }, index) => (
                  <Col key={index}>
                    <a
                      href={url}
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card href={url}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{date}</Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CertsSection;