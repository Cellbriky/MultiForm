import theme from '@/app/theme/theme';
import { Box, styled } from '@mui/material';
export const Container = styled(Box)(({ theme }) => ({}));
export const SectionOne = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F9FE',
  padding: theme.tokens.padding.container.mobile,
  borderRadius: theme.tokens.spacing.stack.xs
}));
export const SectionTwo = styled(Box)(({ theme }) => ({
  padding: theme.tokens.padding.container.mobile,
}));

export const Grid = styled(Box)({
  display: 'grid',
  gridTemplateRow: 'repeat(4, 1fr)',
  gap: theme.tokens.spacing.stack.xs,
  color:"#92929c",
});
export const GridDivBtm = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '0.5px solid',
  borderBottomColor: '#92929c',
}));
export const GridDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
export const H1 = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: "#0a3265",
  
}))
export const OptionHeader = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#0a3265',
}));
export const OptionDiv = styled(Box)(({ theme }) => ({
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.medium,
}));
export const Change = styled(Box)(({ theme }) => ({
  textDecoration: 'underline',
  position: 'relative',
  top: '-6px',
  color: ' #92929c',
  fontWeight: theme.tokens.fontWeight.regular,
}));
export const TotalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const TotalLabel = styled(Box)(({ theme }) => ({
  // Add your total label styles here
}));

export const TotalAmount = styled(Box)(({ theme }) => ({
  fontWeight: theme.tokens.fontWeight.bold,
  color: '#5D55BC',
}));
