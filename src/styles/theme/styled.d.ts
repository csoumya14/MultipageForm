import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        lightBlue: string;
        borderColor: string;
        grey: string;
        background: string;
        denim: string;
        orange: string;
        pink: string;
        purple: string;
        redErrors: string;
        skyBlue: string;
        veryLightGrey: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    fontSizes: {
      headingFont: {
        smallScreenSize: string;
        mediumScreenSize: string;
        largeScreenSize: string;
      };
      bodyFont: {
        smallScreenSize: string;
        mediumScreenSize: string;
        largeScreenSize: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
    lineHeight: {
      bodyLargeScreen: number;
    };
  }
}
