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
      <Grid mx="auto" templateColumns="repeat(12, 1fr)" width="960px" maxW="80vw" py="15vh" id={props.id} gap={6}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default Fullscreen;
