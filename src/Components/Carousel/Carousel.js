import React from "react";
import "./Carousel.css";
import { CarouselItem } from "../CarouselItem/carouselItem";

function Carousel({ categories, onCategorySlideBtn }) {

  let currentSlide = 0;
  let nextSlide = 1;
  let maxSlides = categories.length;
  
  console.log('carousel current=' + currentSlide);
  console.log('carousel next =' + nextSlide);
  console.log('maxslides=' + maxSlides)

  // fix disabled class;
  return (
    <div className="carousel">
      <div>
       
        <button 
          className={
            currentSlide !== 0 ? "left-carousel-btn" : "left-carousel-btn disabled"
          }
          data-url={categories[currentSlide].url}
          data-value="prev"
          onClick={onCategorySlideBtn}
          >&#5130;</button>
      </div>
      <div className="slide">
        {categories.map((category) => {
          return (
            <CarouselItem
              key={category.name}
              img={category.img}
              name={category.name}
              url={category.url}
            />
          );
        })}
      </div>
      <div>
        <button 
          className={
            nextSlide !== maxSlides ? "right-carousel-btn" : "right-carousel-btn disabled"
          }
          data-url={categories[nextSlide].url}
          data-value="next"
          onClick={onCategorySlideBtn}
          >&#5125;</button>
      </div>
    </div>
  );
}

export default Carousel;
