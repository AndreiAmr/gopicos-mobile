import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "./styled-components/theme";
import {
  GestureHandlerRootView,
  RotationGestureHandler,
  TapGestureHandler,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";

const PackagesProviders = ({ children }: PropsWithChildren) => {
  const LibsGestureHandler = gestureHandlerRootHOC(() => (
    <ThemeProvider theme={lightTheme}>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </ThemeProvider>
  ));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LibsGestureHandler />
    </GestureHandlerRootView>
  );
};

export default PackagesProviders;
