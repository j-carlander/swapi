import React from "react";
import "./carouselItem.css";

export function CarouselItem(props) {
    return (
        <figure>
            <img src={props.src} alt="" />
            <figcaption>{props.category}</figcaption>
        </figure>
    )
}