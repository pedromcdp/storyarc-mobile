import React, { useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";
import Search from "../../../assets/images/search.svg";
import { useDispatch } from "react-redux";
import { toggleShowSearch } from "../../features/HomeSlice";
import { isIphoneX } from "react-native-iphone-x-helper";

export default function SearchBar() {
  const searchRef = useRef();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const notchedIphone = isIphoneX();

  useEffect(() => {
    searchRef.current.focus();
  });

  return (
    <MotiView
      from={{ top: -100 }}
      animate={{ top: 0 }}
      exit={{
        top: -100,
      }}
      transition={{
        type: "timing",
      }}
      style={{
        position: "absolute",
        backgroundColor: "white",
        top: 0,
        width: "100%",
        height: notchedIphone ? 103 : 86,
      }}
    >
      <View style={tw`px-4 pt-[${insets.top}] flex-row h-full items-center`}>
        <TouchableOpacity onPress={() => dispatch(toggleShowSearch())}>
          <AntDesign
            name="arrowleft"
            size={25}
            color="black"
            style={tw`mr-2`}
          />
        </TouchableOpacity>
        <View
          style={tw`bg-[#f6f6f6] rounded-[20px] h-10 px-5 flex-row flex-grow items-center`}
        >
          <Search
            width={20}
            height={20}
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "black",
              marginRight: 4,
            }}
          />
          <TextInput
            ref={searchRef}
            placeholder="pesquise por locais"
            placeholderTextColor={"#909090"}
            style={{ fontFamily: "Poppins_400Regular" }}
          />
        </View>
      </View>
    </MotiView>
  );
}
