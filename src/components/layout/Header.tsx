import { Heading, Box, Icon, Flex } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { IoLogOut } from "react-icons/io5";
import { Logo } from "./logo";
import { Humburger } from "./humburger";

export const Header = () => {
  return (
    <Heading
      position="sticky"
      h="90px"
      minW="20%"
      w="100%"
      borderBottomWidth="2px"
      display="flex"
      alignItems="center"
      bgColor="white"
      padding="10px"
      boxShadow="0 0.5px 5px rgba(0, 0, 0, 0.1)"
      justifyContent="space-between"
      top={0}
      zIndex={999}
    >
      <Flex direction="row" alignItems="center">
        <Box display={{ base: "block", sm: "none" }}>
          <Humburger />
        </Box>
        <Box margin="5%">
          <Logo />
        </Box>
      </Flex>

      <Flex marginRight="2%">
        <Tooltip
          content="ログアウトする"
          contentProps={{ css: { "--tooltip-bg": "gray" } }}
          openDelay={100}
          closeDelay={400}
        >
          <Icon
            aria-label="ログアウト"
            bg="transparent"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.200" }}
            fontSize="40px"
            m="2%"
          >
            <IoLogOut color="#90EE90" />
          </Icon>
        </Tooltip>
      </Flex>
    </Heading>
  );
};
