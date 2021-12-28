import React, { useCallback } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import classes from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../store/customer/reducer";
import { setErors } from "../../store/errors/reducer";
import { logOrRegisterCustomer } from "../../services/user";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";
import TextError from "./components/TextError";
import { useHistory } from "react-router-dom";

function RegistrationForm(props) {
  const { initialValues, validationSchema, onSubmit, errorMessage } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className={classes.form__wrapper}>
            <h1>Registration form</h1>
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your first name"
                name="firstName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your last name"
                name="lastName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your login"
                name="login"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <TextError>{errorMessage}</TextError>
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
              <div className={classes.button__wrapper}>
                <button
                  className={classes.form__btn}
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
