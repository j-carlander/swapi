import React from "react";
import { ResultItem } from "../ResultItem/resultItem";
import "./resultList.css";

export function ResultList(props) {
  if (!props.result) return <div>Loading...</div>;

  let nextPage = props.result[1][1];
  let prevPage = props.result[2][1];

  let count = Math.ceil(props.result[0][1] / 10);

  let resultList = props.result[3][1];


  return (
    <div>
      <div className="flex-column">
        {resultList.map((item) => {
          return (
            <ResultItem
              key={item.name ? item.name : item.title} //since films-category dont have name but title
              name={item.name ? item.name : item.title}
              url={item.url}
              onShowDetailsBtn={props.onShowDetailsBtn}
              details={item}
            />
          );
        })}
      </div>
      <div className="flex-space-around">
        <button
          className={
            prevPage ? "left-resultList-btn" : "left-resultList-btn disabled"
          }
          data-value="prev"
          data-url={prevPage}
          onClick={props.onChangePageBtn}>
          &#171;
        </button>
        <p>
          page: {props.pageNumber}/{count}
        </p>
        <button
          className={
            nextPage ? "right-resultList-btn" : "right-resultList-btn disabled"
          }
          data-value="next"
          data-url={nextPage}
          onClick={props.onChangePageBtn}>
          &#187;
        </button>
      </div>
    </div>
  );
}
