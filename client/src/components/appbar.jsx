import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../assets/Logo.svg";
import logoIMG from "../assets/logoIMG.svg";
import Grid from "@mui/material/Grid";

const pages = ["Home", "About Us", "Cancer Pedia", "Medical", "Conatct Us"];

function ResponsiveAppBar() {
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
