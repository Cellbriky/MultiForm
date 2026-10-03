import { Box, styled } from '@mui/material';
export const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.tokens.layoutToken.container.form,
  width: '100%',
  backgroundColor: '#fff',
}));
export const ErrorMessage = styled('p')(({ theme }) => ({
  fontSize: '12px',
  color: '#d32f2f',
  lineHeight: '1.4',
}));