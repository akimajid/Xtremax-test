import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { SelectedContextProvider } from "./context/selectedContext";
import GoogleMaps from "./components/Map/GoogleMaps";
import PlaceDetails from "./components/MenuItem/PlaceDetails"

function App() {
  return (
    <SelectedContextProvider>
      <Box>
        <Sidebar />
        <GoogleMaps />
        <PlaceDetails />
      </Box>
    </SelectedContextProvider>
  );
}

export default App;
