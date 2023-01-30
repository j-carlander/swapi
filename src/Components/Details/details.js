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
const filmDetails = [
  "episode_id",
  "director",
  "producer",
  "release_date",
  "opening_crawl",
];
const planetDetails = [
  "population",
  "climate",
  "terrain",
  "diameter",
  "orbital_period",
  "rotation_period",
];
const spiciesDetails = [
  "classification",
  "designation",
  "average_height",
  "skin_colors",
  "hair_colors",
  "eye_colors",
  "average_lifespan",
  "language",
];
const vehicleDetails = [
  "model",
  "manufacturer",
  "cost_in_credits",
  "length",
  "max_atmosphering_speed",
  "crew",
  "passengers",
  "cargo_capacity",
  "consumables",
  "vehicle_class",
];
const starshipDetails = [
  "model",
  "manufacturer",
  "cost_in_credits",
  "length",
  "max_atmosphering_speed",
  "crew",
  "passengers",
  "cargo_capacity",
  "consumables",
  "hyperdrive_rating",
  "MGLT",
  "starship_class",
];

export function Details(props) {
  function formatText(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.replaceAll("_", " ");
    return string;
  }

  if (props.category == "Starships") {
    return (
      <div>
        <h3>{props.details.name}</h3>
        <ul>
          <li>Model: {props.details.model}</li>
          <li>Manufacturer: {props.details.manufacturer}</li>
          <li>Length: {props.details.length}m</li>
          <li>Crew: {props.details.crew}</li>
          <li>Passengers: {props.details.passengers}</li>
          <li>Cargo capacity: {props.details.cargo_capacity}kg</li>
          <li>Hyperdrive rating: {props.details.hyperdrive_rating}</li>
          <li>
            Megalights/h: {props.details.MGLT} MGLT (1 MGLT ~ 0.0755
            lightyears/h)
          </li>
          <li>Starship class: {props.details.starship_class}</li>
        </ul>
      </div>
    );
  }
}

// <li>Hair color: Blonde</li>
// <li>Skin color: Fair</li>
// <li>Eye color: Blue</li>
// <li>Birth year: 19BBY</li>
// <li>Gender: Male</li>

/*  {people.map((detail) => {
          return (
            <li>
              {detail}: {props.result.detail}
            </li>
          );
        })}*/
