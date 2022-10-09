import { Box, Flex, Menu, MenuButton, Icon, Text } from "@chakra-ui/react";
import {
  RiCloseCircleFill,
  RiQuestionFill,
  RiSettings3Fill,
} from "react-icons/ri";
import React, { useCallback } from "react";
import { useSelectedContext } from "../../src/context/selectedContext";

const NavBarItem = () => {
  const { setSelected, setSelectedMenu } = useSelectedContext();

  const onClick = useCallback(() => {
    setSelected(null);
    setSelectedMenu(null);
  }, [setSelected, setSelectedMenu]);

  return (
    <Box ml="405px" bgColor="gray.100" px="10" py="10">
      <Flex justifyContent="space-between">
        {/* Text section */}
        <Text fontSize="large" fontWeight="bold">
          TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
        </Text>

        {/* Right button section */}
        <Flex justifyContent="right">
          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton
                _hover={{
                  cursor: "Pointer",
                  color: "blue",
                }}
                cursor="pointer"
                minW={0}
              >
                <Icon alignContent="center" boxSize={7} as={RiSettings3Fill} />
              </MenuButton>
            </Menu>
          </Flex>

          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton
                _hover={{
                  cursor: "Pointer",
                  color: "blue",
                }}
                cursor="pointer"
                minW={0}
              >
                <Icon alignContent="center" boxSize={7} as={RiQuestionFill} />
              </MenuButton>
            </Menu>
          </Flex>

          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton
                _hover={{
                  cursor: "Pointer",
                  color: "red",
                }}
                onClick={onClick}
                cursor="pointer"
                minW={0}
              >
                <Icon
                  alignContent="center"
                  boxSize={7}
                  as={RiCloseCircleFill}
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBarItem;
