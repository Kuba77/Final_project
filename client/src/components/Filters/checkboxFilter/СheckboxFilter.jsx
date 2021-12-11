import React from "react";

function СheckboxFilter(props) {
  const { genderSelected, getselectedGenre } = props;
  return (
    <div>
      <label id="Action">
        "Action"
        <input
          checked={genderSelected.includes("Action")}
          type="checkbox"
          name="Action"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
      <label id="Drama">
        "Drama"
        <input
          checked={genderSelected.includes("Drama")}
          type="checkbox"
          name="Drama"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
      <label id="Romance">
        "Romance"
        <input
          checked={genderSelected.includes("Romance")}
          type="checkbox"
          name="Romance"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
      <label id="Supernatural">
        "Supernatural"
        <input
          checked={genderSelected.includes("Supernatural")}
          type="checkbox"
          name="Supernatural"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
      <label id="Comedy">
        "Comedy"
        <input
          checked={genderSelected.includes("Comedy")}
          type="checkbox"
          name="Comedy"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
      <label id="Adventure">
        "Adventure"
        <input
          checked={genderSelected.includes("Adventure")}
          type="checkbox"
          name="Adventure"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      </label>
    </div>
  );
}

export default СheckboxFilter;
