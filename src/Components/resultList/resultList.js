import React from "react";
import { ResultItem } from "../ResultItem/resultItem";
import "./resultList.css";

export function ResultList () {
    return (
        <div>
            <ul>
                <ResultItem name="Luke Skywalker"/>
            </ul>
            <button className="left-carousel-btn">&#5129;</button>
            <button className="right-carousel-btn">&#5129;</button>
        </div>
    )
}