import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";

export default function Header() {
  return (
    <View style={tw`px-4 bg-white pt-[21px]`}>
      <Image
        style={tw`w-36 h-7`}
        source={require("./../../../assets/images/header_logo.png")}
      />
    </View>
  );
}
