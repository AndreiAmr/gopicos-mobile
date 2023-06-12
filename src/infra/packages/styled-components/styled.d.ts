import "styled-components";
import { lightTheme, ITheme } from "./theme";

// const LightThemeProps = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
