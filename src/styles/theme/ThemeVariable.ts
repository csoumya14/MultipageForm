import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    primary: {
      lightBlue: "hsl(227.9,100%,83.5%)",
      borderColor: "hsl(64%,24%,84%)",
      grey: "hsl(231,10.5%,62.7%)",
      background: "hsl(217.5,100%,96.9%)",
      denim: "hsl(213.1,95.6%,17.8%)",
      orange: "hsl(22.8,100%,74.7%)",
      pink: "hsl(353.5,90.9%,74.1%)",
      purple: "hsl(243.1,100%,62.2%)",
      redErrors: "hsl(353.8,84.3%,57.5%)",
      skyBlue: "hsl(205.7,94%,86.9%)",
      veryLightGrey: "hsl(231.4,100%,98.6%)",
    },
    neutral: {
      black: "hsl(230,35.3%,6.7%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  fontSizes: {
    headingFont: {
      smallScreenSize: "32px",
      mediumScreenSize: "32px",
      largeScreenSize: "32px",
    },
    bodyFont: {
      smallScreenSize: "12px",
      mediumScreenSize: "14px",
      largeScreenSize: "16px",
    },
  },
  mediaSize: {
    s: "576px",
    md: "768px",
    lg: "992px",
    xlg: "1200px",
  },
  lineHeight: {
    bodyLargeScreen: 25,
  },
};

export { theme };
