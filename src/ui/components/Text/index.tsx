import React from "react";
import { lightTheme } from "infra/packages/styled-components/theme";
import { FontsEnum } from "infra/types/components/text";
import * as S from "./styles";

interface TextProps {
  children: any;
  fontFamily: FontsEnum;
  color: string;
  size: "sm" | "md" | "lg";
  centered?: boolean;
}

const Text = ({ children, fontFamily, color, size, centered }: TextProps) => {
  const sizes = {
    sm: 13,
    md: 22,
    lg: 26,
  };

  return (
    <S.Text
      size={sizes[size]}
      color={color}
      fontFamily={fontFamily}
      centered={centered}
    >
      {children}
    </S.Text>
  );
};

export default Text;
