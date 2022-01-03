import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./TextError";
import classes from "../Form.module.scss";

function Textarea(props) {
    const {label, name, ...rest} = props
    return (
        <div className={classes.form__control}>
            <Field as="textarea" className={classes.form__textarea} id={name} name={name}  {...rest}/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;