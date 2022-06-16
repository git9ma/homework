import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: "rgba(255, 255, 255, 1)",
      black: "rgba(0, 0, 0, 0)",
      heavyGray: "rgba(58, 58, 58)",
      mediumGray: "rgba(58, 58, 58, 0.8)",
      lightGray: "rgba(58, 58, 58, 0.7)",
    };
  }
}