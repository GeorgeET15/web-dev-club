import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import htmlLogo from "../images/HTML5_Logo_512.png";
import cssLogo from "../images/CSS_logo_PNG4.png";
import jsLogo from "../images/Javascript_Logo.png";
import "./Card.css";

const Tech = () => {
  return (
    <Box sx={{ backgroundColor: "#ff98a2" }} height="30rem">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          fontSize="60px"
          fontWeight="900"
          color="#5C2289"
          className="vertical__heading"
          marginBottom="3rem"
        >
          Technologies Used
        </Typography>
      </Box>

      <Stack direction="row" marginLeft="7rem" spacing="16rem">
        <img
          src={htmlLogo}
          alt="HTML Logo"
          width="20%"
          height="20%"
          className="logo"
        />

        <img
          src={cssLogo}
          alt="CSS Logo"
          width="15%"
          height="15%"
          className="logo"
        />

        <img
          src={jsLogo}
          alt="JavaScript Logo"
          width="18%"
          height="18%"
          className="logo"
        />
      </Stack>
    </Box>
  );
};

export default Tech;
