import React from "react";

const peopleDetails = [
  "height",
  "mass",
  "birth_year",
  "hair_color",
  "eye_color",
  "skin_color",
  "gender",
];

export function Details(props) {
  function formatText(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.replaceAll("_", " ");
    return string;
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        {/*  {people.map((detail) => {
          return (
            <li>
              {detail}: {props.result.detail}
            </li>
          );
        })}
        <li>Height: 172cm</li>
                <li>Mass: 77kg</li>
                <li>Hair color: Blonde</li>
                <li>Skin color: Fair</li>
                <li>Eye color: Blue</li>
                <li>Birth year: 19BBY</li>
                <li>Gender: Male</li> */}
      </ul>
    </div>
  );
}
