import React from "react";
import "./resultItem.css";

export function ResultItem(props) {
  return (
    <li>
      <button className="result-btn">{props.name}</button>
    </li>
  );
}
