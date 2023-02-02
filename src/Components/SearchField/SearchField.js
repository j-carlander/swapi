import React, { useRef, useEffect } from "react";
import "./SearchField.css";
import lightsaberIcon from "../../img/smallLightsaberBtn.png";

export function SearchField({
  chosenCategory,
  onSearch,
  resetSearchField,
  onResetSearch,
}) {
  const inputRef = useRef(null);

  let placeholderText = `Search ${chosenCategory}...`;

  // set the input field value to empty if search has been reset
  useEffect(() => {
    if (resetSearchField) {
      inputRef.current.value = "";
    }
  });

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  }

  return (
    <div className="search-field">
      <input
        type="text"
        name="serachField"
        id="searchField"
        placeholder={placeholderText}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {!resetSearchField && (
        <button onClick={onResetSearch} className="lightsaber-btn">
          <img src={lightsaberIcon} alt="lightsaber cross Icon" />
          {" Clear"}
        </button>
      )}
      {/* Show clearbutton only if resetSearchFiled is false */}
    </div>
  );
}
