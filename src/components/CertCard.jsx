/* eslint-disable react/prop-types */
import { Heading, Image } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Icon
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa"

const CertCard = ({ title, desc, image, url }) => {
  return (
    <Card
      maxW="75vw"
      background="whiteAlpha.800"
      align="center"
      borderRadius="15"
    >
      <CardHeader my={3}>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <Divider borderRadius="xl" borderWidth="3px" width="95%" />
      <CardBody>
        <Image src={image}/>
        {/* <Text>{description}</Text> */}
      </CardBody>

      <Divider width="95%" />
      <CardFooter>
        <Link fontSize="xl" href={url} isExternal>
          View Certificate <Icon boxSize={4} as={FaExternalLinkAlt} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CertCard;
