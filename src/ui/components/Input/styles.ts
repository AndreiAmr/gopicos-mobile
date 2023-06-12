import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontsEnum } from "infra/types/components/text";

export const Container = styled.View<{ mt?: boolean }>`
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${RFValue(8)}px;
    `}
`;

export const Input = styled.TextInput<{ isFocused?: boolean; error?: boolean }>`
  width: 100%;
  height: ${RFValue(43)}px;
  background: ${({ theme }) => theme.colors.background_dark};
  border-radius: ${RFValue(7)}px;
  margin-top: ${RFValue(6)}px;
  font-size: ${RFValue(16)}px;
  letter-spacing: 1px;
  padding-horizontal: ${RFValue(12)}px;
  font-family: ${FontsEnum.BaiMedium};
  color: ${({ theme }) => theme.colors.text_light};

  border-width: ${RFValue(1.5)}px;
  border-color: ${({ theme, isFocused, error }) =>
    error
      ? theme.colors.orange
      : isFocused
      ? theme.colors.green_600
      : theme.colors.background_dark};
`;
