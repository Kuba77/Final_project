import React from "react";
import classes from "./Categories.module.scss";
import Calc from "./Calc";
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
  const { name, id } = props.item;
  return (
    <Link className={classes.action_book} to={`category/${id}`}>
      {name}
      {/* <div className={classes.calc_item}>
        <Calc calc={"calc+"} />
      </div> */}
    </Link>
  );
};

export default CategoriesItem;
