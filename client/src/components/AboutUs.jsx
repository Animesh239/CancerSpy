import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Typography } from "@mui/material";
import contentLogo from "../assets/contentLogo.svg";
import img3 from "../assets/abtus.svg";

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

const AboutUs = () => {
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid item xs={7} sx={{ height: "90%" }}>
          {/* <Item>
            <Bounce>
              <img src={img3} alt="Content Logo" />
            </Bounce>
          </Item> */}
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
              ABOUT US
            </Typography>
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
                display: "flex",
                textAlign: "flex-start",
              }}
            >
              Cancer is a worldwide epidemic that affects countless people. In
              this short article, we'll talk about how common it is, what causes
              it, and how recent innovations in therapy have helped. Cancer's
              ubiquitous presence has an international impact on millions of
              people and necessitates concerted effort.
            </Typography>
            <br />
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
              }}
            >
              Knowing the causes, which can range from heredity to environmental
              factors, is crucial for implementing effective preventative
              measures.Screenings and education are lifesaving instruments for
              Prevention and Early Detection.
            </Typography>
            <br />
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
              }}
            >
              Hackathons spark developments in areas ranging from novel
              therapeutics to streamlined approaches to patient care. Knowledge,
              prevention, and new approaches are meeting the threat of cancer
              head-on. We are making progress toward a world without cancer.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={5}>
          {/* <Item>
            <Typography
              sx={{
                mx: "2rem",
                color: "#08323D",
                fontSize: "78px",
                fontFamily: "outfit",
                fontWeight: 900,
              }}
            >
              ABOUT CANCER
            </Typography>
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
                display: "flex",
                textAlign: "flex-start",
              }}
            >
              Cancer is a worldwide epidemic that affects countless people. In
              this short article, we'll talk about how common it is, what causes
              it, and how recent innovations in therapy have helped. Cancer's
              ubiquitous presence has an international impact on millions of
              people and necessitates concerted effort.
            </Typography>
            <br />
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
              }}
            >
              Knowing the causes, which can range from heredity to environmental
              factors, is crucial for implementing effective preventative
              measures.Screenings and education are lifesaving instruments for
              Prevention and Early Detection.
            </Typography>
            <br />
            <Typography
              sx={{
                m: "0rem 0rem 0rem 4rem",
                color: "#08323D",
                fontSize: "25px",
                fontFamily: "outfit",
                fontWeight: 700,
              }}
            >
              Hackathons spark developments in areas ranging from novel
              therapeutics to streamlined approaches to patient care. Knowledge,
              prevention, and new approaches are meeting the threat of cancer
              head-on. We are making progress toward a world without cancer.
            </Typography>
          </Item> */}
          <Item>
            <Bounce>
              <img src={img3} alt="Content Logo" />
            </Bounce>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
