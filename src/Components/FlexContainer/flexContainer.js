import React from "react";
import "./flexContainer.css";

export function FlexContainer({children}) {
    return (
        <div className="flex-container">
            {children}
        </div>
    )
}