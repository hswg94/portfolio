/* eslint-disable react/prop-types */
import { Box, Grid } from "@chakra-ui/react";

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
      <Grid
        alignItems="center"
        py={48}
        mx="auto"
        templateColumns="repeat(12, 1fr)"
        width="1280px"
        maxW="90vw"
        id={props.id}
        gap={6}
      >
        {props.children}
      </Grid>
    </Box>
  );
};

export default Fullscreen;
