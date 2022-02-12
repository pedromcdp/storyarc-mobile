import { HStack, Image, Pressable } from "native-base";

import { useNavigation } from "@react-navigation/native";

import Settings from "./../../../assets/images/settings.svg";
import Notifications from "./../../../assets/images/notifications.svg";

export function Header() {
  const navigation = useNavigation();
  return (
    <HStack mx={4} justifyContent="space-between" pt={21}>
      <Image
        alt="Logotipo da plataforma storyarc"
        bg={"white"}
        resizeMode="cover"
        width="144"
        height="28"
        source={require("./../../../assets/images/header_logo.png")}
      />
      <HStack space={4}>
        <Pressable
          _pressed={{ opacity: 20 }}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Notifications width={25} height={25} />
        </Pressable>
        <Pressable
          _pressed={{ opacity: 20 }}
          onPress={() => navigation.navigate("Settings")}
        >
          <Settings width={25} height={25} />
        </Pressable>
      </HStack>
    </HStack>
  );
}
