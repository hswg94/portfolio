import { Container, Row, Col, Card, Image } from "react-bootstrap";
import certsData from "../data/certsData";

const CertsSection = () => {
  return (
    <section className="project">
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
              <Row xs={1} md={3} className="g-3">
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