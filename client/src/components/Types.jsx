import React from 'react';
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography } from "@mui/material";

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
    textAlign: "left",
  }));

const Types = () => {
    return (
        <div>
            
        </div>
    );
}

export default Types;