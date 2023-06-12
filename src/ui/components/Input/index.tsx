import React, { useState } from "react";
import * as S from "./styles";
import Text from "../Text";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";

interface InputProps {
  label: string;
  mt?: boolean;
  value: string;
  onChange: (value: string) => void;
  isSecurity?: boolean;
  error?: string;
}

const Input = ({
  label,
  mt,
  value,
  onChange,
  error,
  isSecurity,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <S.Container mt={mt}>
      <Text
        color={lightTheme.colors.white}
        fontFamily={FontsEnum.InterRegular}
        size="md"
      >
        {label}
      </Text>
      <S.Input
        placeholder="digite aqui..."
        placeholderTextColor={lightTheme.colors.text_light}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        value={value}
        onChangeText={onChange}
        error={!!error}
        secureTextEntry={isSecurity}
      />
      <Text
        color={lightTheme.colors.orange}
        fontFamily={FontsEnum.InterRegular}
        size="sm"
      >
        {error}
      </Text>
    </S.Container>
  );
};

export default Input;
