import { Box, styled } from '@mui/material';
export const Container = (styled)(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.tokens.padding.container.mobile,
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
    
}))