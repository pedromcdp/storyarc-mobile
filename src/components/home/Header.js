import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Settings from "./../../../assets/images/settings.svg";
import Notifications from "./../../../assets/images/notifications.svg";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={tw`mx-4 bg-white pt-[21px] flex-row justify-between items-center`}
    >
      <Image
        style={tw`w-36 h-7`}
        source={require("./../../../assets/images/header_logo.png")}
        resizeMode="cover"
      />
      <View style={tw`flex-row`}>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Notifications width={25} height={25} style={tw`mr-4`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Settings width={25} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
