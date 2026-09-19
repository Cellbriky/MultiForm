
import { Box, styled } from '@mui/material';

export const FormField = (styled)(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  gap:theme.tokens.spacing.stack.xs
}))
export const PlanDiv = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  backgroundColor: active ? '#F8F9FE' : 'white',
  display: 'flex',
  alignItems:"start",
  gap: theme.tokens.spacing.inline.comfortable,
  paddingInline: theme.tokens.padding.button.inline,
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  border: active ? '1px solid  #8D8BBD' : '1px solid  #92929c',
}));

export const Title = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.bold,
}));
export const Overview = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  fontWeight: theme.tokens.fontWeight.medium,
  color: '#92929c',
}));
export const YearOverview = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.overline.fontSize,
  fontWeight: theme.tokens.fontWeight.medium,
  color: '#0a3265',
}));
export const InputRadio = styled('input')(({ theme }) => ({
  position: 'absolute',
  top: '34px',
  left: '20px',
  zIndex: '-1',
}));
export const OptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.tokens.spacing.inline.comfortable,
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  backgroundColor: '#F8F9FE',
}));
export const LabelTitle = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  color: active ? '#0a3265' : '#92929c',
  fontWeight: theme.tokens.fontWeight.bold,
}));
export const RadioDiv = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a3265',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.tokens.radius.pill,
  paddingBlock:"2px"
  
}));
export const OptionRadio = styled('input')(({ theme }) => ({
  appearance: 'none',
  border: '1px solid #0a3265',
  borderRadius: theme.tokens.radius.pill,
  position: 'relative',

  '&:checked::after': {
    content: '""',
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));