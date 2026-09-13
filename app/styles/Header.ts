import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSize } from '../theme/token/primitives/typography';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.tokens.layoutToken.header.height,
  backgroundColor: theme.palette.primary.main,
  backgroundImage: 'url("/bg-sidebar-mobile.svg")',
  backgroundRepeat: 'no-repeat',
  //backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'static',
  top: 0,
  left: 0,
  bottom: 0,

  [theme.breakpoints.up('md')]: {
    flex: `0 0 ${theme.tokens.layoutToken.sidebar.width}`,
    width: theme.tokens.layoutToken.sidebar.width,
    maxWidth: theme.tokens.layoutToken.sidebar.width,
    height: '100%',
    backgroundImage: 'url("/bg-sidebar-desktop.svg")',
    borderRadius: theme.tokens.radius.control,
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
    gap: theme.tokens.spacing.stack.xl
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
    paddingBlock: "0px",
    fontSize:theme.tokens.typography.caption
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
  color: '#EDF4FE !important',
  fontWeight: 300,
  fontSize: theme.tokens.typography.overline.fontSize,
  lineHeight: theme.tokens.typography.overline.lineHeight,
}));

export const NavName = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  color: '#fff',
  fontSize: theme.tokens.typography.overline.fontSize,
  lineHeight: theme.tokens.typography.overline.lineHeight,
  fontWeight: theme.tokens.fontWeight.medium,
  letterSpacing: theme.tokens.letterSpacing.loose,
}));
