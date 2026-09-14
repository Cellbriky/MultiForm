import { Box, colors } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.tokens.layoutToken.container.form,
    margin: '12px auto',
  marginTop:theme.tokens.spacing.stack.lg
}));

export const FormSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.form.fieldGap.sm,

  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.form.fieldGap.md,
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.form.fieldGap.lg,
  },

  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.form.fieldGap.xl,
  },
}));

export const FormField = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  fontSize: theme.tokens.typography.caption.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.medium,
  lineHeight: theme.tokens.typography.caption.lineHeight,
}));

export const InputContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.form.inputGap,
}));
