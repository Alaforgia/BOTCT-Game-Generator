import "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     borderRadius: string;

//     colors: {
//       main: string;
//       secondary: string;
//     };
//   }
//   export interface InputTheme {
//     margin: string;
//     padding: string;
//   }
// }

declare module "styled-components" {
  export interface InputTheme {
    inputMargin: string;
    inputPadding: string;
  }
}
