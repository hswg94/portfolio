/* eslint-disable react/prop-types */
import { Heading, Image } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardFooter,
  Link,
  Icon,
  Text
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa"

const CertCard = ({ title, date, image, url }) => {
  return (
    <Card
      background="whiteAlpha.800"
      borderRadius="3xl"
      align="center"
    >
      <CardHeader mt={2} align="center">
        <Heading size="md">{title}</Heading>
        <Text>{date}</Text>
      </CardHeader>
      <Image src={image}/>
      <CardFooter>
        <Link fontWeight='semibold' fontSize="xl" href={url} isExternal>
          View Certificate <Icon boxSize={4} as={FaExternalLinkAlt} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CertCard;
