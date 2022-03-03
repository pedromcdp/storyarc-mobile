//Packages Imports
import { TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { isIphoneX } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useUser } from "../../features/UserSlice";

export function AddButton() {
  const isiPhoneXOrAbove = isIphoneX();
  const user = useSelector(useUser);
  const navigation = useNavigation();

  function handlePress() {
    if (user) {
      navigation.navigate("AddContent");
    } else {
      return Alert.alert(
        "Erro",
        "É necessário ter sessão iniciada para publicar conteúdo",
        [{ text: "Fechar" }]
      );
    }
  }
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
        elevation: 1,
      }}
      onPress={handlePress}
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
