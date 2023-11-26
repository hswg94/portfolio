/* eslint-disable react/prop-types */
import { Stack, Heading, Image, Text } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

import CardModal from "./CardModal";

const ProjectCard = ({ title, desc, image, url }) => {
  return (
    <Card
      backgroundColor="whiteAlpha.800"
      borderRadius="xl"
      width="350px"
      maxWidth="80vw"
    >
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
          <CardModal url={url}/>
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
