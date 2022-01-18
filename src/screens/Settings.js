import React from "react";
import { View, Text, Switch, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  useAppSettings,
  setShowTabBarLabel,
} from "../features/AppSettingsSlice";
import tw from "twrnc";

export default function Settings() {
  const settings = useSelector(useAppSettings);
  const dispatch = useDispatch();

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`flex-1`}>
        <View style={tw`ml-4 pt-3 border-b`}>
          <Text
            style={{ fontFamily: "Poppins_500Medium", letterSpacing: 0.21 }}
          >
            Acessibilidade
          </Text>
        </View>
        <View
          style={tw`py-4 ml-4 flex-row items-center justify-center border-b border-[#E2E2E2]`}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
              flexShrink: 1,
            }}
          >
            Label por baixo dos icones da barra de baixo
          </Text>
          <Switch
            style={tw`mr-4 ml-4`}
            trackColor={{ true: "#37B777" }}
            onValueChange={() => {
              dispatch(setShowTabBarLabel());
            }}
            value={settings.showTabBarLabel}
          />
        </View>
      </ScrollView>
    </View>
  );
}
