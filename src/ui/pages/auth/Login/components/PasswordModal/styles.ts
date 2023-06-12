import { BlurView } from "expo-blur";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px 36px;
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  gap: 40px;
`;
