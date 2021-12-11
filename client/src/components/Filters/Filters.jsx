import React from "react";
import СheckboxFilter from "./checkboxFilter/СheckboxFilter";
import SortFilter from "./sortFilter/SortFilter";

function Filters(props) {
  const { getselectedGenre, sortProductByPrice, genderSelected, sort } = props;

  return (
    <div>
      <h1>GENRE FILTER</h1>
      <>
        <СheckboxFilter
          getselectedGenre={getselectedGenre}
          genderSelected={genderSelected}
        />
      </>
      <h1>SORT FILTER</h1>
      <>
        <SortFilter sortProductByPrice={sortProductByPrice} sort={sort} />
      </>
    </div>
  );
}

export default Filters;
