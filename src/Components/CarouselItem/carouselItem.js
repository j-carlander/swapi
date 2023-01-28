import React from "react";
import "./carouselItem.css";

export function CarouselItem(props) {
  return (
    <figure onClick={props.onClick} data-url={props.url} data-name={props.name}>
      <img src={props.img} alt="" />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}
