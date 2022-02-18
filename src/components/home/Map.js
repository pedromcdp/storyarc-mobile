import { useNavigation } from "@react-navigation/native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { MAPBOX_TOKEN } from "@env";
import db from "../../../server/db.json";

MapboxGL.setAccessToken(`${MAPBOX_TOKEN}`);

export function Map() {
  const posts = db.posts;

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
      {posts.map((post) => (
        <MapboxGL.PointAnnotation
          id={`${post.id}`}
          key={post.id}
          onSelected={() =>
            navigation.navigate("Post", {
              content: post,
            })
          }
          coordinate={[post.location[1], post.location[0]]}
        />
      ))}

      <MapboxGL.Camera zoomLevel={15.31} centerCoordinate={[-8.656, 40.638]} />
    </MapboxGL.MapView>
  );
}
