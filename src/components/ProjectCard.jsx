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
      borderRadius="3xl"
      height={{base: "auto", md: "500px"}}
    >
      <Image src={image} height="30%" borderTopRadius="3xl" />
      <CardBody maxHeight="50%">
        <Stack spacing={3}>
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
      <Divider mx="auto" mt="auto" width="95%" />
      <CardFooter>
        {url ? (
          <CardModal url={url}/>
        ) : (
          <Text fontSize="xl">
            To be hosted
          </Text>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
