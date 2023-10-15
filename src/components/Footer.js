import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <a
          href="https://github.com/GeorgeET15/web-dev-club"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          <GitHubIcon style={styles.githubIcon} />
        </a>
        <p style={styles.copyrightText}>
          © {new Date().getFullYear()} WEB DEV CLUB. All rights reserved.
        </p>
        <p style={styles.madeWithLove}>Made with love in Kochi ❤️</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f1bd0a",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ccc",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  githubLink: {
    display: "inline-block",
    margin: "0 10px",
    color: "#000",
    textDecoration: "none",
  },
  githubIcon: {
    fontSize: "30px",
  },
  copyrightText: {
    fontSize: "14px",
    color: "#000000",
    margin: "0 10px",
  },
  madeWithLove: {
    fontSize: "14px",
    color: "#000000",
    margin: "0 10px",
  },
};

export default Footer;
