import styled from "styled-components/native";
import BackgroundImage from "assets/images/background.png";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const Container = styled.ImageBackground.attrs({
  source: BackgroundImage,
})`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
`;

export const TextBox = styled.View`
  width: ${widthPercentageToDP(80)}px;
  margin-top: ${heightPercentageToDP(4)}px;
`;
