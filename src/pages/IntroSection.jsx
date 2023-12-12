import {
  Box,
  GridItem,
  Heading,
  Stack,
  Icon,
  Text,
  HStack,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";

import { SiReactos } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

import Fullscreen from "../components/layout/Fullscreen";
import ContactModal from "../components/Modals/ContactModal";

const intro =
  "I am a dedicated web developer with a focus on continuous improvement. I specialize in technologies such as ReactJS, Node.js, and Express.js.  My journey is fueled by my desire to be an exceptional web developer, which pushes me across boundaries and staying ahead in the ever-evolving tech landscape.  Currently, I'm honing my skills in the cloud. The next milestone on my journey involves mastering AWS, and I'm actively working towards achieving certification in AWS Cloud.";

const IntroSection = () => {
  return (
    <Fullscreen
      id="intro-section"
      backgroundImageUrl='url("./images/background/intro.png")'
      isDarkBackground
    >
      <GridItem colSpan={{ base: 12, md: 8, lg: 8 }}>
        <Box bg="blackAlpha.600" p={10} rounded="2xl" boxShadow="dark-lg">
          <Stack>
            <HStack>
              <motion.div
                animate={{
                  rotate: [360, 180, 0],
                }}
                transition={{
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0,
                  duration: 1,
                }}
              >
                <Icon boxSize={20} as={FaReact} color="green.300" display={{ base: "none", md: "flex" }}/>
              </motion.div>
              <Stack spacing={2}>
                <Heading size="3xl">William Gan</Heading>
                <Heading size="md" color="green.300">
                  PASSIONATE WEB DEVELOPER
                </Heading>
              </Stack>
            </HStack>
            <Divider borderWidth={2} />
            <Text fontSize="md" mt={5}>
              {intro}
            </Text>
            <HStack mt={10}>
              <ContactModal />
              <Button
                bgColor="green"
                color="white"
                as={Link}
                href="./files/Resume.pdf"
              >
                Download CV
              </Button>
            </HStack>
          </Stack>
        </Box>
      </GridItem>
      <GridItem
        colSpan={{ base: null, md: 4, lg: 4 }}
        display={{ base: "none", md: "block" }}
      >
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [0.75, 1, 0.75],
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
            duration: 5,
          }}
        >
          <Icon color="green.200" opacity={0.8} as={SiReactos} boxSize="100%" />
        </motion.div>
      </GridItem>
    </Fullscreen>
  );
};

export default IntroSection;
