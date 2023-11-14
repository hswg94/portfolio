import Fullscreen from "../components/layout/Fullscreen";
import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

const ProjectSection = () => {
  return (
    <Fullscreen
      id="project-section"
      backgroundImageUrl='url("./images/background/projects.png")'
      isDarkBackground
    >
      <Center mb="10vh">
        <Heading
          textShadow="0px 3px #000000"
          align="center"
          bg="blackAlpha.600"
          width="90%"
          p={4}
          rounded="3xl"
          as="h1"
        >
          Featured Projects
        </Heading>
      </Center>
      <Center>
        <SimpleGrid minChildWidth="250px" spacing="10" maxW="90%">
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
