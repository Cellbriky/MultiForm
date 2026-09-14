import { Box, styled } from '@mui/material';
export const Container = (styled)(Box)(({ theme }) => ({
    marginTop:theme.tokens.form.sectionGap['2xl'],
    backgroundColor: "#fff",
    padding: theme.tokens.padding.container.mobile,
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
    
}))