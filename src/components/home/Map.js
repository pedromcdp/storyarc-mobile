import { useNavigation } from "@react-navigation/native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { MAPBOX_TOKEN } from "@env";
import db from "../../../server/db.json";

MapboxGL.setAccessToken(`${MAPBOX_TOKEN}`);

export function Map() {
  const { locations } = db;

  const navigation = useNavigation();

  return (
    <MapboxGL.MapView
      style={{ flex: 1 }}
      styleURL={MapboxGL.StyleURL.Outdoors}
      preferredFramesPerSecond={60}
      localizeLabels={true}
      logoEnabled={true}
      logoPosition={{ bottom: 60, right: 10 }}
    >
      {locations.map((location) => (
        <MapboxGL.PointAnnotation
          id={`${location.id}`}
          key={location.id}
          onSelected={() =>
            navigation.navigate("SearchResults", { title: location.name })
          }
          coordinate={[location.coordinates[1], location.coordinates[0]]}
        />
      ))}

      <MapboxGL.Camera
        zoomLevel={15.31}
        centerCoordinate={[-8.65362, 40.6412]}
      />
    </MapboxGL.MapView>
  );
}
