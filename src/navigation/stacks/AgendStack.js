import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DocumentacionScreen, DocumentacionVerScreen } from "../../screens/Documentacion";
import { AgendarScreen, AgendarCrearScreen } from "../../screens/Agendar";
import { VerAgendaScreen } from "../../screens/Veragenda"
import { MensajeriaScreen, MensajeriaEnviadosScreen, MensajeriaRecibidosScreen } from "../../screens/Mensajeria"
import { NovedadesScreen } from "../../screens/Novedades"
import { screensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function AgendStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.agend.homeagend} component={DocumentacionScreen} />
      <Stack.Screen name={screensName.agend.documentacionVer} component={DocumentacionVerScreen} />
      <Stack.Screen name={screensName.agend.agendar} component={AgendarScreen} />
      <Stack.Screen name={screensName.agend.agendarCrear} component={AgendarCrearScreen} />
      <Stack.Screen name={screensName.agend.veragenda} component={VerAgendaScreen} />
      <Stack.Screen name={screensName.agend.mensajeria} component={MensajeriaScreen} />
      <Stack.Screen name={screensName.agend.mensajeriaVerEnviados} component={MensajeriaEnviadosScreen} />
      <Stack.Screen name={screensName.agend.mensajeriaVerRecibidos} component={MensajeriaRecibidosScreen} />
      <Stack.Screen name={screensName.agend.novedades} component={NovedadesScreen} />
    </Stack.Navigator>
  );
}