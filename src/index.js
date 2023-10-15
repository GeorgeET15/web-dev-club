import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Title from "./components/Title";
import Tech from "./components/Tech";
import About from "./components/About";
import JoinUs from "./components/JoinUS";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Title />
    <About />
    <Tech />
    <JoinUs />
    <Footer />
  </React.StrictMode>
);
