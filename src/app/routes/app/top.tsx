import { Flex, Icon, Box } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";

import { SearchBox } from "@/features/top/components/search";
import { Thread } from "@/features/top/components/thread";
import { ReturnTopButton } from "@/components/ui/return-button";

const Top = () => {
  return (
    <Flex id="top" maxH="100vh" w="100%" position="relative" overflowY="scroll">
      <Flex
        id="left"
        h="100%"
        w="10%"
        hideBelow="sm"
        justifyContent="flex-start"
        alignItems="center"
        direction="column"
        position="sticky"
        top={0}
      >
        <Flex
          id="menu-left"
          direction="column"
          h="100%"
          marginTop="25%"
          alignItems="center"
          gap="5"
        >
          <Tooltip
            content="ブックマークに追加する"
            positioning={{ placement: "right-end" }}
            contentProps={{ css: { "--tooltip-bg": "gray" } }}
            openDelay={100}
            closeDelay={400}
          >
            <Icon fontSize="50px">
              <PiBookBookmarkFill color="#90EE90" />
            </Icon>
          </Tooltip>
          <Tooltip
            content="プロフィールを見る"
            positioning={{ placement: "right-end" }}
            contentProps={{ css: { "--tooltip-bg": "gray" } }}
            openDelay={100}
            closeDelay={400}
          >
            <Icon fontSize="50px">
              <RiAccountCircleLine color="#90EE90" />
            </Icon>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        id="center"
        h="auto"
        w="100%"
        alignItems="center"
        direction="column"
        gap="8"
        position="relative"
      >
        <Flex
          id="contents"
          bgColor="gray.100"
          borderRadius="md"
          p="1"
          direction="column"
          w="90%"
          alignItems="center"
          m="5"
        >
          <Flex
            id="search"
            w="75%"
            justifyContent="center"
            alignItems="center"
            bgColor="gray.100"
            borderRadius="md"
            m="5"
          >
            <SearchBox />
          </Flex>
          <Flex
            id="threads"
            w="90%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap="3"
            bgColor="gray.100"
            borderRadius="md"
            p="5"
          >
            <Thread />
            <Thread />
            <Thread />
            <Thread />
            <Thread />
            <Thread />
          </Flex>
        </Flex>
      </Flex>
      <Flex id="right" h="100%" w="20%" position="sticky" top={0}>
        <Flex
          id="menu-right"
          w="100%"
          m="5%"
          alignItems="center"
          justifyContent="space-between"
          direction="column"
        >
          <Flex
            id="user-name"
            w="100%"
            alignItems="center"
            justifyContent="center"
            marginTop="20%"
            borderWidth="2px"
            wordBreak="break-word"
            p="4%"
          >
            kks-enginner
          </Flex>
          <Tooltip
            id="add-thread"
            content="スレッドを投稿する"
            positioning={{ placement: "top" }}
            contentProps={{ css: { "--tooltip-bg": "gray" } }}
            openDelay={100}
            closeDelay={400}
          >
            <Box
              borderRadius="full"
              w="60px"
              h="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="gray.100"
              _hover={{ bg: "gray.200" }}
            >
              <IoAdd size={30} color="green" />
            </Box>
          </Tooltip>

          <Box>
            <ReturnTopButton topElementId="top" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Top;
