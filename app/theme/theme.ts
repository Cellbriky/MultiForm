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
} from './token/semantics/index';
import { form } from './token/components/form';
export const theme = createTheme({
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
  },
});

export default theme;
