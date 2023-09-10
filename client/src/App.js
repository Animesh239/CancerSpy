import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/appbar";
import { Box } from "@mui/material";
import Main from "./components/main";


const App = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(90deg, #B2E1F3 22.05%, #1988A4 100%)",
          width: "100%", // Set the width to 100% if you want the gradient to cover the entire box
          height: "100vh", // Set the height to fill the viewport, adjust as needed
        }}
      >
        <ResponsiveAppBar />
        <Main sx={{ height : '100vh' }} />
      </Box>
    </>
  );
};

export default App;
