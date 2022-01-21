import React from "react";
import {
  Box,
  Center,
  Text,
  VStack,
  Image,
  Divider,
  Input,
  KeyboardAvoidingView,
  Button,
  HStack,
  Pressable,
} from "native-base";
import { Keyboard, TouchableOpacity } from "react-native";

export default function LogIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      onStartShouldSetResponder={Keyboard.dismiss}
      flex={1}
    >
      <Center flex={1} px="4" backgroundColor={"white"}>
        <VStack width={"full"}>
          <Center>
            <Image
              source={require("../../assets/images/header_logo.png")}
              resizeMode="cover"
              width={274}
              height={57}
              alt="storyarc logo"
              mb={12}
            />
          </Center>

          <Box shadow={2} backgroundColor={"white"} borderRadius={"xl"} mb={6}>
            <Input
              placeholder="Email"
              my={2}
              mx={2}
              variant={"unstyled"}
              fontFamily={"Poppins_400Regular"}
              fontSize={14}
            />
            <Divider />
            <Input
              type="password"
              placeholder="Password"
              my={2}
              mx={2}
              variant={"unstyled"}
              fontFamily={"Poppins_400Regular"}
              fontSize={14}
            />
          </Box>
          <Button
            onPress={() => console.log("Calma que isso ainda não está feito")}
            variant="unstyled"
            backgroundColor="#37B777"
            borderRadius={"xl"}
            height={16}
            mb={4}
          >
            <Text fontFamily="Poppins_400Regular" color="white" fontSize={16}>
              Iniciar Sessão
            </Text>
          </Button>

          <HStack justifyContent={"center"} space={1}>
            <Text fontFamily={"Poppins_400Regular"}>
              Ainda não tem uma conta?
            </Text>
            <TouchableOpacity>
              <Text color="#37B777">Criar Conta</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Center>
    </KeyboardAvoidingView>
  );
}
