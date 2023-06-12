import styled from "styled-components/native";

interface IStyledText {
  size: number;
  color: string;
  fontFamily: string;
  centered: boolean;
}

export const Text = styled.Text<IStyledText>`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
`;
