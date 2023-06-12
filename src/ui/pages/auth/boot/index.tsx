import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { lightTheme } from "infra/packages/styled-components/theme";
import useBoot from "core/hooks/auth/boot/useBoot";
import * as S from "./styles";

const Boot = () => {
  const { init } = useBoot();
  const [isFontsLoaded] = useFonts({
    "BaiJamjuree-Regular": require("assets/fonts/BaiJamjuree-Regular.ttf"),
    "BaiJamjuree-Medium": require("assets/fonts/BaiJamjuree-Medium.ttf"),
    "BaiJamjuree-SemiBold": require("assets/fonts/BaiJamjuree-SemiBold.ttf"),
    "Inter-Regular": require("assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (isFontsLoaded) {
      setTimeout(() => {
        init();
      }, 2000);
    }
  }, [isFontsLoaded]);

  return (
    <S.Container>
      <S.Background>
        <S.Logo />
        <ActivityIndicator size="large" color={lightTheme.colors.purple_600} />
      </S.Background>
    </S.Container>
  );
};

export default Boot;
