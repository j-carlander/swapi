import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Carousel from "./Components/Carousel/Carousel";
// import App from "./Components/App/App";
import BannerImg from "./Components/BannerImg/BannerImg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BannerImg />
    <Carousel />
  </React.StrictMode>
);
