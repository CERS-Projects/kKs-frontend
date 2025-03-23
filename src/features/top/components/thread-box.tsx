import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { TiPinOutline, TiPin } from "react-icons/ti";
import { CiChat1 } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreadData } from "../types/thread";
import { paths } from "@/config/paths";

type Props = {
  thread: ThreadData;
};

export const ThreadBox = ({ thread }: Props) => {
  const [isPinned, setIsPinned] = useState(false);
  const navigate = useNavigate();

  const handlePinClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setIsPinned(!isPinned);
  };

  const handleComment: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const handleNavigate = () => {
    navigate(paths.app.thread.getHref(thread.id), {
      state: { thread, isPinned },
    });
  };

  return (
    <Box
      border="md"
      borderColor="gray.300"
      borderRadius="md"
      p="3"
      w="100%"
      bgColor="white"
      onClick={handleNavigate}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        wordBreak="break-word"
      >
        <Flex direction="column" gap="2" paddingLeft="3">
          <Text>{thread.title}</Text>
          <Flex direction="row" gap="1" borderRadius="full">
            <Box
              borderRadius="full"
              _hover={{ bg: "gray.200" }}
              onClick={handleComment}
            >
              <CiChat1 color="green" size={"30"} />
            </Box>
            {thread.comments}
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
