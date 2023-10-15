import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <a
          href="https://instagram.com/cse.beta_26?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          style={styles.instagramLink}
        >
          <GitHubIcon style={styles.instagramIcon} />
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
  instagramLink: {
    display: "inline-block",
    margin: "0 10px",
    color: "#000",
    textDecoration: "none",
  },
  instagramIcon: {
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
