import {
  Drawer,
  IconButton,
  Portal,
  CloseButton,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";

export const Humburger = () => {
  return (
    <Drawer.Root key="start" placement="start">
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="メニューボタン"
          size="sm"
          bg="white"
          _hover={{ bg: "gray.200" }}
        >
          <FaBars color="gray" />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Flex id="menu-list" direction="column">
                <Flex
                  id="bookmark"
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  w="100%"
                  gap="3"
                >
                  <Icon fontSize="3xl" margin="5%">
                    <PiBookBookmarkFill color="#90EE90" />
                  </Icon>
                  <Text fontSize="xl" fontWeight="bold">
                    ブックマーク
                  </Text>
                </Flex>
                <Flex
                  id="profile"
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  w="100%"
                  gap="3"
                >
                  <Icon fontSize="3xl" margin="5%">
                    <RiAccountCircleLine color="#90EE90" />
                  </Icon>
                  <Text fontSize="xl" fontWeight="bold">
                    プロフィール
                  </Text>
                </Flex>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
