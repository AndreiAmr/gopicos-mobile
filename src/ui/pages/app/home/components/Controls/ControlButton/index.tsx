import React from "react";
import * as S from "./styles";
import FAIcons from "@expo/vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";

interface ControlButtonProps {
  iconName: string;
  onPress?: () => void;
  props?: any;
}

const ControlButton = ({ iconName, onPress, props }: ControlButtonProps) => {
  return (
    <S.Container onPress={onPress} {...props}>
      <S.Gradient
        colors={["#56565A", "#121215"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <FAIcons name={iconName as any} color="#FF927B" size={RFValue(14)} />
      </S.Gradient>
    </S.Container>
  );
};

export default ControlButton;
