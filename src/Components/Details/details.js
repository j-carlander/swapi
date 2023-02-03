import React from "react";
import "./details.css";

// One array for each category holding the name of the properties we want to show
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
const speciesDetails = [
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
  "length",
  "crew",
  "passengers",
  "cargo_capacity",
  "hyperdrive_rating",
  "MGLT",
  "starship_class",
];

export function Details(props) {
  // returns an empty div if we don's have any details loaded.
  if (!props.details) {
    return <div></div>;
  }

  // to be able to use the category properties with a nicer styling for display
  function formatText(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.replaceAll("_", " ");
    return string;
  }
  // "loads" the right properties for the current category
  let categoryDetails = [];
  if (props.category === "People") {
    categoryDetails = peopleDetails;
  }
  if (props.category === "Planets") {
    categoryDetails = planetDetails;
  }
  if (props.category === "Films") {
    categoryDetails = filmDetails;
  }
  if (props.category === "Species") {
    categoryDetails = speciesDetails;
  }
  if (props.category === "Vehicles") {
    categoryDetails = vehicleDetails;
  }
  if (props.category === "Starships") {
    categoryDetails = starshipDetails;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={2} className="table-title">
              <h3>{props.details.name}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryDetails.map((detail) => {
            // renders a table row for each category property
            return (
              <tr key={detail}>
                <th>{formatText(detail)}:</th>
                <td>{props.details[detail]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
