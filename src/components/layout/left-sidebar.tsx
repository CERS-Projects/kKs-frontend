import { Flex, Icon, Box } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";

const LeftSidebar = () => {
  return (
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
          <Box bgColor="white" borderRadius="full" p="2">
            <Icon fontSize="50px">
              <PiBookBookmarkFill color="#90EE90" />
            </Icon>
          </Box>
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
  );
};

export default LeftSidebar;
