import { createTheme } from "@mui/material/styles";
import {
  typography,
  padding,
  spacing,
  layout,
  radius,
  shadow,
  fontWeight,
  letterSpacing,
} from './token/semantics/index';
export const theme = createTheme({
  tokens: {
    typography,
    padding,
    spacing,
    layout,
    radius,
    shadow,
    fontWeight,
    letterSpacing,
  },
});

export default theme;