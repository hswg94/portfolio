/* eslint-disable react/prop-types */
import { Container, Box } from "@chakra-ui/react";

const Fullscreen = (props) => {
  return (
    <Box
      minHeight="100vh"
      backgroundColor={props.backgroundColor}
      color={props.isDarkBackground ? "white" : "black"}
      bgImage={props.backgroundImageUrl}
      bgSize="cover"
      bgPosition="center"
    >
      <Container py="15vh" maxW="1280px">
        {props.children}
      </Container>
    </Box>
  );
};

export default Fullscreen;