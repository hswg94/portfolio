import { Fragment } from "react";
import {
  Divider,
  GridItem,
  Heading,
  Icon,
  Text,
  Card,
  CardHeader,
  CardBody,
  HStack,
} from "@chakra-ui/react";

import introData from "../data/skillsData";
import Fullscreen from "../components/layout/Fullscreen";

const SkillsSection = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const { isOpen, onToggle } = useDisclosure();

  // useEffect(() => {
  //   if (isInView) {
  //     const toggleTimer = setTimeout(() => {
  //       onToggle();
  //     }, 400);
  //     return () => clearTimeout(toggleTimer);
  //   }
  // }, [isInView]);

  return (
    <Fullscreen
      id="skills-section"
      backgroundImageUrl='url("./images/background/intro.png")'
      isDarkBackground
    >
      <GridItem colSpan={12} /*ref={ref}*/>
        {/* <ScaleFade
          in={isOpen}
          initialScale={0.5}
          transition={{
            enter: { duration: 0.5 },
          }}
        > */}
          <Heading
            textShadow="0px 3px #000000"
            bg="blackAlpha.600"
            mb="5vh"
            p={4}
            rounded="xl"
            as="h1"
            align="center"
          >
            Skillset
          </Heading>
        {/* </ScaleFade> */}
      </GridItem>

      {introData.map(({ title, icon, tech }) => (
        <Fragment key={title}>
          <GridItem colSpan={{ base: 12, md: 6, lg: 4 }}>
            {/* <Collapse
              in={isOpen}
              transition={{
                enter: { delay: 0.5 + (0.25 * index), duration: 1 },
              }}
            > */}
              <Card
                background="blackAlpha.600"
                align="center"
                borderRadius="3xl"
                color="whiteAlpha.900"
                height={{ base: "auto", md: "350px" }}
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
            {/* </Collapse> */}
          </GridItem>
        </Fragment>
      ))}
    </Fullscreen>
  );
};

export default SkillsSection;
