import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import React from "react";
import { ActivityIndicator } from "react-native";
import Text from "../Text";
import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
  isLoading?: boolean;
}

const Button = ({ onPress, isLoading }: ButtonProps) => {
  return (
    <S.Container onPress={onPress} enabled={!isLoading}>
      {!isLoading ? (
        <Text
          color={lightTheme.colors.white}
          size="md"
          fontFamily={FontsEnum.BaiSemibold}
          centered
        >
          Entrar
        </Text>
      ) : (
        <ActivityIndicator color={lightTheme.colors.purple_600} size="small" />
      )}
    </S.Container>
  );
};

export default Button;
