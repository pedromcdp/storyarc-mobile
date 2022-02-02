import React from "react";
import { HStack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ItemRow({ textContent }) {
  return (
    <TouchableOpacity>
      <HStack alignItems="center" justifyContent="space-between" gap={6}>
        <Text fontFamily="Poppins_400Regular" fontSize={18}>
          {textContent}
        </Text>
        <AntDesign name="right" size={24} color="black" />
      </HStack>
    </TouchableOpacity>
  );
}
