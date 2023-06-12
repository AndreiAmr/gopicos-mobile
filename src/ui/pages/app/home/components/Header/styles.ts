import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

export const PicosFindedContainer = styled(LinearGradient)`
  width: ${widthPercentageToDP(40)}px;
  border-radius: ${RFValue(10)}px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-top: 5px;
  height: 33px;
  /* align-items: center; */
  justify-content: center;
  padding-left: 12px;
`;
