import { Box, styled } from "@mui/material"
export const PageContainer = styled(Box)(({ theme }) => ({
    maxWidth: theme.tokens.layoutToken.container.form,
    width: "100%",
    backgroundColor: "#fff",
    
}))