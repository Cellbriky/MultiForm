import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { url } from "inspector/promises";

export const HeaderContainer = styled(Box)({
    display: "flex",
  flexDirection: "row",
  backgroundColor: "#f5f5f5",
  backgroundImage: "url('bg-sidebar-mobile.svg')", // Replace with your image path
  backgroundSize: "cover",
  justifyContent: "center",
  paddingTop: "50px",
  width: "100%",
  height: "160px",
});
export const NavContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
})
export const NavList = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
})
export const NavItem = styled(Box)({
    margin: "0 10px",
    "& a": {
        textDecoration: "none",
        color: "#000",
    },
    "& a:hover": {
        color: red[500],
    },
});