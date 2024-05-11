import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../data/projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Embarking on various projects has allowed me to showcase my skills
              and deliver tangible results. Here's a glimpse into my project
              portfolio!
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="0">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                {projectsData.map(({ title }, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content id="slideInUp">
                {projectsData.map((project, projectIndex) => (
                  <Tab.Pane key={projectIndex} eventKey={projectIndex}>
                    <Row>
                      {project.images.map((image, imageIndex) => (
                        <ProjectCard key={imageIndex} imgUrl={image} />
                      ))}
                    </Row>
                    <a href={project.url} className="mt-5 d-flex justify-content-center text-decoration-none">
                      <Button variant="dark" className="p-3 align-items-center">
                          View Project&nbsp; <FaExternalLinkAlt/>
                      </Button>
                    </a>
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
