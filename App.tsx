import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import Background from "assets/images/background.png";

import AppRoutes from "ui/routes/index";
import PackagesProviders from "infra/packages/index";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import MapView from "react-native-maps";

export default function App() {
  return (
    <PackagesProviders>
      <Toast />
      <ImageBackground source={Background} style={styles.container}>
        <StatusBar style="light" translucent />
        <AppRoutes />
      </ImageBackground>
    </PackagesProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121215",
  },
});
