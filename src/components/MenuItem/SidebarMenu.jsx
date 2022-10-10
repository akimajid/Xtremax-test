import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Select,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useSelectedContext } from "../../context/selectedContext";

const navMenus = [
  { label: "Merlion" },
  {
    label: "Marina Bay Sands",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  {
    label: "Gardens By The Bay",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  {
    label: "Chinatown",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  { label: "Asian Civilisations Museum" },
  { label: "Clarke Quay" },
  { label: "Fort Canning Park" },
  { label: "Singapore Flyer" },
  { label: "Orchard Road" },
];

const SidebarMenu = () => {
  const { setSelectedMenu, selectedMenu } = useSelectedContext();

  const onClick = useCallback(
    (label) => {
      setSelectedMenu(label);
    },
    [setSelectedMenu]
  );

  return (
    <Box
      overflowY="auto"
      overflowX="hidden"
      bg="#2C303B"
      color="white"
      h="full"
      px="4"
    >
      <Select mb="10" color="#7C939B" bg="#2C303B" borderColor="#242832" mt="8" p="2">
        <option>Filter by Favorite</option>
        <option>Merlion</option>
        <option>Asian Civilisations Museum</option>
        <option>Clarke Quay</option>
        <option>Fort Canning Park</option>
        <option>Orchard Road</option>
        <option>Singapore Flyer</option>
        <option>Marina Bay Sands</option>
        <option>Gardens By The Bay</option>
        <option>Chinatown</option>
      </Select>

      {navMenus.map((menu) =>
        menu.children ? (
          <Accordion
            key={menu.label}
            px="4"
            border="#242832"
            allowMultiple
            lineHeight="6"
          >
            <AccordionItem>
              <Box>
                <AccordionButton
                  className={`${
                    selectedMenu === menu.label
                      ? "bg-[#1C1F27] text-[#92D72E]"
                      : ""
                  } text-left w-full flex justify-between items-center text-white font-medium hover:text-[#92D72E] hover:bg-[#1C1F27] cursor-pointer`}
                  onClick={() => onClick(menu.label)}
                >
                  <Box>{menu.label}</Box>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel
                allowMultiple
                lineHeight="3"
                fontSize="small"
                _hover={{
                  cursor: "Pointer",
                  bgColor: "#1C1F27",
                  color: "#92D72E",
                }}
              >
                {menu.children.map((child) => (
                  <dt
                    key={child}
                    className="text-sm text-[#7C939B] hover:bg-[#1C1F27] cursor-pointer"
                  >
                    {child}
                  </dt>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ) : (
          <Accordion
            px="4"
            border="#242832"
            allowMultiple
            lineHeight="6"
            key={menu.label}
          >
            <AccordionItem>
              <Box>
                <AccordionButton
                  className={`${
                    selectedMenu === menu.label
                      ? "bg-[#1C1F27] text-[#92D72E]"
                      : ""
                  } text-white font-medium hover:text-[#92D72E] hover:bg-[#1C1F27] cursor-pointer`}
                  onClick={() => onClick(menu.label)}
                >
                  <Box>{menu.label}</Box>
                </AccordionButton>
              </Box>
            </AccordionItem>
          </Accordion>
        )
      )}
    </Box>
  );
};

export default SidebarMenu;
