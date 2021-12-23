import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import classes from "./Form.module.scss";
// import { useSelector } from "react-redux";

const OrderForm = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;
  // const store = useSelector((state) => state);
  // const customerData = store.customer.customerData;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className={classes.form__wrapper}>
            <h1 className={classes.from_title}>Order form</h1>
            <Form>
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
                name="deliveryAdress.country"
              />

              <FormikControl
                control="input"
                type="text"
                label="Please, enter your city"
                name="deliveryAdress.city"
              />
              <FormikControl
                control="input"
                type="text"
                label="Please, enter your adress"
                name="deliveryAdress.adress"
              />
              <FormikControl
                control="input"
                type="number"
                label="Please, enter your postcode"
                name="deliveryAdress.postal"
              />
              <button
                className={classes.form__btn}
                type="submit"
                disabled={!formik.isValid}
              >
                Submit
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default OrderForm;
