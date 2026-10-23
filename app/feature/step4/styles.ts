import { Box, styled } from '@mui/material';

// Main container
export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.tokens.layoutToken.container.form,
  minWidth: 0,
  marginInline: 'auto',

  [theme.breakpoints.up('md')]: {
    width: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.tokens.layoutToken.container.form,
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: theme.tokens.layoutToken.container.form,
  },
}));

// Summary section
export const SectionOne = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F9FE',
  padding: theme.tokens.padding.container.mobile,
  borderRadius: theme.tokens.radius.card,
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    padding: theme.tokens.padding.container.mobile,
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.tokens.padding.container.mobile,
  },

  [theme.breakpoints.up('xl')]: {
    padding: theme.tokens.padding.container.mobile,
  },
}));

// Add-ons section
export const SectionTwo = styled(Box)(({ theme }) => ({
  padding: theme.tokens.padding.container.mobile,
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    padding: theme.tokens.padding.container.mobile,
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.tokens.padding.container.mobile,
  },
}));

// Summary grid
export const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(4, auto)',
  gap: theme.tokens.spacing.stack.xs,
  color: '#92929c',
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.spacing.stack.sm,
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.stack.md,
  },

  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.spacing.stack.md,
  },
}));

// Summary row with bottom border
export const GridDivBtm = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.tokens.spacing.inline.comfortable,
  borderBottom: '0.5px solid #92929c',
  paddingBlock: theme.tokens.spacing.stack.xs,
  minWidth: 0,

  '& > *': {
    minWidth: 0,
  },

  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.tokens.spacing.stack.sm,
  },

  [theme.breakpoints.up('lg')]: {
    paddingBlock: theme.tokens.spacing.stack.sm,
  },
}));

// Standard summary row
export const GridDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.tokens.spacing.inline.comfortable,
  minWidth: 0,

  '& > *': {
    minWidth: 0,
  },
}));

// Main plan heading
export const H1 = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#0a3265',
  lineHeight: 1.4,
  overflowWrap: 'anywhere',
  display: "flex",
  flexDirection:"column",

  [theme.breakpoints.up('md')]: {
    lineHeight: 1.5,
  },

  [theme.breakpoints.up('lg')]: {
    lineHeight: 1.5,
  },

  [theme.breakpoints.up('xl')]: {
    lineHeight: 1.6,
  },
}));

// Selected plan heading
export const OptionHeader = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#0a3265',
  lineHeight: 1.4,
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('md')]: {
    lineHeight: 1.5,
  },
}));

// Billing option and plan details
export const OptionDiv = styled(Box)(({ theme }) => ({
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.medium,
  minWidth: 0,
  overflowWrap: 'anywhere',
}));

// Change plan link
export const Change = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'underline',
  position: 'relative',
  top: '-6px',
  color: '#92929c',
  fontWeight: theme.tokens.fontWeight.regular,
  cursor: 'pointer',

  '&:hover': {
    color: '#0a3265',
  },

  '&:focus-visible': {
    outline: '2px solid #6E65DC',
    outlineOffset: '3px',
  },
}));

// Total amount row
export const TotalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.tokens.spacing.inline.comfortable,
  minWidth: 0,
  paddingBlock: theme.tokens.spacing.stack.sm,

  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.tokens.spacing.stack.md,
  },

  [theme.breakpoints.up('lg')]: {
    paddingBlock: theme.tokens.spacing.stack.md,
  },
}));

// Total label
export const TotalLabel = styled(Box)(({ theme }) => ({
  color: '#92929c',
  fontWeight: theme.tokens.fontWeight.medium,
  minWidth: 0,
}));

// Total amount
export const TotalAmount = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#5D55BC',
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.tokens.typography.bodySmall.fontSize,
  },
}));

// Confirmation dialog
export const DialogContainer = styled('dialog')(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),

  width: 'calc(100% - 32px)',
  maxWidth: '420px',
  minHeight: '220px',
  maxHeight: 'calc(100dvh - 32px)',
  overflowY: 'auto',
  padding: theme.spacing(3),

  backgroundColor: '#fff',
  border: 'none',
  borderRadius: theme.tokens.radius.card,
  boxShadow: theme.tokens.shadow.card,
  textAlign: 'center',

  '&::backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },

  [theme.breakpoints.up('md')]: {
    width: 'min(420px, calc(100% - 48px))',
    minHeight: '240px',
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '440px',
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: '460px',
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: '200px',
    padding: theme.spacing(3),
  },
}));

// Dialog content
export const DialogContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.tokens.spacing.stack.sm,
  width: '100%',
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    gap: theme.tokens.spacing.stack.md,
  },
}));

// Dialog heading
export const Header = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#0a3265',
  fontSize: theme.tokens.typography.h3.fontSize.mobile,
  lineHeight: 1.3,

  [theme.breakpoints.up('md')]: {
    fontSize: theme.tokens.typography.h3.fontSize.tablet,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.tokens.typography.h3.fontSize.desktop,
  },

  [theme.breakpoints.up('xl')]: {
    fontSize: theme.tokens.typography.h3.fontSize.desktop,
  },
}));
