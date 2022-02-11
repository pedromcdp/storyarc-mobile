import { ScrollView } from "native-base";
import { CellRow } from "../components";
import { version } from "../../package.json";

export function About() {
  return (
    <ScrollView flex={1} bg="white">
      <CellRow title="Versão" subtitle={version} />
      <CellRow title="Termos e condições" hasChild isPressable />
      <CellRow title="Informações legais" hasChild isPressable />
      <CellRow title="storyarc.pt" hasChild openWeb isPressable />
    </ScrollView>
  );
}
