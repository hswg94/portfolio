import { Fragment } from "react";
import { Heading, GridItem } from "@chakra-ui/react";

import Fullscreen from "../components/layout/Fullscreen";
import ProjectCard from "../components/Cards/ProjectCard";
import projectData from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <Fullscreen
      id="projects-section"
      backgroundImageUrl='url("./images/background/projects.png")'
      isDarkBackground
    >
      <GridItem colSpan={12}>
        <Heading
          textShadow="0px 3px #000000"
          bg="blackAlpha.600"
          mb="5vh"
          p={4}
          rounded="xl"
          as="h1"
          align="center"
        >
          Featured Projects
        </Heading>
      </GridItem>

      {projectData.map((project) => (
        <Fragment key={project.title}>
          <GridItem colSpan={{ base: 12, md: 6, lg: 4 }}>
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.image}
              url={project.url}
            />
          </GridItem>
        </Fragment>
      ))}
    </Fullscreen>
  );
};

export default ProjectsSection;
