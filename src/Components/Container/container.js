import React from "react";
import "./container.css";
// import { Children } from "react";

export function Container({children}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}