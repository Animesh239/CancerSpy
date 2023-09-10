import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography } from "@mui/material";
import contentLogo from "../assets/contentLogo.svg";
import Highlights from "./Searchbar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "transparent",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const Bounce = styled("div")({
    animation: "bounce 5s infinite ease-in-out",
    "@keyframes bounce": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "20%": {
        transform: "translateY(-20px)",
      },
      "40%": {
        transform: "translateY(0)",
      },
      "60%": {
        transform: "translateY(-15px)",
      },
      "80%": {
        transform: "translateY(0)",
      },
    },
  });

const Main = () => {
  return (
    <>
      <Grid container sx={{ height: "90%" }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Item>
            <Typography
              sx={{
                mx: "2rem",
                color: "#08323D",
                fontSize: "78px",
                fontFamily: "outfit",
                fontWeight: 900,
              }}
            >
              SPY ON CANCER
            </Typography>
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "40px",
                fontFamily: "outfit",
                fontWeight: 700,
              }}
            >
              Next-Gen Cancer Diagnosis, Begin your cancer research
            </Typography>
            <Highlights/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Bounce>
              <img src={contentLogo} alt="Content Logo" />
            </Bounce>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
