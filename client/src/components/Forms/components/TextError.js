import React from 'react'
import classes from "../Form.module.scss"

function TextError(props) {
    return (
        <div className={classes.error}>
            {props.children}
        </div>
    )
}

export default TextError
