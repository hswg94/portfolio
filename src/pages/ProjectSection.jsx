import Fullscreen from "../components/layout/Fullscreen";
import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

const ProjectSection = () => {
  return (
    <Fullscreen backgroundColor="#14532d" isdarkbackground="true" id="project-section">
      <Center mb="10vh">
        <Heading as="h1">
          Featured Projects
        </Heading>
      </Center>
      <Center>
        <SimpleGrid minChildWidth="300px" spacing="10" maxW="100%">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.image}
              url={project.url}
            />
          ))}
        </SimpleGrid>
      </Center>
    </Fullscreen>
  );
};

export default ProjectSection;
