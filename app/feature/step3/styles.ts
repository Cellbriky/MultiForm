import { fontFamily } from '@/app/theme/token/primitives/typography';
import { fontWeight } from '@/app/theme/token/semantics';
import { Box, styled } from '@mui/material';


export const LabelDiv = styled('label', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  position: 'relative',
  backgroundColor: active ? '#F8F9FE' : '#fff',
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
  width: '20px',
  height: '20px',
  border: '1px solid #92929C',
  borderRadius: '4px',
  position: 'relative',

  '&:checked': {
    backgroundColor: '#453AFF',
    border: '1px solid #8D8BBD',
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
});

export const AddonDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1, 
}));

export const AddonH1 = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.bodySmall.fontSize,
  color: '#0a3265',
  fontWeight: theme.tokens.fontWeight.bold,
  fontFamily: 'var(--font-ubuntu)',
}));

export const Overline = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.caption.fontSize,
  color: '#92929c',
  fontWeight: theme.tokens.fontWeight.medium,
  fontFamily: 'var(--font-ubuntu)',
  position: 'relative',
  top: '-3px',
}));
export const Amount = styled(Box)(({ theme }) => ({
  fontSize: theme.tokens.typography.overline.fontSize,
  color: '#716DAB',
  fontWeight: theme.tokens.fontWeight.medium,
  fontFamily: 'var(--font-ubuntu)',
}));
