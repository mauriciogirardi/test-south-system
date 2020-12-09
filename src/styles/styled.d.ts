import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      inputBackground: string;
      colorMenu: string;

      white: string;
      black: string;
      gray: string;
    };
  }
}
