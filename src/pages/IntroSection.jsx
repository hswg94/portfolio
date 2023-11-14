import {
  Avatar,
  Heading,
  VStack,
  Card,
  CardHeader,
  SimpleGrid,
  CardBody,
  Text,
  Divider,
  Icon,
  HStack,
  Center,
  Box,
} from "@chakra-ui/react";

import Fullscreen from "../components/layout/Fullscreen";
import introData from "../data/introData";

const greeting = "Hi, I am William!";
const bio = "A Web Developer specialised in React";
const intro = "I built this website with React and styled it using Chakra UI.";

const IntroSection = () => (
  <Fullscreen
    id="intro-section"
    backgroundImageUrl='url("./images/background/intro.png")'
    isDarkBackground
  >
    <Box bg="blackAlpha.600" maxW="90%" mx="auto" p={4} mb="10vh" rounded="3xl">
      <VStack
        fontWeight="semibold"
        textShadow="0px 2px #000000"
        textAlign="center"
      >
        {/* <Avatar src="" /> */}
        <Heading as="h1" size="2xl">
          {greeting}
        </Heading>
        <Text>{bio}</Text>
        <Text mt={2} as="em">
          {intro}
        </Text>
      </VStack>
    </Box>

    <Center>
      <SimpleGrid minChildWidth="250px" spacing="10" maxW="90%">
        {introData.map(({ title, icon, tech }) => (
          <Card
            background="blackAlpha.600"
            align="center"
            key={title}
            borderRadius="3xl"
            width="350px"
            maxWidth="80vw"
            color="whiteAlpha.900"
          >
            <CardHeader my={2}>
              <HStack spacing={5} key={name}>
                <Heading size="lg">{title}</Heading>
                <Icon boxSize={7} as={icon} />
              </HStack>
            </CardHeader>
            <Divider borderRadius="xl" borderWidth="3px" width="80%" />
            <CardBody>
              {tech.map(({ name, icon }) => (
                <HStack spacing={4} key={name}>
                  <Icon boxSize={6} as={icon} />
                  <Text fontSize="xl">{name}</Text>
                </HStack>
              ))}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Center>
  </Fullscreen>
);

export default IntroSection;