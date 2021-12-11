import React from 'react'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import classes from "../Form.module.scss"


function Input(props) {
    const {label, name, ...rest} = props
    return (
        <div className={classes.form__control}>
            <label className={classes.form__label} htmlFor={name}>{label}</label>
            <Field id={name} name={name}  {...rest}/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
