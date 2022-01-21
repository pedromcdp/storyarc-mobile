import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

export default function Profile() {
  function handleLogOut() {
    auth().signOut();
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>I'm the profile screen</Text>
      <Button title="Logout" onPress={handleLogOut} />
    </View>
  );
}
