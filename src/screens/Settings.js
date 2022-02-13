//Packages Imports
import { ScrollView, Text, Box } from "native-base";
import { useSelector } from "react-redux";
//Redux
import {
  useAppSettings,
  setShowTabBarLabel,
} from "../features/AppSettingsSlice";
//Components
import { CellRow } from "../components";

export function Settings() {
  const settings = useSelector(useAppSettings);

  return (
    <ScrollView flex={1} bg="white">
      <Box ml={4} borderBottomWidth={1} pt={2}>
        <Text fontFamily="Poppins_500Medium">Acessibilidade</Text>
      </Box>
      <CellRow
        title="Label por baixo dos icones da barra de baixo"
        isSwitchable
        dispatchAction={setShowTabBarLabel}
        switchValue={settings.showTabBarLabel}
      />
    </ScrollView>
  );
}
