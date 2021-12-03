import React from "react";
import classes from "./Categories.module.scss"

const Calc = (props) => {
    const {calc} = props;
    return(
        <p className={classes.calc}>{calc}</p>
    )
}

export default Calc;