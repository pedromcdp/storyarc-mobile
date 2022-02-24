//Packages Imports
import { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Text,
  Box,
  TextArea,
  Input,
  Button,
  Pressable,
} from "native-base";
import { Keyboard, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import uuid from "react-native-uuid";
//Redux
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
//Components
import { ModalHeader } from "../components";
//db
import db from "../../server/db.json";

export function AddContent({ navigation }) {
  const user = useSelector(useUser);
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (desc === "") {
      setIsEmpty(true);
    } else if (location === "") {
      setIsEmpty(true);
    } else if (image === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [desc, location, image]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.cancelled) {
      if (!image) {
        setImage(result.uri);
      } else if (image) {
        setImage2(result.uri);
      }
    }
  };

  function addPost() {
    const post = {
      id: uuid.v4(),
      userId: user.uid,
      postType: !image2 ? "foto" : "comparacao",
      description: desc,
      photo: image,
      new_photo: image2,
      streetName: location,
      contentDate: date,
      postDate: new Date(),
    };
    db.posts.push(post);
    navigation.goBack();
  }

  return (
    <VStack flex={1} bg="white" onStartShouldSetResponder={Keyboard.dismiss}>
      {Platform.OS === "ios" && (
        <ModalHeader navigation={navigation} text="Adicionar Conteúdo" />
      )}
      <StatusBar style={Platform.OS === "ios" && "light"} />
      <VStack mx="4" py="4" space="4">
        <Box shadow={2} backgroundColor={"white"} borderRadius={"xl"}>
          <TextArea
            variant="unstyled"
            fontFamily="Poppins_400Regular"
            h={"32"}
            fontSize={15}
            placeholder="Adicione uma descrição"
            w="100%"
            onChangeText={setDesc}
            value={desc}
          />
        </Box>
        <Box shadow={2} backgroundColor={"white"} borderRadius={"xl"} h="12">
          <Input
            fontSize={15}
            flex="1"
            variant="unstyled"
            placeholder="Introduza a localização da fotografia"
            onChangeText={setLocation}
            value={location}
          />
        </Box>
        <HStack
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
          alignItems={"center"}
          p="2"
        >
          <Text pl="2" fontFamily="Poppins_400Regular">
            Selecione uma data:
          </Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{ flex: 1 }}
          />
        </HStack>
        <VStack
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
          p={2}
          space="2"
        >
          <HStack space="2">
            {image2 === null && (
              <Pressable
                bg="#f6f6f6"
                w="20"
                h="12"
                rounded="xl"
                alignItems="center"
                justifyContent="center"
                _pressed={{ opacity: 80 }}
                onPress={pickImage}
              >
                <AntDesign name="plus" size={21} color="black" />
              </Pressable>
            )}
            {image && (
              <Box w="20" h="12" rounded="xl">
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              </Box>
            )}
            {image2 && (
              <Box w="20" h="12" rounded="xl">
                <Image
                  source={{ uri: image2 }}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              </Box>
            )}
          </HStack>
          {image ? (
            <Box w="full" h="3xs" rounded="xl" borderWidth="1">
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </Box>
          ) : (
            <Box
              bg="#f6f6f6"
              w="full"
              h="3xs"
              rounded="xl"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontFamily="Poppins_400Regular">
                Clique no + para adicionar uma foto
              </Text>
            </Box>
          )}
        </VStack>
        <Button
          disabled={isEmpty}
          w="full"
          onPress={addPost}
          variant="unstyled"
          backgroundColor={isEmpty ? "#e6e6e6" : "#37B777"}
          borderRadius={"lg"}
          height={12}
          _pressed={{ opacity: 80 }}
          mb={4}
        >
          <Text fontFamily="Poppins_400Regular" color="white" fontSize={16}>
            Submeter conteúdo
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
}
