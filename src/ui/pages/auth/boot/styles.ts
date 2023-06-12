import styled from "styled-components/native";
import BackgroundImg from "assets/images/background.png";
import LogoImage from "assets/images/logo.png";

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: BackgroundImg,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: LogoImage,
})`
  margin-bottom: 30px;
`;
