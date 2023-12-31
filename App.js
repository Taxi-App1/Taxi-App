import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import UserNav from "./app/Screens/UserScreens/UserNav";
import SignNav from "./app/Screens/Login/SignNav";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { I18nProvider } from "./app/Context/I18n.js";
import { authStore } from "./app/MobX/AuthStore.js";
import { observer } from "mobx-react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "./app/ReusableTools/css.js";
import { useFonts } from "expo-font";

export default App = observer(() => {
  const { token, loading } = authStore;

  const [fontsLoaded] = useFonts({
    "Agrandi-Regular": require("./app/Fonts/Agrandir-Regular.otf"),
    "Agrandi-TextBold": require("./app/Fonts/Agrandir-TextBold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={colors.primaryYellow} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <I18nProvider>
        {token ? <UserNav /> : <SignNav />}
        <Toast />
      </I18nProvider>
    </NavigationContainer>
  );
});
