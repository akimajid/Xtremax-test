import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { SelectedContextProvider } from "./context/selectedContext";
import GoogleMaps from "./components/Map/GoogleMaps";

function App() {
  return (
    <SelectedContextProvider>
      <Box>
        <Sidebar />
        <GoogleMaps />
      </Box>
    </SelectedContextProvider>
  );
}

export default App;
