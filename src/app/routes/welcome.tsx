import { Heading } from "@chakra-ui/react";
import { Logo } from "@/components/layout/logo";
import { Button, Flex, VStack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const welcome = () =>{

  const navigate = useNavigate();

  const handleClick = (query:string) => {
    navigate(query);
  };
  
  return(
  <VStack>
    <Heading
      position="sticky"
      h="75px"
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
      <Logo />
    </Heading>
  <Box
    borderRadius='md'
    bg='gray.200'
    padding={20}
    >
    <Flex>
      <VStack>
        <Button size='2xl' colorPalette='green' onClick={ () => handleClick("signup") }> 新規登録 </Button>
        <Button size='2xl'colorPalette='green'onClick={ () => handleClick("login") }> ログイン </Button>
      </VStack>
    </Flex>
  </Box>
  </VStack>
    
  );
}
export default welcome;
