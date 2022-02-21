//Packages Imports
import { Box, Text, ZStack, VStack, Skeleton } from "native-base";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
//db
import db from "../../../server/db.json";

export function HighlightPost({ index, isLoaded, post }) {
  const navigation = useNavigation();
  const user = db.users.find((user) => user.id === post.userId);
  return (
    <ZStack
      width={140}
      height={200}
      rounded="lg"
      shadow="1"
      ml={index === 0 ? 4 : null}
      mr={2.5}
    >
      <Skeleton
        isLoaded={isLoaded}
        borderRadius={10}
        startColor="coolGray.100"
        endColor="coolGray.300"
        width="full"
        height={"full"}
      >
        <Image
          source={{
            uri: post.photo,
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
      </Skeleton>
      <Box
        width="full"
        height="full"
        rounded="lg"
        bg={{
          linearGradient: {
            colors: ["rgba(0,0,0,0.8)", "rgba(0,0,0,0.1)"],
            start: [0, 0],
            end: [0, 1],
            locations: [1, 0],
          },
        }}
      />
      <VStack
        justifyContent="space-between"
        px={2}
        w="full"
        h="full"
        space={1}
        pt={2}
        pb={1}
      >
        <Skeleton
          isLoaded={isLoaded}
          borderWidth={1.2}
          borderColor="white"
          startColor="coolGray.100"
          endColor="coolGray.300"
          size="8"
          rounded="full"
        >
          <Image
            source={{ uri: user.avatar }}
            style={{
              width: 34,
              height: 34,
              borderWidth: 1.2,
              borderColor: "white",
              borderRadius: 100,
            }}
          />
        </Skeleton>
        <Box>
          {index === 0 && (
            <Skeleton.Text
              lines={1}
              lineHeight={1}
              isLoaded={isLoaded}
              startColor="coolGray.100"
              endColor="coolGray.300"
              pb={2}
              w="2/5"
            >
              <Text
                fontFamily="Poppins_500Medium"
                color="white"
                fontSize="xs"
                pb={1}
              >
                Em destaque
              </Text>
            </Skeleton.Text>
          )}
          <Skeleton.Text
            lines={2}
            isLoaded={isLoaded}
            startColor="coolGray.100"
            endColor="coolGray.300"
            pb={1}
          >
            <Text
              numberOfLines={2}
              fontFamily="Poppins_500Medium"
              color="white"
              fontSize="md"
              lineHeight="sm"
              onPress={() =>
                navigation.navigate("Post", {
                  content: post,
                })
              }
            >
              {post.description}
            </Text>
          </Skeleton.Text>
        </Box>
      </VStack>
    </ZStack>
  );
}
