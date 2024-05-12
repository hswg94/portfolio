import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../data/projectsData";
import colorLeft from "../assets/images/colorLeft.png";

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <img className="z-n1 background-image-left" src={colorLeft}/>
      <Container>
        <Row>
          <Col size={12}>
            <h1>Projects</h1>
            <p>
              Embarking on various projects has allowed me to showcase and hone my practical skills. Take a glimpse into my project
              portfolio!
            </p>

            <Tab.Container defaultActiveKey="0">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                {projectsData.map(({ title }, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {projectsData.map((project, projectIndex) => (
                  <Tab.Pane key={projectIndex} eventKey={projectIndex}>
                    <Row>
                      <ProjectCard {...project}/>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
