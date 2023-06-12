interface ITheme {
  colors: {
    background: string;
    background_dark: string;
    purple_600: string;
    text_light: string;
    green_800: string;
    green_600: string;
    white: string;
    orange: string;
    light_purple_21: string;
  };
}

const lightTheme: ITheme = {
  colors: {
    background: "#121215",
    purple_600: "#8257E5",
    text_light: "#D8CBF7",
    background_dark: "#18181BF0",
    green_800: "#039645",
    white: "#ffffff",
    green_600: "#04D361",
    orange: "#FF5C3A",
    light_purple_21: "#E0D7F8",
  },
};

export { lightTheme, ITheme };
