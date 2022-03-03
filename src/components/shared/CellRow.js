import { HStack, VStack, Text, Pressable, Box, Switch } from "native-base";
import { Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

export function CellRow({
  title,
  subtitle,
  hasChild,
  openWeb,
  routeName,
  routeParams,
  isSwitchable,
  isPressable,
  dispatchAction,
  switchValue,
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function openWebsite() {
    Linking.openURL("https://www.storyarc.pt");
  }

  function navigate(id) {
    navigation.navigate(id, routeParams);
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
        _pressed={{
          opacity: isPressable ? 20 : 100,
        }}
        onPress={() =>
          routeName ? navigate(routeName) : openWeb && openWebsite()
        }
        py={subtitle ? 4 : 6}
        minH={20}
        justifyContent="center"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <VStack width="70%">
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
              onValueChange={() => {
                dispatch(dispatchAction());
              }}
              isChecked={switchValue}
            />
          )}
        </HStack>
      </Pressable>
    </Box>
  );
}
