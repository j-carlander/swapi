import React from "react";
import { ResultItem } from "../ResultItem/resultItem";
import "./resultList.css";
import lightsaberCross from "../../img/loadingSabersGIF.gif";

export function ResultList(props) {
  // if the resultlist is empty show loading screen
  if (!props.result)
    return (
      <div className="loading-screen">
        <img src={lightsaberCross} alt="" width={200} />
        <br />
        Loading...
      </div>
    );

  // variables for the next and previous page links from the fetchData result
  let nextPage = props.result.next;
  let prevPage = props.result.previous;

  // calculate the total number of pages from the count value of the fetchData result
  let count = Math.ceil(props.result.count / 10);

  // the list of results from the fetchData result
  let resultList = props.result.results;

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
