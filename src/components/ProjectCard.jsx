/* eslint-disable react/prop-types */
import { Stack, Heading, Image, Text } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, desc, image, url }) => {
  return (
    <Card 
    backgroundColor="whiteAlpha.800" 
    borderRadius="xl" 
    width="350px"
    maxWidth="80vw">
      <Image src={image} height="45%" borderTopRadius="xl" />
      <CardBody>
        <Stack spacing={3}>
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>

      <Divider margin="auto" width="95%" />
      <CardFooter>
        {url ? (
          <Link fontSize="xl" href={url} isExternal>
            View Project <Icon boxSize={4} as={FaExternalLinkAlt} />
          </Link>
        ) : (
          <Text fontSize="xl" href={url} isExternal>
            To be hosted
          </Text>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
