import { ScrollView } from "native-base";
import { CellRow } from "../components";
import { version } from "../../package.json";

export function About() {
  return (
    <ScrollView flex={1} bg="white">
      <CellRow title="Versão" subtitle={version} />
      <CellRow
        title="Termos e condições"
        hasChild
        isPressable
        routeName="Terms"
        routeParams={{ title: "Termos e Condições" }}
      />
      <CellRow
        title="Política de Privacidade"
        hasChild
        isPressable
        routeName="Policy"
        routeParams={{ title: "Política de Privacidade" }}
      />
      <CellRow title="storyarc.pt" hasChild openWeb isPressable />
    </ScrollView>
  );
}
