import React, { useRef, useEffect } from "react";
import "./CarouselMenu.css";

function CarouselMenu({
  categories,
  onCategoryChange,
  img,
  currentRef,
  currentIndex,
}) {
  //declaring a reference for the figure element
  const figRef = useRef(null);

  // handle the arrow buttons for next and previous category/image in the carousel
  function handleSlide(e) {
    let value = e.target.dataset.value;
    //adding the slide out animation to the image depending on which button is clicked
    if (value === "next") {
      figRef.current.style.cssText = "animation: slideOutLeft 500ms";
    }
    if (value === "prev") {
      figRef.current.style.cssText = "animation: slideOutRight 500ms";
    }
    // sends the value of the button clicked to onCategoryChange in App.js for handling state and adds a fade in animation to the image
    setTimeout(() => {
      onCategoryChange(value);
      figRef.current.style.cssText = "animation: fadeIn 500ms";
    }, "200");
  }

  // handle the category text buttons
  function handleCategoryClick(e) {
    let index = e.target.dataset.index;
    //adding the slide out animation to the image depending on if the next category is before or after the current
    if (index > currentIndex) {
      figRef.current.style.cssText = "animation: slideOutLeft 500ms";
    }
    if (index < currentIndex) {
      figRef.current.style.cssText = "animation: slideOutRight 500ms";
    }
    // sends the value of the button clicked to onCategoryChange in App.js for handling state and adds a fade in animation to the image
    setTimeout(() => {
      onCategoryChange(index);
      figRef.current.style.cssText = "animation: fadeIn 500ms";
    }, "200");
  }

  // sets the styling for the current category text button to highlight it.
  useEffect(() => {
    categories.forEach((category) => {
      category.ref.current.style.cssText =
        category.ref === currentRef ? "font-size: 1rem; color: #bafdffd7;" : "";
    });
  });

  return (
    <div className="flex-column">
      <div className="carousel">
        <button
          className="left-carousel-btn"
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
          data-value="next"
          onClick={handleSlide}>
          &#5125;
        </button>
      </div>
      <div className="flex-row">
        {categories.map((category) => {
          return (
            <p
              key={categories.indexOf(category)}
              ref={category.ref}
              onClick={handleCategoryClick}
              data-index={categories.indexOf(category)}>
              {category.name}
            </p>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default CarouselMenu;
