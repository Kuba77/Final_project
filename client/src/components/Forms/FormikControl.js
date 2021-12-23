import React from 'react'
import Input from './components/Input'
import classes from "./Form.module.scss"



function FormikControl(props) {
    const {control, ...rest} = props
    
   switch(control) {
       case 'input': 
       return <Input className={classes.form__input} {...rest} />
        default: return null
   }
}

export default FormikControl
