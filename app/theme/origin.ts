import {typography} from "./token/semantics/index";
import {
  padding,
  spacing,
  layoutToken,
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
      layoutToken: typeof layoutToken;
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
      layoutToken?: typeof layoutToken;
      breakpoints?: typeof breakpoints;
      radius?: typeof radius;
      shadow?: typeof shadow;
      fontWeight?: typeof fontWeight;
      letterSpacing?: typeof letterSpacing;
      form?: typeof form;
    };
  }
}
