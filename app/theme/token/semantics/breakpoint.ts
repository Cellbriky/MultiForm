import { breakpoints as primitiveBreakpoints } from "../primitives/breakpoint";

export const breakpoints = {
  mobile: primitiveBreakpoints.xs, //below 480px
  largeMobile: primitiveBreakpoints.sm, //below 768px
  tablet: primitiveBreakpoints.md, //below 1024px
  laptop: primitiveBreakpoints.lg, //below 1440px
  desktop: primitiveBreakpoints.xl, //above 1440px
} as const; 
