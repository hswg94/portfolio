import Fullscreen from "../components/layout/Fullscreen";
import { SimpleGrid, Center, Heading, Box } from "@chakra-ui/react";
import certData from "../data/certData";
import CertCard from "../components/CertCard";

const CertSection = () => {
  return (
    <Fullscreen
      id="cert-section"
      backgroundImageUrl='url("./images/background/certs.png")'
      isDarkBackground
    >
      <Center mb="10vh">
        <Heading
          textShadow="0px 3px #000000"
          align="center"
          bg="blackAlpha.600"
          width="90%"
          p={4}
          rounded="3xl"
          as="h1"
        >
          Featured Certificates
        </Heading>
      </Center>
      <Center>
        <SimpleGrid minChildWidth="250px" spacing="20" maxW="90%">
          {certData.map((cert) => (
            <CertCard
              key={cert.title}
              title={cert.title}
              date={cert.date}
              image={cert.image}
              url={cert.url}
            />
          ))}
        </SimpleGrid>
      </Center>
    </Fullscreen>
  );
};

export default CertSection;
