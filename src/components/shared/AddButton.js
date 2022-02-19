//Packages Imports
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { isIphoneX } from "react-native-iphone-x-helper";

export function AddButton() {
  const isiPhoneXOrAbove = isIphoneX();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 54,
        height: 54,
        borderRadius: 50,
        borderColor: "#818181",
        borderWidth: 0.17,
        bottom: isiPhoneXOrAbove ? 54 : 22,
        zIndex: 10,
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.20000000298023224,
        shadowRadius: 4,
      }}
    >
      <AntDesign
        name="plus"
        size={23}
        color="black"
        style={{ alignSelf: "center" }}
      />
    </TouchableOpacity>
  );
}
