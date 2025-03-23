import { InputGroup } from "@/components/ui/input-group";
import { Input, Box } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export const SearchBox = () => {
  return (
    <InputGroup
      startElement={
        <Box p="3px" borderRadius="sm">
          <LuSearch color="green" />
        </Box>
      }
      w="90%"
    >
      <Input
        placeholder="スレッドを検索..."
        border="md"
        borderColor="#90EE90"
        bgColor="white"
      />
    </InputGroup>
  );
};
