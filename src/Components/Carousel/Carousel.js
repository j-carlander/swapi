import React from "react";
import "./Carousel.css";

import { CarouselItem } from "../CarouselItem/carouselItem";

function Carousel({ categories, onClick }) {
  return (
    <div className="carousel">
      <div>
        <button className="left-carousel-btn">&#5129;</button>
      </div>
      <div className="scene">
        {categories.map((category) => {
          return (
            <CarouselItem
              key={category.name}
              img={category.img}
              name={category.name}
              url={category.url}
              onClick={onClick}
            />
          );
        })}
      </div>
      <div>
        <button className="right-carousel-btn">&#5129;</button>
      </div>
    </div>
  );
}

export default Carousel;
