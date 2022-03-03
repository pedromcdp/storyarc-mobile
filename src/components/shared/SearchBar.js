//Packages Imports
import { View, TextInput, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { isIphoneX } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc"; // --> to be replaced by native base
//svg's
import Search from "../../../assets/images/search.svg";

export function SearchBar({ navigation, value, setValue, handleChange }) {
  const insets = useSafeAreaInsets();
  const notchedIphone = isIphoneX();

  return (
    <MotiView
      delay={50}
      from={{ top: -100 }}
      animate={{ top: 0 }}
      exit={{
        top: -100,
      }}
      transition={{
        type: "timing",
        duration: 200,
      }}
      style={{
        backgroundColor: "white",
        top: 0,
        width: "100%",
        height: notchedIphone ? 103 : 86,
      }}
    >
      <View style={tw`mx-4 pt-[${insets.top}] flex-row h-full items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={25}
            color="black"
            style={tw`mr-2`}
          />
        </TouchableOpacity>
        <View
          style={tw`bg-[#f6f6f6] rounded-[20px] h-10 px-3 flex-row flex-grow items-center`}
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
            autoFocus
            value={value}
            onChangeText={setValue}
            onChange={handleChange}
            placeholder="pesquise por locais"
            placeholderTextColor={"#909090"}
            style={({ fontFamily: "Poppins_400Regular" }, tw`flex-1`)}
            keyboardAppearance="light"
          />
        </View>
      </View>
    </MotiView>
  );
}
