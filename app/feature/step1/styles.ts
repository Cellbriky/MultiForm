import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled('form')(({ theme }) => ({
  // Mobile: default styles
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: theme.tokens.layoutToken.container.form,
  margin: '12px auto',
  marginTop: theme.tokens.spacing.stack.lg,
  minWidth: 0,

  // Tablet: 768px and above
  [theme.breakpoints.up('md')]: {
    marginInline: 'auto',
    marginTop: theme.tokens.spacing.stack.xl,
  },

  // Desktop: 1024px and above
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.tokens.spacing.stack.xl,
  },

  // Large screens: 1440px and above
  [theme.breakpoints.up('xl')]: {
    marginTop: theme.tokens.spacing.stack.xl,
  },
}));

export const FormSection = styled(Box)(({ theme }) => ({
  // Mobile
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.form.fieldGap.sm,
  minWidth: 0,

  // Tablet
  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.form.fieldGap.md,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.form.fieldGap.lg,
  },

  // Large screens
  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.form.fieldGap.xl,
  },
}));

export const FormField = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.spacing.stack.xs,
  width: '100%',
  minWidth: 0,
}));

export const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.medium,
  lineHeight: theme.tokens.typography.caption.lineHeight,

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },
}));

export const InputContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
}));

export const Input = styled('input', {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>(({ theme, error }) => ({
  // Mobile
  width: '100%',
  minWidth: 0,
  paddingInline: '12px',
  paddingBlock: '8px',
  border: `1px solid ${error ? 'red' : '#92929c'}`,
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  color: '#0B2349',
  fontWeight: theme.tokens.fontWeight.medium,
  fontFamily: 'inherit',
  fontSize: '14px',

  '&:focus': {
    borderColor: error ? 'red' : '#544C95',
    boxShadow: error ? '0 0 0 2px rgba(255, 0, 0, 0.1)' : '0 0 0 2px rgba(84, 76, 149, 0.12)',
  },

  '&::placeholder': {
    color: '#92929c',
    opacity: 1,
  },

  // Tablet
  [theme.breakpoints.up('md')]: {
    paddingInline: '14px',
    paddingBlock: '10px',
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    paddingInline: '14px',
    paddingBlock: '10px',
  },

  // Large screens
  [theme.breakpoints.up('xl')]: {
    paddingInline: '16px',
  },
}));
