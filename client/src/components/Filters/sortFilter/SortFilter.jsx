import React from "react";

function SortFilter(props) {
  return (
    <div>
      <select
        onChange={(e) => {
          props.sortProductByPrice(e.target.value);
        }}
      >
        <option value="">SORT</option>
        <option value="-currentPrice">от Дорогого</option>
        <option value=" currentPrice">от Дешевого</option>
      </select>
    </div>
  );
}

export default SortFilter;
