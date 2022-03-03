import { useState, useEffect } from "react";
import {
  VStack,
  Text,
  KeyboardAvoidingView,
  Input,
  Box,
  Button,
} from "native-base";
import { Keyboard, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { ModalHeader } from "../components";

export function CriarConta({ navigation }) {
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (nome === "") {
      setIsEmpty(true);
    } else if (email === "") {
      setIsEmpty(true);
    } else if (password === "") {
      setIsEmpty(true);
    } else if (confirmPassword === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [nome, email, password, confirmPassword]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function handleAccountCreation() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((acc) => {
        acc.user.updateProfile({ displayName: nome, photoURL: image });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      onStartShouldSetResponder={Keyboard.dismiss}
      flex={1}
      bg="white"
    >
      <StatusBar style={Platform.OS === "ios" && "light"} />
      <ModalHeader navigation={navigation} text="Criar Conta" />
      <VStack pt={4} mx={4} space={4} alignItems="center">
        <Image
          source={
            image ? { uri: image } : require("../../assets/images/user_img.png")
          }
          style={{
            borderRadius: 100,
            width: 85,
            height: 85,
          }}
        />
        <TouchableOpacity onPress={pickImage}>
          <Text fontFamily="Poppins_500Medium" color="#37B777" mb={4}>
            Adicionar fotografia
          </Text>
        </TouchableOpacity>
        <Box
          w="full"
          h="12"
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
        >
          <Input
            pl={4}
            h="full"
            w="full"
            borderRadius={"xl"}
            backgroundColor="white"
            placeholder="Nome"
            variant={"unstyled"}
            fontFamily={"Poppins_400Regular"}
            fontSize={14}
            value={nome}
            onChangeText={setNome}
            keyboardAppearance="light"
            keyboardType="default"
            autoCapitalize="sentences"
          />
        </Box>
        <Box
          w="full"
          h="12"
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
        >
          <Input
            pl={4}
            h="full"
            w="full"
            borderRadius={"xl"}
            backgroundColor="white"
            placeholder="E-mail"
            variant={"unstyled"}
            fontFamily={"Poppins_400Regular"}
            fontSize={14}
            value={email}
            onChangeText={setEmail}
            keyboardAppearance="light"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Box>
        <Box
          w="full"
          h="12"
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
        >
          <Input
            pl={4}
            h="full"
            w="full"
            borderRadius={"xl"}
            backgroundColor="white"
            placeholder="Password"
            variant={"unstyled"}
            fontFamily={"Poppins_400Regular"}
            fontSize={14}
            value={password}
            onChangeText={setPassword}
            keyboardAppearance="light"
            keyboardType="default"
            autoCapitalize="sentences"
          />
        </Box>
        <Box
          w="full"
          h="12"
          shadow={2}
          backgroundColor={"white"}
          borderRadius={"xl"}
        >
          <Input
            pl={4}
            h="full"
            w="full"
            borderRadius={"xl"}
            backgroundColor="white"
            placeholder="Confirme a password"
            variant={"unstyled"}
            fontFamily={"Poppins_400Regular"}
            fontSize={14}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            keyboardAppearance="light"
            keyboardType="default"
            autoCapitalize="sentences"
          />
        </Box>
        <Button
          disabled={isEmpty}
          w="full"
          onPress={handleAccountCreation}
          variant="unstyled"
          backgroundColor={isEmpty ? "#e6e6e6" : "#37B777"}
          borderRadius={"lg"}
          height={12}
          _pressed={{ opacity: 80 }}
          mb={4}
        >
          <Text fontFamily="Poppins_400Regular" color="white" fontSize={16}>
            Criar Conta
          </Text>
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
}
