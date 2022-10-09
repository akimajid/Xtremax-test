import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Select,
} from "@chakra-ui/react";

const SidebarMenu = () => {
  return (
    <Box
      overflowY="auto"
      overflowX="hidden"
      bg="#2C303B"
      color="white"
      h="full"
    >
      <Select color="#7C939B" bg="#2C303B" borderColor="#242832" mt="8" p="2">
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

      <Accordion
        px="4"
        mt="4"
        border="transparent"
        allowMultiple
        lineHeight="6"
      >
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Merlion</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              justifyContent="space-between"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Marina Bay Sands</Box>
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
            px="8"
          >
            ArtScience Museum
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Mariana Bay Sands Skypark
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Double Helix Bridge
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              justifyContent="space-between"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Gardens By The Bay</Box>
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
            px="8"
          >
            ArtScience Museum
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Mariana Bay Sands Skypark
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Double Helix Bridge
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              justifyContent="space-between"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Chinatown</Box>
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
            px="8"
          >
            ArtScience Museum
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Mariana Bay Sands Skypark
          </AccordionPanel>
          <AccordionPanel
            allowMultiple
            lineHeight="3"
            fontSize="small"
            _hover={{
              cursor: "Pointer",
              bgColor: "#1C1F27",
              color: "#92D72E",
            }}
            px="8"
          >
            Double Helix Bridge
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Asian Civilisations Museum</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Clarke Quay</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Fort Canning Park</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Singapore Flyer</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion px="4" border="transparent" allowMultiple lineHeight="6">
        <AccordionItem>
          <Box>
            <AccordionButton
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                cursor: "Pointer",
                bgColor: "#1C1F27",
                color: "#92D72E",
              }}
            >
              <Box>Orchard Road</Box>
            </AccordionButton>
          </Box>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SidebarMenu;
