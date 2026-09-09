// token/semantics/spacing.ts

import { spacing as primitiveSpacing } from "../primitives/spacing";

export const spacing = {
  // Space between elements horizontally
  inline: {
    tight: primitiveSpacing[1], // 4px
    default: primitiveSpacing[2], // 8px
    comfortable: primitiveSpacing[3], // 12px
  },

  // Space between elements vertically
  stack: {
    xs: primitiveSpacing[2], // 8px
    sm: primitiveSpacing[3], // 12px
    md: primitiveSpacing[4], // 16px
    lg: primitiveSpacing[6], // 24px
    xl: primitiveSpacing[8], // 32px
  },

  // Space between larger content sections
  section: {
    sm: primitiveSpacing[8], // 32px
    md: primitiveSpacing[12], // 48px
    lg: primitiveSpacing[16], // 64px
    xl: primitiveSpacing[19], // 96px
  },

  // Responsive grid/container gutters
  grid: {
    gutter: {
      mobile: primitiveSpacing[4], // 16px
      largeMobile: primitiveSpacing[4], // 16px
      tablet: primitiveSpacing[6], // 24px
      laptop: primitiveSpacing[6], // 24px
      desktop: primitiveSpacing[8], // 32px
    },
  },
} as const;
