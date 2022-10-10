import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelectedContext } from "../../context/selectedContext";
import mark_icon from "../../mapsInfo/mark_icon.png";
import world_icon from "../../mapsInfo/world_icon.png";

const DetailPopup = () => {
  const { selected } = useSelectedContext();
  return (
    selected && (
      <Box
        overflowY="auto"
        className="fixed right-0 h-screen bg-[#313541] w-[350px]"
      >
        <Img src={selected.image} alt="detail" />
        <Box p="4" bg="#72cdd2">
          <Text fontSize="24px" color="white">
            {selected.place_name}
          </Text>
        </Box>
        <Stack px="8" pt="6" textAlign="center" spacing="4">
          <Text fontSize="15px" color="white">
            {selected.description}
          </Text>
          <Stack spacing="1">
            <Stack color="white" spacing="2">
              <HStack justifyContent="center">
                <Img src={mark_icon} alt="mark" />
                <Text>{selected.address}</Text>
              </HStack>
            </Stack>
            <Stack color="white" spacing="2">
              <HStack justifyContent="center">
                <Img src={world_icon} alt="world" />
                <Text>http://www.marinabaysands.com/</Text>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    )
  );
};

export default DetailPopup;
