import { Box, Center, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Box
      pos="absolute"
      inset="0"
      bg="bg/80"
      alignItems="center"
      justifyContent="center"
    >
      <Center h="full">
        <Spinner color="teal.500" />
      </Center>
    </Box>
  );
};
