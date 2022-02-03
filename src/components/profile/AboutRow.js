import { HStack, VStack, Text, Pressable, Box, Switch } from "native-base";
import { Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AboutRow({
  title,
  subtitle,
  hasChild,
  openWeb,
  routeName,
  isSwitchable,
  isPressable,
}) {
  const navigation = useNavigation();
  function openWebsite() {
    Linking.openURL("https://www.storyarc.pt");
  }

  function navigate(id) {
    navigation.navigate(id);
  }

  return (
    <Box
      ml={4}
      pr={4}
      borderBottomWidth={1}
      borderBottomColor="#E2E2E2"
      justifyContent="center"
    >
      <Pressable
        _pressed={{ opacity: isPressable ? 20 : 100 }}
        onPress={() => openWeb && openWebsite()}
        my={subtitle ? 4 : 6}
      >
        <HStack justifyContent="space-between">
          <VStack width="84%">
            <Text fontFamily="Poppins_500Medium" fontSize={16}>
              {title}
            </Text>
            {subtitle && (
              <Text
                fontFamily="Poppins_400Regular"
                fontSize={14}
                color="#6C6C6C"
              >
                {subtitle}
              </Text>
            )}
          </VStack>
          {hasChild && <AntDesign name="right" size={20} color="black" />}
          {isSwitchable && (
            <Switch
              trackColor={{ true: "#37B777", false: "#767577" }}
              thumbColor="white"
            />
          )}
        </HStack>
      </Pressable>
    </Box>
  );
}
