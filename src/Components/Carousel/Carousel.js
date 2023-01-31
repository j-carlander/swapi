import React from "react";
import "./Carousel.css";


function Carousel({ categories, onCategorySlideBtn, img, name }) {

  return (
    <div className="carousel">
      <div>
        <button 
          className="left-carousel-btn"
          data-url={categories.url}
          data-value="prev"
          onClick={onCategorySlideBtn}
          >&#5130;</button>
      </div>
      <div className="slide">
        <figure>
          <img src={img} alt="" />
          <figcaption>{name}</figcaption>
        </figure>
      </div>
      <div>
        <button 
          className="right-carousel-btn"
          data-url={categories.url}
          data-value="next"
          onClick={onCategorySlideBtn}
          >&#5125;</button>
      </div>
    </div>
  );
}

export default Carousel;
