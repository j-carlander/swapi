import React from "react";
import "./resultItem.css";

export function ResultItem(props) {
  return <button className="result-btn">{props.name}</button>;
}
