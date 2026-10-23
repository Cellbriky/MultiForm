import { Box, styled } from '@mui/material';

// Form field wrapper
export const FormField = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.spacing.stack.xs,
  width: '100%',
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.tokens.form.fieldGap.md,
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.form.fieldGap.lg,
  },

  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.form.fieldGap.xl,
  },
}));

export const PlanContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.tokens.spacing.stack.md,
  width: '100%',
  minWidth: 0,

  // Tablet and larger screens
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: theme.tokens.spacing.inline.comfortable,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.inline.comfortable,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.spacing.inline.comfortable,
  },
}));
// Individual plan card
export const PlanDiv = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: theme.tokens.spacing.inline.comfortable,
  width: '100%',
  minWidth: 0,
  paddingInline: theme.tokens.padding.button.inline,
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  border: `1px solid ${active ? '#8D8BBD' : '#92929c'}`,
  backgroundColor: active ? '#F8F9FE' : '#fff',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',

  '&:hover': {
    borderColor: '#8D8BBD',
  },

  '&:focus-within': {
    outline: '2px solid #8D8BBD',
    outlineOffset: '2px',
  },

  // Tablet
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    gap: theme.tokens.spacing.grid.gutter.tablet,
    paddingInline: theme.tokens.padding.button.inline,
    paddingBlock: theme.tokens.padding.button.block,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.grid.gutter.laptop,
    paddingInline: theme.tokens.padding.button.inline,
    paddingBlock: theme.tokens.padding.button.block,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.spacing.grid.gutter.desktop,
    paddingInline: theme.tokens.padding.button.inline,
  },
}));

// Plan title
export const Title = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.medium,
  lineHeight: 1.4,

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },
}));

// Plan price
export const Overview = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  fontWeight: theme.tokens.fontWeight.medium,
  color: '#92929c',
  lineHeight: 1.5,
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('lg')]: {
    lineHeight: 1.6,
  },
}));

// Yearly discount or bonus text
export const YearOverview = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.overline.fontSize,
  fontWeight: theme.tokens.fontWeight.medium,
  color: '#0a3265',
  lineHeight: 1.4,

  [theme.breakpoints.up('md')]: {
    marginTop: theme.tokens.spacing.stack.xs,
  },
}));

// Accessible radio input for plan selection
export const InputRadio = styled('input')({
  position: 'absolute',
  top: '34px',
  left: '20px',
  zIndex: -1,
});

// Monthly/yearly billing option wrapper
export const OptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.tokens.spacing.inline.comfortable,
  width: '100%',
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  backgroundColor: '#F8F9FE',

  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.spacing.inline.comfortable,
  },

  [theme.breakpoints.up('lg')]: {
    paddingBlock: theme.tokens.padding.button.block,
  },
}));

// Monthly/yearly labels
export const LabelTitle = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  color: active ? '#0a3265' : '#92929c',
  fontWeight: theme.tokens.fontWeight.medium,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  lineHeight: 1.4,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },
}));

// Billing toggle background
export const RadioDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: '#0a3265',
  borderRadius: theme.tokens.radius.pill,
  paddingBlock: '2px',
  paddingInline: '2px',
}));

// Billing toggle control
export const OptionRadio = styled('input')(({ theme }) => ({
  appearance: 'none',
  position: 'relative',
  flexShrink: 0,
  width: '12px',
  height: '12px',
  margin: 0,
  border: '1px solid #0a3265',
  borderRadius: theme.tokens.radius.pill,
  cursor: 'pointer',

  '&:checked::after': {
    content: '""',
    position: 'absolute',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  '&:focus-visible': {
    outline: '2px solid #8D8BBD',
    outlineOffset: '3px',
  },

  [theme.breakpoints.up('md')]: {
    width: '13px',
    height: '13px',

    '&:checked::after': {
      width: '13px',
      height: '13px',
    },
  },
}));
