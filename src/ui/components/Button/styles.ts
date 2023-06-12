import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme, enabled }) =>
    !enabled ? theme.colors.green_800 + "50" : theme.colors.green_800};
  height: ${RFValue(43)}px;

  border-radius: ${RFValue(7)}px;
  justify-content: center;
`;
