import {
  Container,
  Carousel,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import certsData from "../data/certsData";
const CertsSection = () => {
  return (
    <section className="project">
      <Container>
        <Row>
          <Col size={12}>
            <h1>Certificates</h1>
            <p>
            These certifications represent my dedication to staying current in the ever-evolving landscape of technology and my passion for acquiring new skills.
            </p>
            <div className="d-flex justify-content-center">
            <Carousel className="w-75 d-flex" interval={1000}>
                {certsData.map((cert, index) => (
                    <Carousel.Item key={index}>
                        <a href={cert.url} target="_blank" rel="noreferrer">
                          <Image src={cert.image}/>
                        </a>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CertsSection;
