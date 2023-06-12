import { BlurView } from "expo-blur";
import React, { PropsWithChildren } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import * as S from "./style";

const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>
      <BlurView
        intensity={10}
        tint="dark"
        style={{ paddingVertical: RFValue(24), paddingHorizontal: RFValue(13) }}
      >
        {children}
      </BlurView>
    </S.Container>
  );
};

export default FormContainer;
