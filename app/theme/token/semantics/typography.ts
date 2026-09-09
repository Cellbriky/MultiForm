
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textTransform,
} from "../primitives/typography";

export const typography = {
  displayXL: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize["7xl"],
      tablet: fontSize["8xl"],
      desktop: fontSize["10xl"],
    },
    fontWeight: fontWeight.bold,
    lineHeight: {
      mobile: lineHeight["8xl"],
      tablet: lineHeight["9xl"],
      desktop: lineHeight["11xl"],
    },
    letterSpacing: letterSpacing.tightest,
  },

  display: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize["6xl"],
      tablet: fontSize["7xl"],
      desktop: fontSize["9xl"],
    },
    fontWeight: fontWeight.bold,
    lineHeight: {
      mobile: lineHeight["7xl"],
      tablet: lineHeight["8xl"],
      desktop: lineHeight["10xl"],
    },
    letterSpacing: letterSpacing.tighter,
  },

  h1: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize["5xl"],
      tablet: fontSize["8xl"],
      desktop: fontSize["8xl"],
    },
    fontWeight: fontWeight.bold,
    lineHeight: {
      mobile: lineHeight["6xl"],
      tablet: lineHeight["8xl"],
      desktop: lineHeight["9xl"],
    },
    letterSpacing: letterSpacing.tight,
  },

  h2: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize["3xl"],
      tablet: fontSize["4xl"],
      desktop: fontSize["6xl"],
    },
    //fontWeight: fontWeight.semibold,
    lineHeight: {
      mobile: lineHeight["7xl"],
      tablet: lineHeight["6xl"],
      desktop: lineHeight["7xl"],
    },
    letterSpacing: "-0.25px",
  },

  h3: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize["2xl"],
      tablet: fontSize["3xl"],
      desktop: fontSize["4xl"],
    },
   // fontWeight: fontWeight.semibold,
    lineHeight: {
      mobile: lineHeight["6xl"],
      tablet: lineHeight["7xl"],
      desktop: lineHeight["5xl"],
    },
  },

  h4: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize.xl,
      desktop: fontSize["2xl"],
    },
    //fontWeight: fontWeight.semibold,
    lineHeight: {
      mobile: lineHeight["2xl"],
      desktop: lineHeight["4xl"],
    },
  },

  h5: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize.lg,
      desktop: fontSize.xl,
    },
    //fontWeight: fontWeight.semibold,
    lineHeight: lineHeight["2xl"],
  },

  h6: {
    fontFamily: fontFamily.sans,
    fontSize: {
      mobile: fontSize.md,
      desktop: fontSize.lg,
    },
    //fontWeight: fontWeight.semibold,
    lineHeight: {
      mobile: lineHeight.lg,
      desktop: lineHeight.xl,
    },
  },

  bodyLarge: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight["2xl"],
  },

  body: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.lg,
  },

  bodySmall: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.md,
  },

  caption: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm,
  },

  overline: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.xs,
    //fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.md,
    letterSpacing: letterSpacing.loose,
    textTransform: textTransform.uppercase,
  },
} as const;

