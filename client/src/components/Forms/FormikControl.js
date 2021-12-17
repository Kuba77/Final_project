import React from 'react'
import Input from './components/Input'
import Textarea from './components/Textarea'
import classes from "./Form.module.scss"



function FormikControl(props) {
    const {control, ...rest} = props
    
   switch(control) {
       case 'input': 
       return <Input className={classes.form__input} {...rest} />
       case 'textarea': 
       return <Textarea {...rest} />
        default: return null
   }
}

export default FormikControl
