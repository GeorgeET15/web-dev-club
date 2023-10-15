import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import "./JoinUs.css";
import { Typewriter } from "react-simple-typewriter";

const JoinUs = () => {
  return (
    <Box className="join-us-container">
      <Container className="join-us-content">
        <Typography variant="h" className="join-us-heading">
          Join Us
        </Typography>
        <Typography variant="h5" className="join-us-description">
          We're excited to have you as part of our web development community!
          Please fill out the form below to join.
        </Typography>
        {/* Add your join form or content here */}
      </Container>
      <Button className="join-button">Join us Today</Button>
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        Life is simple{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle=">"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={800}
          />
        </span>
      </h1>
    </Box>
  );
};

export default JoinUs;
