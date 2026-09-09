import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.tokens.layout.header.height,
  backgroundColor: theme.palette.primary.main,
  backgroundImage: 'url("/bg-sidebar-mobile.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  [theme.breakpoints.up('md')]: {
    position: 'static',
    width: theme.tokens.layout.sidebar.width,
    maxWidth: theme.tokens.layout.sidebar.width,
    height: '100vh',
    backgroundImage: 'url("/bg-sidebar-desktop.svg")',
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  top: theme.tokens.spacing.stack.lg,

  [theme.breakpoints.up('md')]: {
    top: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: theme.tokens.padding.container.tablet,
    height: '100vh',
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.tokens.padding.container.desktop,
  },
}));

export const NavList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.tokens.spacing.section.sm,
    height: '100%',
  },
}));

export const NavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBlock: theme.tokens.padding.navigation.item.block,
  paddingInline: theme.tokens.padding.navigation.item.inline,

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    paddingBlock: 0,
    paddingInline: 0,
    gap: theme.tokens.spacing.inline.comfortable,
  },
}));
export const NavLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: theme.tokens.spacing.inline.comfortable,
  textDecoration: 'none',
}));
export const NavNumber = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
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
  display: 'flex',
  backgroundColor: active ? '#BEE1FF' : 'transparent',
  [theme.breakpoints.up('md')]: {
    paddingInline: '16px',
  },
  '&:hover': {
    color: '#082D57',
    backgroundColor: '#BEE1FF',
    borderColor: '#BEE1FF',
  },
}));

export const NavMenu = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const NavCaption = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: '#EDF4FE',
  fontWeight: 300,
  fontSize: theme.tokens.typography.overline.fontSize,
  lineHeight: theme.tokens.typography.overline.lineHeight,
}));

export const NavName = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: '#fff',
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  lineHeight: theme.tokens.typography.bodySmall.lineHeight,
  fontWeight: theme.tokens.fontWeight.medium,
  letterSpacing: theme.tokens.letterSpacing.loose,
}));
