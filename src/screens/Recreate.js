import { useEffect, useState } from "react";
import { VStack, HStack, ZStack, Text, Pressable, Box } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MotiImage } from "moti";
import Slider from "@react-native-community/slider";
// import { Camera } from "expo-camera";

export function Recreate({ route, navigation }) {
  const { photo } = route.params;
  const [opacity, setOpacity] = useState(0.5);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  return (
    <ZStack safeArea bg="black" flex={1}>
      <StatusBar style="light" />
      <VStack
        flex={1}
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        space="2"
      >
        <MotiImage
          source={{ uri: photo }}
          style={{ width: "100%", height: 400 }}
          animate={{ opacity: opacity }}
        />
      </VStack>
      <VStack safeArea flex={1} w="full" h="full">
        <HStack justifyContent="space-between" px={4}>
          <Pressable
            _pressed={{ opacity: 80 }}
            onPress={() => navigation.goBack()}
          >
            <Text fontFamily="Poppins_500Medium" color="#37B777">
              Cancelar
            </Text>
          </Pressable>
          <Ionicons name="ios-checkmark" size={25} color="#37B777" />
        </HStack>
        <VStack
          alignItems="center"
          space="4"
          position="absolute"
          bottom="2"
          w="full"
        >
          <Slider
            style={{ width: "85%", height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#37B777"
            maximumTrackTintColor="#ffffff"
            value={opacity}
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
              onPress={() => {
                console.log("takepicasync");
              }}
            />
          </Box>
        </VStack>
      </VStack>
    </ZStack>
  );
}
