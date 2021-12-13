import React from "react";
import СheckboxFilter from "./checkboxFilter/СheckboxFilter";
import SortFilter from "./sortFilter/SortFilter";
import classes from './Filters.module.scss'

const Filters = (props) => {
  const { getselectedGenre, sortProductByPrice, genderSelected, sort } = props;

  return (
    <div className={classes.filters__container}>
     
        <СheckboxFilter
          getselectedGenre={getselectedGenre}
          genderSelected={genderSelected}
        />
        <SortFilter sortProductByPrice={sortProductByPrice} sort={sort} />
   
    </div>
  );
}

export default Filters;
