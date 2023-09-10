import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/appbar";
import { Box } from "@mui/material";
import Main from "./components/main";
import AboutCancer from "./components/AbotCancer";
import AboutUs from "./components/AboutUs";
import Types from "./components/Types";




const App = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg, #B2E1F3 22.05%, #1988A4 100%)",
          width: "100%", // Set the width to 100% if you want the gradient to cover the entire box
          height: "auto", // Set the height to fill the viewport, adjust as needed
          
        }}
      >
        <ResponsiveAppBar />
        <Main />
        <AboutCancer/>
        <AboutUs/>
        <Types/>
      </Box>
    </>
  );
};

export default App;
