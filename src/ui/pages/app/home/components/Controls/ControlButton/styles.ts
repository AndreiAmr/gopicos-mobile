import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient)`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;
