import React, { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import CustomMarker from "./CustomMarker";
import { useSelectedContext } from "../../context/selectedContext";
import { Center } from "@chakra-ui/react";

const GoogleMapView = () => {
  const [mapData, setMapData] = useState([]);
  const [center, setCenter] = useState([1.28692, 103.85457]);
  const { selectedMenu, selected, setSelected } = useSelectedContext();

  // fetching data from github to simulate fetching from real API
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akimajid/Xtremax-test/master/server_data/mapData.json"
    )
      .then((res) => res.json())
      .then((data) => setMapData(data));
  }, []);

  // To match maps and data menu
  useEffect(() => {
    if (selectedMenu !== null) {
      const selectedData = mapData.filter((map) =>
        map.place_name.includes(selectedMenu)
      );
      setSelected(selectedData[0]);
    }
  }, [selectedMenu, mapData, setSelected]);

  // Make maps centered when clicked
  useEffect(() => {
    if (selected) {
      setCenter([selected.lat, selected.lng]);
    }
  }, [selected]);

  return (
    <Center ml="405px" position="fixed" h="full" w="full">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={15}
        center={center}
        zoom={!selected ? 15 : 17}
      >
        {/* reversing the array so the first entry will come on top of the other marks */}
        {mapData.reverse().map((data) => (
          <CustomMarker
            key={data.lat}
            lat={data.lat}
            lng={data.lng}
            data={data}
          />
        ))}
      </GoogleMap>
    </Center>
  );
};

export default React.memo(GoogleMapView);
