import React from "react";
import tw from "twrnc";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { MAPBOX_TOKEN } from "@env";

MapboxGL.setAccessToken(`${MAPBOX_TOKEN}`);

export default function Map() {
  return (
    <MapboxGL.MapView
      style={tw`flex-1`}
      styleURL={MapboxGL.StyleURL.Outdoors}
      preferredFramesPerSecond={60}
      localizeLabels={true}
      logoEnabled={false}
    >
      <MapboxGL.Camera zoomLevel={15.31} centerCoordinate={[-8.656, 40.638]} />
    </MapboxGL.MapView>
  );
}
