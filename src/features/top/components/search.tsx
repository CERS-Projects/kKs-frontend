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
      m="2%"
      w="90%"
      bgColor="white"
    >
      <Input border="md" borderColor="#90EE90" />
    </InputGroup>
  );
};
