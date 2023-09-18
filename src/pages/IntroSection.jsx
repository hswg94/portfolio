import {
  Avatar, Heading, VStack,
  Card, CardHeader, SimpleGrid,
  CardBody, Text, Divider,
  Icon, HStack, Center
} from "@chakra-ui/react";

import Fullscreen from "../components/layout/Fullscreen";
import introData from "../data/introData";

const greeting = "Hello, I am William!";
const bio = "A Web Developer specialised in React";
const intro = "I built this website with React using the Vite build tool and styled it using Chakra UI."

const IntroSection = () => (
  <Fullscreen
    isdarkbackground="true"
    backgroundColor="#2A4365"
    id="intro-section"
  >
    <VStack mb="10vh" textAlign="center"> 
      <Avatar src="" />
      <Heading as="h1" size="2xl">
        {greeting}
      </Heading>
      <Text>{bio}</Text>
      <Text as='em' color='whiteAlpha.600'>{intro}</Text>
    </VStack>

    <Center>
      <SimpleGrid minChildWidth="250px" spacing="10" maxW="90%">
        {introData.map(({ title, icon, tech }) => (
          <Card
            background="whiteAlpha.800"
            align="center"
            key={title}
            borderRadius="3xl"
            width="350px"
            maxWidth="80vw"
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
