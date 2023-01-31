import React from "react";
import "./resultItem.css";

export function ResultItem(props) {
  function handleClick() {
    console.log(props.details);
    props.onShowDetailsBtn(props.details);
  }

  return (
    <button className="result-btn" onClick={handleClick} data-url={props.url}>
      {props.name}
    </button>
  );
}
