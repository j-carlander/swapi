import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./Components/App/App";
import BannerImg from "./Components/BannerImg/BannerImg";
import CarouselMenu from "./Components/Carousel/Carousel";
import { Container } from "./Components/Container/container";
import { Details } from "./Components/Details/details";
import { Subtitle } from "./Components/Subtitle/subtitle";
import { ResultList } from "./Components/resultList/resultList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BannerImg />
    <CarouselMenu />
    <Container>
      <Subtitle title="Characters"/>
      <ResultList />
    </Container>
    <Container >
    <Subtitle title="Details" />
      <Details />
    </Container>
  </React.StrictMode>
);
