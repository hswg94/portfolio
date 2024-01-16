/* eslint-disable react/prop-types */
import { Stack, Heading, Image, Text } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

import CardModal from "../modals/CardModal";

const ProjectCard = ({ title, desc, image, url }) => {
  return (
    <Card
      backgroundColor="whiteAlpha.800"
      borderRadius="3xl"
      height={{base: "auto", md: "600px"}}
    >
      <Image backgroundColor="black" src={image} objectFit="cover" height="50%" borderTopRadius="3xl" />
      <CardBody maxHeight="40%">
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
