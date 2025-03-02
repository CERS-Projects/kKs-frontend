import { Flex, Icon } from "@chakra-ui/react";
import { PiBookBookmarkFill } from "react-icons/pi";

export const Top = () => {
  return (
    <Flex id="top" h="100vh" w="100%">
      <Flex
        id="left"
        h="100%"
        w="30%"
        borderRightWidth="1px"
        hideBelow="sm"
        justifyContent="flex-end"
      >
        <Icon fontSize="50px" margin="10%">
          <PiBookBookmarkFill />
        </Icon>
      </Flex>
      <Flex id="center" h="100%" w="100%">
        bbb
      </Flex>
      <Flex
        id="right"
        h="100%"
        w={{ base: "40%", md: "45%" }}
        borderLeftWidth="1px"
      >
        ccc
      </Flex>
    </Flex>
  );
};
