import { Image, Appearance, Dimensions } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

export default function TabBar() {
  const notchedIphone = isIphoneX();
  return (
    <Image
      source={
        notchedIphone
          ? require("../../../assets/images/notchedBar.png")
          : require("../../../assets/images/defaultBar.png")
      }
      style={{
        bottom: 0,
        position: "absolute",
        width: Dimensions.get("window").width,
        height: notchedIphone ? 84 : 49,
        zIndex: 0,
      }}
    />
  );
}
