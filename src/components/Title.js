import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import webDevelopmentImage from "../images/web-development.png";
import Typewriter from "typewriter-effect";
import "./Title.css"; // Create a new CSS file for additional styling

const Title = () => {
  return (
    <Box className="title-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} className="image-container">
          <img
            src={webDevelopmentImage}
            alt="Web Development"
            className="modern-animation"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="text-container">
          <Container className="title-content">
            <Typography variant="h1" className="welcome-text">
              Welcome to
            </Typography>
            <Typography variant="h1" className="club-name">
              Web Development Club
            </Typography>
            <Typography variant="h5" className="club-description">
              <Typewriter
                options={{
                  strings: ["Explore the world of web development with us."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Title;
