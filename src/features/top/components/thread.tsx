import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { TiPinOutline, TiPin } from "react-icons/ti";
import { CiChat1 } from "react-icons/ci";
import { useState } from "react";

export const Thread = () => {
  const [isPinned, setIsPinned] = useState(false);

  const handlePinClick = () => {
    setIsPinned(!isPinned);
  };

  return (
    <Box
      border="md"
      borderColor="gray.300"
      borderRadius="md"
      p="3"
      w="100%"
      bgColor="white"
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        wordBreak="break-word"
      >
        <Flex direction="column" gap="2" paddingLeft="3">
          <Text>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          <Flex direction="row" gap="3" borderRadius="full">
            <Box borderRadius="full" _hover={{ bg: "gray.200" }}>
              <CiChat1 color="green" size={"30"} />
            </Box>
            {1}
          </Flex>
        </Flex>
        <Icon
          marginLeft={3}
          aria-label="Pin thread"
          onClick={handlePinClick}
          fontSize="30px"
          bg="transparent"
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.200" }}
        >
          {isPinned ? <TiPin color="green" /> : <TiPinOutline color="green" />}
        </Icon>
      </Flex>
    </Box>
  );
};
