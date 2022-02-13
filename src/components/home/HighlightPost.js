//Packages Imports
import { Box, Text, Image, ZStack } from "native-base";

//Testing
import db from "../../../server/db.json";

export default function HighlightPost() {
  const demoPost = db.posts[0];

  return (
    <ZStack h={48} w={32} borderRadius={10}>
      <Image
        source={{ uri: demoPost.photo }}
        alt={demoPost.title}
        width="full"
        height="full"
        borderRadius={10}
      />
      <Box
        width="full"
        height="full"
        bg={{
          linearGradient: {
            colors: ["black", "transparent"],
            start: [0, 0],
            end: [0, 1],
            locations: [1, 0],
          },
        }}
      />
    </ZStack>
  );
}
