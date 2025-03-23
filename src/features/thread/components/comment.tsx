import { Flex, Text } from "@chakra-ui/react";
import { CommentData } from "../types/comment";

type CommentProps = {
  id: number;
  comment: CommentData;
};

export const Comment = ({ id, comment }: CommentProps) => {
  return (
    <>
      <Flex
        id="comment-box"
        w="100%"
        direction="column"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        bgColor="gray.100"
        padding="2"
        gap="2"
      >
        <Flex
          id="comment-header"
          direction="row"
          justifyContent="space-between"
        >
          <Flex direction="row" gap="4">
            <Text fontWeight="bold" color="green">
              {id}
            </Text>
            <Text
              fontSize="md"
              fontWeight="bold"
              textDecoration="underline"
              textDecorationColor="#90EE90"
              textUnderlinePosition="under"
            >
              {comment.user_id}
            </Text>
          </Flex>

          <Text fontSize="sm">{comment.posted_time.toLocaleString()}</Text>
        </Flex>
        <Flex id="comment-contents">
          <Text fontSize="md" whiteSpace="pre-wrap">
            {comment.comment}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
