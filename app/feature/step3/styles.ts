import { fontWeight } from '@/app/theme/token/semantics';
import { Box, styled } from '@mui/material';


export const LabelDiv = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  backgroundColor: active ? '#F8F9FE' : 'white',
  display: 'flex',
  alignItems: "center",
  justifyContent:"center",
  gap: theme.tokens.spacing.inline.comfortable,
  paddingInline: theme.tokens.padding.button.inline,
  paddingBlock: theme.tokens.padding.button.block,
  borderRadius: theme.tokens.radius.button,
  border: active ? '1px solid #8D8BBD' : '1px solid #92929C',
}));


export const InputCheck = styled('input')({
  appearance: 'none',
  width: '24px',
  height: '24px',
  border: '1px solid red',
  borderRadius: '4px',
  position: 'relative',

  '&:checked': {
    backgroundColor: 'red',
  },

  '&:checked::after': {
    content: '"✓"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 700,
  },
});

export const AddonDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1, 
}));

export const AddonH1 = styled(Box)(({ theme }) => ({
  fontSize:theme.tokens.typography.bodySmall.fontSize,
}));

export const Overline = styled(Box)(({ theme }) => ({
  fontSize:theme.tokens.typography.caption.fontSize,
}));
export const Amount = styled(Box)(({ theme }) => ({
  fontSize:theme.tokens.typography.overline.fontSize,
}))
