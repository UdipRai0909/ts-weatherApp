import { extendTheme } from "@chakra-ui/react";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const CustButton = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export const Theme = extendTheme({
  colors: {
    active: "#69b8f9",
    customBlue: "#07092f",
    customBlue1: "#393f6c",
    customBlue2: "#b4c6fc",
    customPurple: "#6875f5",
    lightGray: "#f9f9f9",
    customGray: "#c4c4c4",
    customGray1: "#EDF2F7",
    darkerGray: "#727278",
    lightWhite: "#f9f9f9",
    customBlack1: "#545454",
    customBlack2: "#5e5e5e",
  },
  textStyles: {
    grayLg: {
      color: "gray",
      fontWeight: "500",
      fontSize: "lg",
      pb: "1.5",
    },
    cGraySm: {
      color: "customGray",
      fontWeight: "500",
      fontSize: "sm",
    },
    cGrayXl: {
      color: "customGray",
      fontWeight: "500",
      fontSize: "xl",
    },
    cGrayMd: {
      color: "customGray",
      fontWeight: "500",
      fontSize: "md",
      pb: "1.5",
    },
    cBlue14xl: {
      as: "span",
      color: "customBlue1",
      fontSize: "4xl",
      fontWeight: "500",
    },
    cBlue1Md: {
      color: "customBlue1",
      fontSize: "md",
      fontWeight: "500",
    },
    cBlack2Sm: {
      color: "customBlack2",
      fontSize: "sm",
      fontWeight: "500",
    },
    cBlack2Md: {
      color: "customBlack2",
      fontSize: "md",
      fontWeight: "500",
    },
    cBlack1500: {
      color: "customBlack1",
      fontWeight: "500",
    },
    cBlack1600: {
      color: "customBlack1",
      fontWeight: "600",
    },
  },
  styles: {
    global: {
      CustomFlex: {
        weatherCardWeekly: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
          // bg:{"active"},
          h: "175px",
          w: "full",
          maxW: "330px",
          maxH: "175px",
          boxShadow: "2xl",
          rounded: "md",
          zIndex: "1",
          // _hover:{{ bg: "active" }},
        },
      },
    },
  },
});
