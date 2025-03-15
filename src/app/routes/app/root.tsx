import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import { Layout } from "@/components/layout/layout";

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <Flex h="100vh" w="auto" direction="column">
      <Layout>
        <Outlet />
      </Layout>
    </Flex>
  );
};

export default AppRoot;
