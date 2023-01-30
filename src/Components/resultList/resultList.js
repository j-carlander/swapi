import React from "react";
import { ResultItem } from "../ResultItem/resultItem";
import "./resultList.css";

export function ResultList(props) {
  if (!props.result) return <div>Loading...</div>;

  let nextPage = props.result[1][1];
  let prevPage = props.result[2][1];

  let count = Math.ceil(props.result[0][1] / 10);
  console.log(count);
  let pageNumber = 1;
  console.log(props.result[1][1]);

  function handleChangePage(e) {
    if (e.target.dataset.value == "next") {
      if (pageNumber < count) {
        pageNumber++;
      } else if (pageNumber === count) {
      }
    }
    if (e.target.dataset.value == "prev") {
    }

    props.onPageBtn(e);
  }

  let resultList = props.result[3][1];
  resultList.map((item) => console.log(item.name ? item.name : item.title));
  console.log(props.result[3][1]);
  return (
    <div>
      <div className="flex-column">
        {resultList.map((item) => {
          return (
            <ResultItem
              key={item.name ? item.name : item.title} //since films-category dont have name but title
              name={item.name ? item.name : item.title}
            />
          );
        })}
      </div>
      <div className="flex-space-around">
        <button
          className="left-resultList-btn"
          data-value="prev"
          data-url={prevPage}
          onClick={handleChangePage}>
          &#171;
        </button>
        <p>
          page: {pageNumber}/{count}
        </p>
        <button
          className="right-resultList-btn"
          data-value="next"
          data-url={nextPage}
          onClick={handleChangePage}>
          &#187;
        </button>
      </div>
    </div>
  );
}
