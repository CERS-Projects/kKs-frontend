import { Heading } from "@chakra-ui/react";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <Heading
      position="relative"
      h="90px"
      minW="20%"
      borderBottomWidth="2px"
      display="flex"
      alignItems="center"
      bgColor="white"
      padding="10px"
      boxShadow="0 0.5px 5px rgba(0, 0, 0, 0.1)"
    >
      <Logo />
    </Heading>
  );
};
