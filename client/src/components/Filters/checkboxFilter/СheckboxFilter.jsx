import React from "react";

function СheckboxFilter(props) {
  const {  getselectedGenre } = props;
  return (
    <div>
      <label id="Action">
        "Action"
        <input
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
