import React from "react";
import { Image } from "native-base";
import menuBars from "assets/images/menu-bars.png";
import * as S from "./styles";

interface MenuButtonProps {
  handleOpenDrawer: () => void;
}

const MenuButton = ({ handleOpenDrawer }: MenuButtonProps) => {
  return (
    <S.Container onPress={handleOpenDrawer}>
      <S.Button
        colors={["#56565A", "#121215"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Image source={menuBars} />
      </S.Button>
    </S.Container>
  );
};

export default MenuButton;
