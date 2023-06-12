import { widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ffffff14;
  border-radius: 10px;

  filter: blur(10);
  width: ${widthPercentageToDP(80)}px;
  margin-top: 70px;
  filter: blur(10px);
`;
