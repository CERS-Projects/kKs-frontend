import { Flex, Icon, Text, Separator } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Comment } from "@/features/thread/components/comment";
import { ThreadData } from "@/features/top/types/thread";
import { CommentData } from "@/features/thread/types/comment";
import { TiPinOutline, TiPin } from "react-icons/ti";
import { CiChat1 } from "react-icons/ci";
import { v4 as uuid } from "uuid";

const Thread = () => {
  const location = useLocation();
  const { thread } = location.state as { thread: ThreadData };
  const pinState = location.state as { isPinned: boolean };
  const [isPinned, setIsPinned] = useState(pinState.isPinned);

  const handlePinClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setIsPinned(!isPinned);
  };

  const comments_mock: CommentData[] = [
    {
      user_id: "user2",
      posted_time: new Date(2020, 1, 4, 4, 5, 6),
      comment:
        "人工衛星の軌道や、恒星の年周視差なども、地球が太陽の周りを公転していることを示す証拠となります。\nこれらの証拠を総合的に考えると、地動説は疑いようのない事実と言えるでしょう。",
    },
    {
      user_id: "user2",
      posted_time: new Date(2020, 1, 4, 4, 5, 6),
      comment:
        "人工衛星の軌道や、恒星の年周視差なども、地球が太陽の周りを公転していることを示す証拠となります。\nこれらの証拠を総合的に考えると、地動説は疑いようのない事実と言えるでしょう。",
    },
    {
      user_id: "user2",
      posted_time: new Date(2020, 1, 4, 4, 5, 6),
      comment:
        "人工衛星の軌道や、恒星の年周視差なども、地球が太陽の周りを公転していることを示す証拠となります。\nこれらの証拠を総合的に考えると、地動説は疑いようのない事実と言えるでしょう。",
    },
    {
      user_id: "user2",
      posted_time: new Date(2020, 1, 4, 4, 5, 6),
      comment:
        "人工衛星の軌道や、恒星の年周視差なども、地球が太陽の周りを公転していることを示す証拠となります。\nこれらの証拠を総合的に考えると、地動説は疑いようのない事実と言えるでしょう。",
    },
  ];

  return (
    <>
      <Flex w="95%" direction="column" gap="10">
        <Flex id="thread-title" w="100%" direction="column" gap="2">
          <Flex direction="row" justifyContent="space-between">
            <Flex direction="row">
              <Text fontSize="xl">{thread.user_id}</Text>
            </Flex>
            <Icon
              aria-label="Pin thread"
              onClick={handlePinClick}
              fontSize="30px"
              bg="transparent"
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
            >
              {isPinned ? (
                <TiPin color="green" />
              ) : (
                <TiPinOutline color="green" />
              )}
            </Icon>
          </Flex>
          <Text fontSize="4xl" fontWeight="bold">
            {thread.title}
          </Text>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>投稿日 {thread.posted_time.toLocaleString()}</Text>
            <Tooltip
              content="スレッドにコメントする"
              positioning={{ placement: "bottom-end" }}
              contentProps={{ css: { "--tooltip-bg": "gray" } }}
              openDelay={100}
              closeDelay={400}
            >
              <Flex direction="row" aria-label="Comment thread" gap={2}>
                <Text>{thread.comments}</Text>
                <Icon
                  bg="transparent"
                  _hover={{ bg: "gray.100" }}
                  _active={{ bg: "gray.200" }}
                >
                  <CiChat1 color="green" size={"30"} />
                </Icon>
              </Flex>
            </Tooltip>
          </Flex>
          <Flex id="thread-contents">
            <Text fontSize="md" fontWeight="bold" whiteSpace="pre-wrap">
              {thread.contents}
            </Text>
          </Flex>
          <Separator color="gray" size="sm" />
        </Flex>
        <Flex id="thread-comments" direction="column" gap="4">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textDecoration="underline"
            textDecorationColor="gray.200"
            textUnderlinePosition="under"
          >
            COMMENT
          </Text>
          {comments_mock.map((comment, index) => (
            <Comment key={uuid()} id={index + 1} comment={comment} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Thread;
