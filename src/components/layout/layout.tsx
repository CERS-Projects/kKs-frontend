import { ReactNode } from "react";
import { Header } from "./Header";
import { ReturnTopButton } from "@/components/ui/return-button";
import { Flex, Box } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Flex
        id="wrap-layout-body"
        h={`calc(100vh - 75px)`}
        w="100vw"
        position="relative"
        overflowY="auto"
        bgColor="gray.200"
      >
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
              <Box
                borderRadius="full"
                w="60px"
                h="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="white"
                _hover={{ bg: "gray.100" }}
              >
                <PiBookBookmarkFill size={30} color="#90EE90" />
              </Box>
            </Tooltip>
            <Tooltip
              content="プロフィールを見る"
              positioning={{ placement: "right-end" }}
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
                bg="white"
                _hover={{ bg: "gray.100" }}
              >
                <RiAccountCircleLine size={30} color="#90EE90" />
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
        <Flex
          id="center"
          w="100%"
          alignItems="center"
          direction="column"
          gap="8"
          position="relative"
          wordBreak="break-word"
          flexGrow={1}
        >
          <Flex
            id="contents"
            bgColor="white"
            borderRadius="md"
            p="1%"
            paddingTop="3%"
            paddingBottom="3%"
            flexGrow={1}
            direction="column"
            w="90%"
            alignItems="center"
            m="5"
          >
            {children}
          </Flex>
        </Flex>
        <Flex
          id="right"
          h="100%"
          w="20%"
          justifyContent="center"
          position="sticky"
          top={0}
        >
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
              borderColor="gray.300"
              wordBreak="break-word"
              p="4%"
              bgColor="white"
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
                bg="white"
                _hover={{ bg: "gray.100" }}
              >
                <IoAdd size={30} color="green" />
              </Box>
            </Tooltip>

            <Tooltip
              content="一番上に戻る"
              positioning={{ placement: "top" }}
              contentProps={{ css: { "--tooltip-bg": "gray" } }}
              openDelay={100}
              closeDelay={400}
            >
              <Box>
                <ReturnTopButton topElementId="wrap-layout-body" />
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
