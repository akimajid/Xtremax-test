import { Box, Icon, VStack, Text } from "@chakra-ui/react";
import { GoGlobe } from "react-icons/go";
import { BiMovie } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdRecommend } from "react-icons/md";

const sidebarIcon = () => {
  return (
    <Box bg="#313541" h="full" mr="-2">
      <VStack
        spacing="-1"
        bg="#72CDD2"
        _hover={{ cursor: "Pointer", bgColor: "#72CDD2"}}
        p="6"
      >
        <Icon color="white" alignContent="center" boxSize={10} as={GoGlobe} />
        <Text color="white">Browse</Text>
      </VStack>
      <VStack
        spacing="-1"
        _hover={{ cursor: "Pointer", bgColor: "#72CDD2" }}
        p="6"
      >
        <Icon color="#7C939B" alignContent="center" boxSize={10} as={MdRecommend} />
        <Text color="#7C939B">suggest</Text>
        <Text color="#7C939B">attraction</Text>
      </VStack>
      <VStack
        spacing="-1"
        _hover={{ cursor: "Pointer", bgColor: "#72CDD2" }}
        p="6"
      >
        <Icon color="#7C939B" alignContent="center" boxSize={10} as={BiMovie} />
        <Text color="#7C939B">Videos</Text>
      </VStack>
      <VStack
        spacing="-1"
        _hover={{ cursor: "Pointer", bgColor: "#72CDD2" }}
        p="6"
      >
        <Icon color="#7C939B" alignContent="center" boxSize={10} as={BsFillChatLeftTextFill} />
        <Text color="#7C939B">Blog</Text>
      </VStack>
      <VStack
        spacing="-1"
        _hover={{ cursor: "Pointer", bgColor: "#72CDD2" }}
        p="6"
      >
        <Icon color="#7C939B" alignContent="center" boxSize={10} as={RiErrorWarningFill} />
        <Text color="#7C939B">About</Text>
      </VStack>
    </Box>
  );
};

export default sidebarIcon;
