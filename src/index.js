import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Components/App/App";
import BannerImg from "./Components/BannerImg/BannerImg";
import { Container } from "./Components/Container/container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BannerImg />
    <Container >
      <h2>Hej</h2>
    </Container>
  </React.StrictMode>
);
