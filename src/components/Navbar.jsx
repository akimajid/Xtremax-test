import { Box, Flex, Menu, MenuButton, Icon, Text } from "@chakra-ui/react";
import {
  RiCloseCircleFill,
  RiQuestionFill,
  RiSettings3Fill,
} from "react-icons/ri";

const NavBarItem = () => {
  return (
    <Box ml="365px" bgColor="gray.100" px="10" py="10">
      <Flex justifyContent="space-between">

        {/* Text section */}
        <Text fontSize="large" fontWeight="bold">
          TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
        </Text>

        {/* Right button section */}
        <Flex justifyContent="right">
          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton cursor="pointer" minW={0}>
                <Icon alignContent="center" boxSize={7} as={RiSettings3Fill} />
              </MenuButton>
            </Menu>
          </Flex>

          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton cursor="pointer" minW={0}>
                <Icon alignContent="center" boxSize={7} as={RiQuestionFill} />
              </MenuButton>
            </Menu>
          </Flex>

          <Flex mx="3" alignItems="center">
            <Menu>
              <MenuButton cursor="pointer" minW={0}>
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
