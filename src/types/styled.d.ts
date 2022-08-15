import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
    children?: React.ReactNode;
    children?: JSX.Element | JSX.Element[];
  }
}
