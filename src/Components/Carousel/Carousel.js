import React, { useRef, useEffect } from "react";
import "./Carousel.css";


function Carousel({ categories, onCategorySlideBtn, img, currentRef, onCategoryClickBtn, currentIndex }) {

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

  function handleCategoryClick(e) {

    let el = e.target;
    let index = el.dataset.index;


    if (index > currentIndex) {
      figRef.current.style.cssText = 'animation: slideOutLeft 500ms';
    }
    if (index < currentIndex) {
      figRef.current.style.cssText = 'animation: slideOutRight 500ms';
    }

      setTimeout(() => {
        onCategoryClickBtn(index); 
        figRef.current.style.cssText = 'animation: fadeIn 500ms';
      }, '200');
      
  }

  useEffect(() => {
    categories.forEach(category => {
      category.ref.current.style.cssText = category.ref === currentRef ? 'font-size: 1rem; color: #bafdffd7;' : "";
    });
  })

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
        {categories.map(category => {
          return <p key={categories.indexOf(category)} ref={category.ref} onClick={handleCategoryClick} data-index={categories.indexOf(category)}>{category.name}</p>
        })};
      </div>
    </div>
  );
}

export default Carousel;
