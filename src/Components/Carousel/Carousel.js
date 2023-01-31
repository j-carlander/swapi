import { func } from "prop-types";
import React, { useRef } from "react";
import "./Carousel.css";

function Carousel({ categories, onCategorySlideBtn, img, name }) {
  function handleSlide(e) {
    let el = e.target;
    let value = el.dataset.value;

    if (value === "next") {
    }
    if (value === "prev") {
    }

    onCategorySlideBtn(value);
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
          <figure>
            <img src={img} alt="" />
            {/* <figcaption>{name}</figcaption> */}
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
        <p>Pep</p>
        <p>pla</p>
        <p>veh</p>
        <p>fil</p>
        <p>sta</p>
        <p>spe</p>
      </div>
    </div>
  );
}

export default Carousel;
