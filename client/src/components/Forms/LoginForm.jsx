import React, { useCallback } from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import FormikControl from "./FormikControl";
import classes from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { logOrRegisterCustomer } from "../../services/user";
import { getCustomerCart, moveCartToDB, updateCart } from "../../services/cart";
import { GoogleLogin } from "react-google-login";
// import TextError from "./components/TextError";
import configData from "../../config/config.json";
import { setItemInCart } from "../../store/cart/reducer";

import { InCart } from "../../store/selectors";
import { prepToMove } from "../../utils/utils";

function LoginForm(props) {
  const { initialValues, validationSchema, onSubmit } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const responseSuccessGoogle = useCallback(
    async (response) => {
      try {
        const customer = await logOrRegisterCustomer(response);
        if (customer.id) {
          try {
            const customerCart = await getCustomerCart();
            if (customerCart === null && InCart(store).length > 0) {
              const localCart = prepToMove(InCart(store));
              await moveCartToDB(localCart);
            } else if (customerCart !== null && InCart(store).length > 0) {
              const localCart = prepToMove(InCart(store));
              await updateCart(localCart);
            } else {
              customerCart.products.forEach(function (item) {
                dispatch(setItemInCart(item));
              });
            }
          } catch (error) {
            dispatch(setErors(error.response));
          }
          dispatch(setCustomer(customer));
          dispatch(clearErrors());
          history.push("/");
        } else {
          dispatch(setErors(customer));
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch, history, store]
  );
  const responseErrorGoogle = useCallback(
    async (response) => {
      dispatch(setErors(response.message));
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className={classes.form__wrapper}>
            <h1>Login form</h1>
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="loginOrEmail"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <div className={classes.button__wrapper}>
                <button
                  className={classes.form__btn}
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
                <GoogleLogin
                  clientId={configData.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <Link className={classes.form__link} to="/registration">
                  Go to register page
                </Link>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
