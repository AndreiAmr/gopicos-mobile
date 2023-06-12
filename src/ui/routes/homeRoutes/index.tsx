import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { omitUndefined } from "native-base/lib/typescript/theme/tools";
import Home from "ui/pages/app/home";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const HomeRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Map" component={Home} />
    </Drawer.Navigator>
  );
};

export default HomeRoutes;
