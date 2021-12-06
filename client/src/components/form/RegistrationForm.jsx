import React, { useCallback } from 'react'
import { Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import classes from "./Form.module.scss"
import { useDispatch } from "react-redux";
import { setCustomer, removeCustomer } from "../../store/customer/reducer";
import { setErors} from "../../store/errors/reducer";
import { logOrRegisterCustomer} from "../../api/userApi";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";
import TextError from './components/TextError';

function RegistrationForm(props) {
  const { initialValues, validationSchema, onSubmit,  errorMessage} = props;

  const dispatch = useDispatch();

  const responseSuccessGoogle = useCallback(
    async (response) => {
      try {
        let customer = await logOrRegisterCustomer(response);
        if (customer.message) {
          dispatch(setErors(customer.message));
        } else {
          dispatch(setCustomer(customer));
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
      {formik => {
        return (
          <div className={classes.form__wrapper}>
          <h1>Registration form</h1>
          <Form>
            <FormikControl
              control='input'
              type='text'
              label='Please, enter your first name'
              name='firstName'
            />
            <FormikControl
              control='input'
              type='text'
              label='Please, enter your last name'
              name='lastName'
            />
            <FormikControl
              control='input'
              type='text'
              label='Please, enter your login'
              name='login'
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <TextError>{errorMessage}</TextError>
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <div className={classes.button__wrapper}>
              <button className={classes.form__btn} type='submit' disabled={!formik.isValid}>
                Submit
              </button>
              {/* <button
                className="form__btn"
                type="button"
                onClick={() => { dispatch(removeCustomer()); }}
              >
                LOGOUT
              </button> */}
              <GoogleLogin
                clientId={configData.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Register with google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </Form>
          </div>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm