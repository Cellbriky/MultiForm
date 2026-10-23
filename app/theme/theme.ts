import { createTheme } from '@mui/material/styles';
import {
  typography,
  padding,
  spacing,
  radius,
  shadow,
  fontWeight,
  letterSpacing,
  layoutToken,
  breakpoints,
} from './token/semantics/index';
import { form } from './token/components/form';

export const theme = createTheme({
  // Configure MUI's actual responsive breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },

  // Keep your custom design-system tokens
  tokens: {
    typography,
    padding,
    spacing,
    radius,
    shadow,
    fontWeight,
    letterSpacing,
    form,
    layoutToken,
    breakpoints,
  },
});

export default theme;
