import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/header/Header";

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

export const AppRoot = () => {
  return (
    <Flex h="100vh" w="auto" direction="column">
      <Header />
      <Outlet />
    </Flex>
  );
};
