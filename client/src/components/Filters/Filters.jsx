import React from "react";
import СheckboxFilter from "./checkboxFilter/СheckboxFilter";
import SortFilter from "./sortFilter/SortFilter";

function Filters(props) {
  const { getselectedGenre, sortProductByPrice } = props;

  return (
    <div>
      <h1>GENRE FILTER</h1>
      <>
        <СheckboxFilter getselectedGenre={getselectedGenre} />
      </>
      <h1>SORT FILTER</h1>
      <>
        <SortFilter sortProductByPrice={sortProductByPrice} />
      </>
    </div>
  );
}

export default Filters;
