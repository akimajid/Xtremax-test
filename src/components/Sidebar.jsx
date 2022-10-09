import {
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import SidebarIcon from "./MenuItem/SidebarIcon"
import SidebarMenu from "./MenuItem/SidebarMenu";

const AdminSideBar = () => {
  return (
    <SimpleGrid zIndex="overlay">
      <Navbar />
      <HStack h="full" position="fixed" boxShadow="md">
        <SidebarIcon />
        <SidebarMenu/>
      </HStack>
    </SimpleGrid>
  );
};

export default AdminSideBar;
