import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export function Terms() {
  return (
    <View>
      <StatusBar style={Platform.OS === "ios" && "light"} />
      <Text>Terms</Text>
    </View>
  );
}
