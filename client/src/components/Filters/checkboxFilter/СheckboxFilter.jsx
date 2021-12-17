import React from "react";
import classes from "./CheckboxFilter.module.scss";

const СheckboxFilter = (props) => {
  const { genderSelected, getselectedGenre } = props;
  return (
    <div className={classes.checkbox__container}>
      <div>
      <label id="Action">
        <input
          checked={genderSelected.includes("Action")}
          type="checkbox"
          name="Action"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
          
        />
        <span>Action</span>
      </label>
      </div>
      <div>
      <label id="Drama">
        
        <input
          checked={genderSelected.includes("Drama")}
          type="checkbox"
          name="Drama"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      <span>Drama</span>
      </label>
      </div>
      <div>
      <label id="Romance">
        <input
          checked={genderSelected.includes("Romance")}
          type="checkbox"
          name="Romance"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      <span>Romance</span>
      </label>
      </div>
      <div>
      <label id="Supernatural">
        <input
          checked={genderSelected.includes("Supernatural")}
          type="checkbox"
          name="Supernatural"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      <span>Supernatural</span>
      </label>
      </div>
      <div>
      <label id="Comedy">
        <input
          checked={genderSelected.includes("Comedy")}
          type="checkbox"
          name="Comedy"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
      <span>Comedy</span>
      </label>
      </div>

      <div>
      <label id="Adventure">
        <input
          checked={genderSelected.includes("Adventure")}
          type="checkbox"
          name="Adventure"
          onChange={(e) => {
            getselectedGenre(e.target.name);
          }}
        />
       <span>Adventure</span>
      </label>
      </div>
    </div>
  );
}

export default СheckboxFilter;
