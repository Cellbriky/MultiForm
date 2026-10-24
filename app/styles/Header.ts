import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { positive } from 'zod';

// Header background and layout
export const HeaderContainer = styled(Box)(({ theme }) => ({
  // Mobile: existing styles
  width: '100%',
  height: theme.tokens.layoutToken.header.height,
  flexShrink: 0,
  backgroundColor: theme.palette.primary.main,
  backgroundImage: 'url("/bg-sidebar-mobile.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
 

  // Tablet: 768px and above
  [theme.breakpoints.up('md')]: {
    flex: `0 0 ${theme.tokens.layoutToken.sidebar.width}`,
    width: theme.tokens.layoutToken.sidebar.width,
    maxWidth: theme.tokens.layoutToken.sidebar.width,
    height: '100%',
    minHeight: 0,
    backgroundImage: 'url("/bg-sidebar-desktop.svg")',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    borderRadius: theme.tokens.radius.control,
  },

  // Desktop: 1024px and above
  [theme.breakpoints.up('lg')]: {
    backgroundPosition: 'top left',
  },

  // Large desktop: 1440px and above
  [theme.breakpoints.up('xl')]: {
    flexBasis: theme.tokens.layoutToken.sidebar.width,
    width: theme.tokens.layoutToken.sidebar.width,
    maxWidth: theme.tokens.layoutToken.sidebar.width,
  },
}));

// Navigation wrapper
export const NavContainer = styled(Box)(({ theme }) => ({
  // Mobile
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  top: theme.tokens.spacing.stack.lg,

  // Tablet
  [theme.breakpoints.up('md')]: {
    top: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: theme.tokens.padding.container.tablet,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    padding: theme.tokens.padding.container.tablet,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    padding: theme.tokens.padding.container.tablet,
  },
}));

// Navigation list
export const NavList = styled(Box)(({ theme }) => ({
  // Mobile
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
  gap: theme.tokens.spacing.inline.comfortable,

  // Tablet
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.tokens.spacing.stack.xl,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.stack.xl,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.spacing.stack.xl,
  },
}));

// Individual navigation item
export const NavItem = styled(Box)(({ theme }) => ({
  // Mobile
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBlock: theme.tokens.padding.navigation.item.block,
  paddingInline: theme.tokens.padding.navigation.item.inline,

  // Tablet
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBlock: 0,
    paddingInline: 0,
    gap: theme.tokens.spacing.inline.comfortable,
    width: '100%',
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

// Navigation link
export const NavLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.tokens.spacing.inline.comfortable,
  textDecoration: 'none',
  color: 'inherit',
  minWidth: 0,
}));

// Step number
export const NavNumber = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  // Mobile
  color: active ? '#082D57' : '#fff',
  border: '1px solid',
  borderColor: active ? '#BEE1FF' : '#fff',
  borderRadius: '50%',
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  fontWeight: theme.tokens.typography.bodySmall.fontWeight,
  lineHeight: theme.tokens.typography.bodySmall.lineHeight,
  paddingInline: '12px',
  paddingBlock: '6px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexShrink: 0,
  backgroundColor: active ? '#BEE1FF' : 'transparent',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',

  // Tablet
  [theme.breakpoints.up('md')]: {
    width: 36,
    height: 36,
    padding: 0,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    width: 38,
    height: 38,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    width: 40,
    height: 40,
  },
}));

// Step caption wrapper
export const NavMenu = styled(Box)(({ theme }) => ({
  display: 'none',

  // Tablet
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },

  // Desktop
  [theme.breakpoints.up('lg')]: {
    gap: theme.tokens.spacing.stack.xs,
  },

  // Large desktop
  [theme.breakpoints.up('xl')]: {
    gap: theme.tokens.spacing.stack.xs,
  },
}));

// Step caption
export const NavCaption = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: '#EDF4FE',
  fontWeight: 300,
  fontSize: theme.tokens.typography.overline.fontSize,
  lineHeight: theme.tokens.typography.overline.lineHeight,
  [theme.breakpoints.up('md')]: {
    position: "relative",
    top:"4px"
  },
  [theme.breakpoints.up('lg')]: {
    whiteSpace: 'nowrap',
  },
}));

// Step name
export const NavName = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: '#fff',
  fontSize: theme.tokens.typography.overline.fontSize,
  lineHeight: theme.tokens.typography.overline.lineHeight,
  fontWeight: theme.tokens.fontWeight.medium,
  letterSpacing: theme.tokens.letterSpacing.loose,

  [theme.breakpoints.up('lg')]: {
    whiteSpace: 'nowrap',
  },
}));
