import React, { useCallback } from "react";
import { Formik, Form} from "formik";
import { Link, useHistory } from "react-router-dom";
import FormikControl from "./FormikControl";
import classes from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { logOrRegisterCustomer } from "../../services/user";
import { GoogleLogin } from "react-google-login";
import TextError from "./components/TextError";
import configData from "../../config/config.json";

function LoginForm(props) {
  const { initialValues, validationSchema, onSubmit, errorMessage } = props;
  console.log(errorMessage)
  const dispatch = useDispatch();
  const history = useHistory();

  const responseSuccessGoogle = useCallback(
    async (response) => {
      try {
        let customer = await logOrRegisterCustomer(response);
        if (customer.message) {
          dispatch(setErors(customer.message));
        } else {
          dispatch(setCustomer(customer));
          history.push("/");
          dispatch(clearErrors());
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch]
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
