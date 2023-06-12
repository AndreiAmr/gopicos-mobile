import { lightTheme } from "infra/packages/styled-components/theme";

import { Box } from "native-base";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Text from "ui/components/Text";
import { FontsEnum } from "infra/types/components/text";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

import * as S from "./styles";

const Header = () => {
  return (
    <Box
      // height="87px"
      width={widthPercentageToDP("84")}
      position="absolute"
      top={heightPercentageToDP(5)}
      left={0}
    >
      <LinearGradient
        colors={["#56565A", "#121215"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          borderRadius: 10,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <Box
          flex={1}
          // backgroundColor={"#1E1E1E"}

          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          px="7px"
          height="67px"
          paddingLeft="12px"
        >
          <Box>
            <Text
              color={"#FF927B"}
              fontFamily={FontsEnum.BaiSemibold}
              size="md"
            >
              Pistas para iniciantes, amadores...
            </Text>
            <Text
              color={lightTheme.colors.white}
              fontFamily={FontsEnum.BaiSemibold}
              size="sm"
            >
              São Paulo, Brasil
            </Text>
          </Box>
        </Box>
      </LinearGradient>

      <S.PicosFindedContainer
        colors={["#56565A", "#121215"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text
          color={lightTheme.colors.white}
          fontFamily={FontsEnum.BaiSemibold}
          size="sm"
        >
          1.000 Picos encontrados
        </Text>
      </S.PicosFindedContainer>
    </Box>
  );
};

export default Header;
