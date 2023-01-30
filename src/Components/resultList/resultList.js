import React from "react";
import { ResultItem } from "../ResultItem/resultItem";
import "./resultList.css";

export function ResultList(props) {
  if (!props.result) return <div>Loading...</div>;

  let resultList = props.result[3][1];
  resultList.map((item) => console.log(item.name ? item.name : item.title));
  console.log(props.result[3][1]);
  return (
    <div>
      <ul className="result-list">
        {resultList.map((item) => {
          return (
            <ResultItem
              key={item.name ? item.name : item.title} //since films-category dont have name but title
              name={item.name ? item.name : item.title}
            />
          );
        })}
      </ul>
      <button className="resultList-left-carousel-btn">&#5129;</button>
      <button className="resultList-right-carousel-btn">&#5129;</button>
    </div>
  );
}
