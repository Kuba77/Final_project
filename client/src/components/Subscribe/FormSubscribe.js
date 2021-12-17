import React from "react";
import { Formik } from "formik";
import classes from "./Footer.module.scss";
import * as yup from "yup";

import createNewSubscribe from "../../store/subscribe/middleware"
import { connect } from "react-redux";
import {letterHtmlSubscribe, letterSubjectSubscribe} from './letterConfig'

const FormSubscribe = connect (null, {createNewSubscribe})(({
    email,
    setIsSubscribed,
     createNewSubscribe
}) => {
    const addSubscriber = async(email, letterSubject, letterHtml) =>{
        const result = await createNewSubscribe({email, letterSubject, letterHtml})
        if (!result && result.status !== 200)
        return setIsSubscribed(() => true)
        console.log(result);
    }
    
    const validationSchema = yup.object().shape({
        email: yup.string().min(4, 'Too short email').email('Invalid email').typeError('must be string').required('Enter email')
    })
    const onSubmit = (email) => {
      const credentials = {
        email, letterHtml: letterHtmlSubscribe, letterSubject: letterSubjectSubscribe
      }
      createNewSubscribe(credentials)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                }}
                validateOnBlur
                onSubmit={(values, { resetForm }) => {
                    resetForm();           
                    addSubscriber(onSubmit(values.email), letterSubjectSubscribe, letterHtmlSubscribe);
                    } 
                }  
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={classes.footer_books_subscribe_block_email}>
                        <input
                            className={classes.footer_input_subscribe}
                            type={"email"}
                            name={"email"}
                            placeholder="Type your email here"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email && <p className={classes.error}> {errors.email}</p>}
                        <button
                            className={classes.footer_button_sumbmit}
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={"submit"}
                        >Subscribe</button>
                    </div>
                )
                }
            </Formik>
        </div>

    )
})
        
                  

export default FormSubscribe;