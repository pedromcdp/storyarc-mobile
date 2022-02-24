import { useState } from "react";
import {
  Box,
  Divider,
  Input,
  Center,
  Text,
  VStack,
  Image,
  KeyboardAvoidingView,
  Button,
  HStack,
} from "native-base";
import { Keyboard, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  GoogleSignin.configure({
    webClientId:
      "389867033099-e5hk7n5fmsg8mg0qff6s21gdmfpqe67d.apps.googleusercontent.com",
  });

  //Deal with this later
  function handleLogIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User logged in!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

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
              value={email}
              onChangeText={(e) => setEmail(e)}
              keyboardAppearance="light"
              keyboardType="email-address"
              autoCapitalize="none"
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
              value={password}
              onChangeText={(e) => setPassword(e)}
              keyboardAppearance="light"
            />
          </Box>
          <Button
            onPress={handleLogIn}
            variant="unstyled"
            backgroundColor="#37B777"
            borderRadius={"lg"}
            height={12}
            _pressed={{ opacity: 80 }}
            mb={4}
          >
            <Text fontFamily="Poppins_400Regular" color="white" fontSize={16}>
              Iniciar Sessão
            </Text>
          </Button>
          <HStack justifyContent={"center"} space={1} mb="4">
            <Text fontFamily={"Poppins_400Regular"}>
              Ainda não tem uma conta?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CriarConta")}>
              <Text color="#37B777">Criar Conta</Text>
            </TouchableOpacity>
          </HStack>
          <Divider />
          <Button
            mt={4}
            onPress={onGoogleButtonPress}
            variant="unstyled"
            backgroundColor="white"
            shadow="2"
            borderRadius={"lg"}
            height={"12"}
            mb={4}
            _pressed={{ opacity: 80 }}
          >
            <HStack alignItems="center" space={3}>
              <Image
                source={require("../../assets/images/glogo.png")}
                width={7}
                height={7}
                alt="Google logo"
              />
              <Text fontFamily="Poppins_400Regular" fontSize={16}>
                Inicie Sessão com o Google
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Center>
    </KeyboardAvoidingView>
  );
}
