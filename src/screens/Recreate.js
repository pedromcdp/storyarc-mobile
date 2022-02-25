//Packages Imports
import { useEffect, useRef, useState } from "react";
import { VStack, HStack, ZStack, Text, Pressable, Box } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MotiImage } from "moti";
import Slider from "@react-native-community/slider";
import { Camera } from "expo-camera";
import uuid from "react-native-uuid";
//Redux
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";

export function Recreate({ route, navigation }) {
  const { photo, rua, contentDate } = route.params;
  const user = useSelector(useUser);
  const [opacity, setOpacity] = useState(0.5);
  const [image, setImage] = useState("");
  const camera = useRef(null);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  async function takePicture() {
    if (camera) {
      const options = { quality: 1, base64: true };
      const picture = await camera.current.takePictureAsync(options);
      setImage(picture.uri);
    }
  }

  function savePost() {
    const post = {
      id: uuid.v4(),
      userId: user.uid,
      postType: "comparacao",
      description: `Recriei a foto da ${rua}`,
      photo: photo,
      new_photo: image,
      streetName: rua,
      contentDate: contentDate,
      postDate: new Date(),
    };
    db.posts.push(post);
    navigation.goBack();
  }

  return (
    <ZStack safeArea bg="black" flex={1}>
      <StatusBar style="light" />
      <VStack
        flex={1}
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
      >
        {image ? (
          <MotiImage
            source={{ uri: image }}
            style={{ width: "100%", height: 400 }}
          />
        ) : (
          <Camera
            ref={camera}
            style={{ width: "100%", height: 400 }}
            type="back"
            ratio="1:1"
          />
        )}
        <MotiImage
          source={{ uri: photo }}
          style={{ width: "100%", height: 400, position: "absolute" }}
          animate={{ opacity: opacity }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        />
      </VStack>
      <VStack safeArea flex={1} pt="2" w="full" h="full">
        <HStack justifyContent="space-between" px={4}>
          <Pressable
            _pressed={{ opacity: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Text fontFamily="Poppins_500Medium" color="#37B777">
              Cancelar
            </Text>
          </Pressable>
          {image ? (
            <Pressable _pressed={{ opacity: 20 }} onPress={() => savePost()}>
              <Ionicons name="ios-checkmark" size={25} color="#37B777" />
            </Pressable>
          ) : (
            <></>
          )}
        </HStack>
        <VStack
          alignItems="center"
          space="1"
          position="absolute"
          bottom="1"
          w="full"
        >
          <Slider
            style={{ width: "85%", height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#37B777"
            maximumTrackTintColor="#ffffff"
            value={0.5}
            onValueChange={setOpacity}
            tapToSeek
          />
          <Box bg="white" rounded="full" borderWidth="3" borderColor="white">
            <Pressable
              w="16"
              h="16"
              bg="white"
              rounded="full"
              borderWidth="5"
              _pressed={{ backgroundColor: "black" }}
              onPress={() => takePicture()}
            />
          </Box>
        </VStack>
      </VStack>
    </ZStack>
  );
}
