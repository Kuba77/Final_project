import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import classes from "./Form.module.scss";

const OrderForm = (props) => {
  const { initialValues, validationSchema } = props;
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => {
        return (
          <div className={classes.form__wrapper}>
            <h1 className={classes.from_title}>Order form</h1>
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your firstname"
                name="firstName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your lastname"
                name="lastName"
              />
              <FormikControl
                control="input"
                type="tel"
                label="Please, enter your mobile phone"
                name="mobile"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your country"
                name="country"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your city"
                name="city"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your adress"
                name="adress"
              />
              <FormikControl
                control="input"
                type="number"
                label="Please, enter your postcode"
                name="postal"
              />
            </Form>
            <button
              className={classes.form__btn}
              type="submit"
              disabled={!formik.isValid}
            >
              Submit
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export default OrderForm;
