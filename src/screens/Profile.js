//Packages Imports
import { Image } from "react-native";
import { Box, Button, Text, VStack, ZStack, Avatar } from "native-base";
import auth from "@react-native-firebase/auth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//Redux
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
//Components
import { ItemRow } from "../components";

export function Profile() {
  const insets = useSafeAreaInsets();
  const user = useSelector(useUser);

  function handleLogOut() {
    auth().signOut();
  }

  return (
    <Box flex={1} bg="white" pb={insets.bottom}>
      <ZStack width="full" height="46%">
        <Image
          source={require("../../assets/images/profilebg.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
        <Box
          width="full"
          height="full"
          bg={{
            linearGradient: {
              colors: ["white", "transparent"],
              start: [0, 0],
              end: [0, 1],
              locations: [1, 0],
            },
          }}
        />
        <VStack
          alignSelf="center"
          justifyContent="flex-end"
          alignItems="center"
          height="full"
          width="full"
        >
          <Box
            position="absolute"
            height="full"
            width="full"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              source={
                user.photoURL
                  ? { uri: user.photoURL }
                  : require("../../assets/images/user_img.png")
              }
              style={{ height: 90, width: 90, borderRadius: 100 }}
            />
          </Box>
          <Text mb={16} fontFamily="Poppins_500Medium" fontSize={18}>
            {user.displayName}
          </Text>
          {/* <Button
            mb={10}
            variant="unstyled"
            _pressed={{ opacity: 80 }}
            _text={{
              fontFamily: "Poppins_400Regular",
              color: "#37B777",
              fontSize: 15,
            }}
          >
            Editar Conta
          </Button> */}
        </VStack>
      </ZStack>
      <VStack mx={4} justifyContent="flex-end" bottom="0" flex={1} pb={20}>
        <VStack flex={1} justifyContent="center" space={6} mx={6}>
          <ItemRow textContent="Publicações próprias" routeName="OwnPosts" />
          <ItemRow textContent="Favoritos" routeName="Favourites" />
          <ItemRow textContent="Notificações" routeName="UserNotifications" />
          <ItemRow textContent="Sobre o StoryArc" routeName="About" />
        </VStack>
        <Button
          onPress={handleLogOut}
          variant="unstyled"
          backgroundColor="black"
          borderRadius={"lg"}
          height={12}
          mb={4}
          _pressed={{ opacity: 80 }}
        >
          <Text fontFamily="Poppins_500Medium" color="white" fontSize={18}>
            Encerrar Sessão
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
