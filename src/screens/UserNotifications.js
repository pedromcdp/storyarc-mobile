import { ScrollView } from "native-base";
import { CellRow } from "../components";

export function UserNotifications() {
  return (
    <ScrollView flex={1} bg="white">
      <CellRow
        title="Lugares históricos próximos"
        subtitle="Serás notificado quando estiveres perto de marcos históricos"
        isSwitchable
      />
      <CellRow
        title="Este dia na história"
        subtitle="Serás notificado no dia de marcos históricos"
        isSwitchable
      />
      <CellRow
        title="Mais apreciados esta semana"
        subtitle="Serás notificado com os melhores conteúdos colocados na plataforma durante a semana"
        isSwitchable
      />
      <CellRow
        title="Recriar fotos"
        subtitle="Serás notificado para recriar fotos antigas baseado na sua localização atual"
        isSwitchable
      />
    </ScrollView>
  );
}
