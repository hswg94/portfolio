import Fullscreen from "../components/layout/Fullscreen";
import { SimpleGrid, Center, Heading } from "@chakra-ui/react";
import certData from "../data/certData";
import CertCard from "../components/CertCard";

const CertSection = () => {
  return (
    <Fullscreen isdarkbackground="true" backgroundColor="#025e5e" id="cert-section">
      <Center mb="10vh">
        <Heading as="h1">Featured Certificates</Heading>
      </Center>
      <Center>
        <SimpleGrid minChildWidth="300px" spacing="10" maxW="100%">
          {certData.map((cert) => (
            <CertCard
              key={cert.title}
              title={cert.title}
              desc={cert.desc}
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
