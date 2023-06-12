import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  position: absolute;
  bottom: ${heightPercentageToDP(5)}px;
  left: ${widthPercentageToDP(7)}px;
`;

export const Button = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(27.5)}px;
`;
