import { Box, Heading, Flex, Text, Input, Stack, Button } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input";
import { Logo } from "@/components/layout/logo";

const Signup = () =>{
    const test = ()=>{
        alert("test")
    }

    return(
    <Flex
    flexDirection="column"
    alignItems="center"
    justifyItems="center"
    bg="gray.100"
    height="full"
    >
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
        <Box bg="white" padding="5">
                <Stack gap="4">
                <Text fontWeight="bold" fontSize='2xl'> 新規登録 </Text>
                <Box bg="lightgreen" color="lightgreen" width="24" height="2"  ></Box>

                <form action="" method="post" >
                    <Flex gap="4" flexDirection="column">
                        <Input variant="outline"  placeholder="ユーザーID"/>
                        <Input variant="outline"  placeholder="メールアドレス"/>
                        <PasswordInput placeholder="パスワード" />
                        <PasswordInput placeholder="パスワード再入力" />
                        <Button onClick={test}> 登録 </Button>
                    </Flex>
                </form>
            </Stack>
        </Box>
    </Flex>
    );
};

export default Signup
