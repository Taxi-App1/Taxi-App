import { View, StyleSheet } from "react-native";
import Map from "./Map";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import DrawerContent from "./DrawerContent";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const UserNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#DCDFE4",
        headerStyle: {
          backgroundColor: "#212429",
        },
        drawerStyle: {
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{
          headerTitle: "Book a Taxi",
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#DCDFE4"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
  },
});

export default UserNav;
