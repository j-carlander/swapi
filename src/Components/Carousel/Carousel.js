import { func } from "prop-types";
import React, { useRef } from "react";
import "./Carousel.css";


function Carousel({ categories, onCategorySlideBtn, img }) {

  const figRef = useRef(null);

  function handleSlide(e) {

    let el = e.target;
    let value = el.dataset.value;


    if (value === "next") {
      figRef.current.style.cssText = 'animation: slideOutLeft 500ms';
    }
    if (value === "prev") {
      figRef.current.style.cssText = 'animation: slideOutRight 500ms';
    }

      setTimeout(() => {
        onCategorySlideBtn(value); 
        figRef.current.style.cssText = 'animation: fadeIn 500ms';
      }, '200');
    
  }

  return (
    <div className="flex-column">
      <div className="carousel">
        <button
          className="left-carousel-btn"
          data-url={categories.url}
          data-value="prev"
          onClick={handleSlide}>
          &#5130;
        </button>

        <div className="slide">
          <figure className="fig-fade-in" ref={figRef}>
            <img src={img} alt="" />
          </figure>
        </div>

        <button
          className="right-carousel-btn"
          data-url={categories.url}
          data-value="next"
          onClick={handleSlide}>
          &#5125;
        </button>
      </div>
      <div className="flex-row">
        <p>People</p>
        <p>Planets</p>
        <p>Films</p>
        <p>Species</p>
        <p>Vehicles</p>
        <p>Starships</p>
      </div>
    </div>
  );
}

export default Carousel;
