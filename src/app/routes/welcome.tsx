import { Heading } from "@chakra-ui/react";
import { Logo } from "@/components/layout/logo";
import { Button, VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router";
import { paths } from "@/config/paths";


const Welcome = () =>{
  
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
    <VStack>
      <Link to={paths.signup.getHref()}>
        <Button size='2xl' colorPalette='green'> 新規登録 </Button>
      </Link>
      <Link to={paths.login.getHref()}>
        <Button size='2xl' colorPalette='green'> ログイン </Button>
      </Link>
    </VStack>
  </Box>
  </VStack>
    
  );
}
export default Welcome;
