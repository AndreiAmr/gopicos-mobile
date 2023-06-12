import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "ui/pages/auth/Login";
import Boot from "ui/pages/auth/boot";
import Home from "ui/pages/app/home";
import HomeRoutes from "./homeRoutes";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Boot"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Boot" component={Boot} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
