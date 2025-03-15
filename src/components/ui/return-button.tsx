import { Button } from "@chakra-ui/react";
import { GoMoveToTop } from "react-icons/go";

type Props = {
  topElementId: string;
};

const toTop = (topElementId: string) => {
  const topElement = document.getElementById(topElementId);
  if (topElement) {
    topElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export const ReturnTopButton = ({ topElementId }: Props) => {
  return (
    <Button
      id="to-top"
      borderRadius="full"
      onClick={() => toTop(topElementId)}
      bg="gray.100"
      _hover={{ bg: "gray.200" }}
      w="60px"
      h="60px"
    >
      <GoMoveToTop size={30} color="green" />
    </Button>
  );
};
