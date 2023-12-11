import Fullscreen from "../components/layout/Fullscreen";
import { Heading, GridItem } from "@chakra-ui/react";
import certData from "../data/certsData";
import CertCard from "../components/Cards/CertCard";
import { Fragment } from "react";

const CertsSection = () => {
  return (
    <Fullscreen
      id="certs-section"
      backgroundImageUrl='url("./images/background/certs.png")'
      isDarkBackground
    >
      <GridItem colSpan={12}>
        <Heading
          textShadow="0px 3px #000000"
          bg="blackAlpha.600"
          mb="5vh"
          p={4}
          rounded="xl"
          as="h1"
          align="center"
        >
          Featured Certificates
        </Heading>
      </GridItem>

      {certData.map((cert) => (
        <Fragment key={cert.title}>
          <GridItem colSpan={{ base: 12, md: 6, lg: 4 }}>
            <CertCard
              key={cert.title}
              title={cert.title}
              date={cert.date}
              image={cert.image}
              url={cert.url}
            />
          </GridItem>
        </Fragment>
      ))}
    </Fullscreen>
  );
};

export default CertsSection;
