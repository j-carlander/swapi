import React from "react";
import "./resultItem.css";

export function ResultItem(props) {
  return (
    <button
      className="result-btn"
      onClick={props.onShowDetailsBtn}
      data-url={props.url}>
      {props.name}
    </button>
  );
}
