import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Search from "../../../assets/images/search.svg";
import { useDispatch } from "react-redux";
import { toggleShowSearch } from "../../features/HomeSlice";

export default function HeaderSearch() {
  const dispatch = useDispatch();
  return (
    <View style={tw`px-4 bg-white pt-6 pb-3`}>
      <View
        onStartShouldSetResponder={() => dispatch(toggleShowSearch())}
        style={tw`bg-[#f6f6f6] rounded-[20px] h-12 px-5 flex-row items-center `}
      >
        <Search width={20} height={20} style={tw`text-black`} />
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            color: "#909090",
            marginLeft: 6,
          }}
        >
          Pesquise por locais
        </Text>
      </View>
    </View>
  );
}
