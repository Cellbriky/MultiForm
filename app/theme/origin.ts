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
import {form} from "./token/components/form"
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
      form: typeof form;
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
      form?: typeof form;
    };
  }
}
