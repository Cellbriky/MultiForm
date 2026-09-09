import {typography} from "./token/semantics/index";
import {
  padding,
  spacing,
  layout,
  breakpoints,
  radius,
  shadow,
  fontWeight,
  letterSpacing,
} from './token/semantics/index';
declare module "@mui/material/styles" {
  interface Theme {
    tokens: {
      typography: typeof typography;
      padding: typeof padding;
      spacing: typeof spacing;
      layout: typeof layout;
      breakpoints: typeof breakpoints;
      radius: typeof radius;
      shadow: typeof shadow;
      fontWeight: typeof fontWeight;
      letterSpacing: typeof letterSpacing;
    };
  }

  interface ThemeOptions {
    tokens?: {
      typography?: typeof typography;
      padding?: typeof padding;
      spacing?: typeof spacing;
      layout?: typeof layout;
      breakpoints?: typeof breakpoints;
      radius?: typeof radius;
      shadow?: typeof shadow;
      fontWeight?: typeof fontWeight;
      letterSpacing?: typeof letterSpacing;
    };
  }
}
