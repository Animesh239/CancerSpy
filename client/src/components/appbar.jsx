import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../assets/Logo.svg";
import logoIMG from "../assets/logoIMG.svg";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const pages = ["Home", "About Us", "Cancer Pedia", "Medical", "Conatct Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  typography: {
    fontFamily: "Outfit",
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="2xl"
        sx={{
          bgcolor: " #1988A4",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Toolbar disableGutters>
          <Box disableGutters sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logoIMG} sx={{ mr: 1 }} />
            <img
              src={Logo}
              component="a"
              href="/"
              sx={{
                mr: 2,
              }}
            />
          </Box>
        </Toolbar>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs></Grid>
          {pages.map((page) => (
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Outfit",
                fontSize: "25px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              {page}
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
