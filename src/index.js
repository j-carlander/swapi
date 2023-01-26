import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Components/App/App";
import BannerImg from "./Components/BannerImg/BannerImg";
import { Details } from "./Components/Details/details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BannerImg />
    <Details />
  </React.StrictMode>
);
