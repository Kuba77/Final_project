import React from "react";
import classes from './SortFilter.module.scss'


const SortFilter = (props) => {
  const { sort } = props;
  return (
    <div className={classes.sortfilter__container}>
      <select
        placeholder='Price range'
        value={sort}
        onChange={(e) => {
          props.sortProductByPrice(e.target.value);
        }}
      >
        <option value="-currentPrice">From expensive</option>
        <option value=" currentPrice">From cheap</option>
      </select>
    </div>
  );
}

export default SortFilter;
