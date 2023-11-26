import {
  Heading,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Icon,
  HStack,
  Box,
  GridItem,
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
    <GridItem colSpan={12}>
      <Box bg="blackAlpha.600" p={10} mb="5vh" rounded="xl" align="center">
        <VStack fontWeight="semibold" textShadow="0px 2px #000000">
          {/* <Avatar src="" /> */}
          <Heading as="h1" size="2xl">{greeting}</Heading>
          <Text>{bio}</Text>
          <Text mt={2} as="em">{intro}</Text>
        </VStack>
      </Box>
    </GridItem>

    {introData.map(({ title, icon, tech }) => (
      <>
        <GridItem colSpan={{ base: 12, md: 6, lg: 4}}>
          <Card
            key={title}
            background="blackAlpha.600"
            align="center"
            borderRadius="3xl"
            color="whiteAlpha.900"
            height={{base: "auto", md: "350px"}}
          >
            <CardHeader my={2}>
              <HStack spacing={5}>
                <Heading size="lg">{title}</Heading>
                <Icon boxSize={7} as={icon} />
              </HStack>
            </CardHeader>
            <Divider borderRadius="xl" borderWidth="3px" />
            <CardBody>
              {tech.map(({ name, icon }) => (
                <HStack spacing={4} key={name}>
                  <Icon boxSize={6} as={icon} />
                  <Text fontSize="xl">{name}</Text>
                </HStack>
              ))}
            </CardBody>
          </Card>
        </GridItem>
      </>
    ))}
  </Fullscreen>
);

export default IntroSection;
