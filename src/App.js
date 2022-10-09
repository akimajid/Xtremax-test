import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { SelectedContextProvider } from "./context/selectedContext";

function App() {
  return (
    <SelectedContextProvider>
      <Box>
        <Sidebar/>
      </Box>
    </SelectedContextProvider>
  );
}

export default App;
