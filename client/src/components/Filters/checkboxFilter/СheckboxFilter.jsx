import React, { useCallback, useEffect, useState } from "react";

function СheckboxFilter(props) {
  const { item } = props;
  return (
    <label id={item.id}>
      {item.id}
      <input type="checkbox" name={item.name} onChange={props.onClick} />
    </label>
  );
}

export default СheckboxFilter;
