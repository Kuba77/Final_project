import { Formik } from "formik";
import classes from "./Footer.module.scss"
import * as yup from "yup";

function FormSubscribe() {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').typeError('must be string')
    })


    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                }}
                validateOnBlur
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={classes.footer_books_subscribe_block_email}>

                        <label className={classes.footer_label_subscribe} htmlFor={"email"}></label><br />
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
}


export default FormSubscribe;