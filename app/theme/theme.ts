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
import { form } from './token/components/form';
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
    form
  },
});

export default theme;