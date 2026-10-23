import { Box, styled } from '@mui/material';

// Add-on selection card
export const LabelDiv = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.tokens.spacing.inline.comfortable,
  width: '100%',
  minWidth: 0,
  paddingInline: theme.tokens.padding.button.inline,
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  border: `1px solid ${active ? '#6E65DC' : '#92929C'}`,
  backgroundColor: active ? '#F8F9FE' : '#fff',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',

  '&:hover': {
    borderColor: '#6E65DC',
  },

  '&:focus-within': {
    outline: '2px solid #6E65DC',
    outlineOffset: '2px',
  },

  // Tablet
  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.spacing.inline.comfortable,
    paddingInline: theme.tokens.padding.button.inline,
    paddingBlock: theme.tokens.padding.button.block,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    paddingInline: theme.tokens.padding.button.inline,
    paddingBlock: theme.tokens.padding.button.block,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    paddingInline: theme.tokens.padding.button.inline,
  },
}));

// Add-on checkbox
export const InputCheck = styled('input')(({ theme }) => ({
  appearance: 'none',
  flexShrink: 0,
  width: '20px',
  height: '20px',
  margin: 0,
  border: '1px solid #92929C',
  borderRadius: '4px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',

  '&:checked': {
    backgroundColor: '#453AFF',
    border: '1px solid #6E65DC',
  },

  '&:checked::after': {
    content: '""',
    position: 'absolute',
    width: '6px',
    height: '12px',
    border: 'solid #fff',
    borderWidth: '0 2px 2px 0',
    top: '2px',
    left: '6px',
    transform: 'rotate(45deg)',
  },

  '&:focus-visible': {
    outline: '2px solid #6E65DC',
    outlineOffset: '3px',
  },

  [theme.breakpoints.up('md')]: {
    width: '21px',
    height: '21px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '22px',
    height: '22px',
  },
}));

// Add-on text wrapper
export const AddonDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  minWidth: 0,
  gap: theme.tokens.spacing.stack.xs,

  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.spacing.stack.xs,
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.stack.xs,
  },
}));

// Add-on title
export const AddonH1 = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.bold,
  fontFamily: 'var(--font-ubuntu)',
  lineHeight: 1.4,
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },

  [theme.breakpoints.up('lg')]: {
    lineHeight: 1.5,
  },

  [theme.breakpoints.up('xl')]: {
    lineHeight: 1.6,
  },
}));

// Add-on description
export const Overline = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.caption.fontSize,
  color: '#92929c',
  fontWeight: theme.tokens.fontWeight.medium,
  fontFamily: 'var(--font-ubuntu)',
  position: 'relative',
  top: '-3px',
  lineHeight: 1.4,
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('md')]: {
    lineHeight: 1.5,
  },

  [theme.breakpoints.up('lg')]: {
    top: '-2px',
  },
}));

// Add-on price
export const Amount = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.overline.fontSize,
  color: '#6E65DC',
  fontWeight: theme.tokens.fontWeight.medium,
  fontFamily: 'var(--font-ubuntu)',
  whiteSpace: 'nowrap',
  flexShrink: 0,

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.overline.fontSize,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.tokens.typography.overline.fontSize,
  },
}));

// Validation error message
export const ErrorMessage = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '12px',
  color: '#d32f2f',
  lineHeight: 1.4,
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('md')]: {
    fontSize: '13px',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '13px',
  },
}));
