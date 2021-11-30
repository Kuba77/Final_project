import React, { useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logOrRegisterCustomer, loginCustomer } from "../../api/userApi";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";
import { LoginSchema } from "../../components/forms/components/formValidation";
import { customerName, errorloginOrEmail } from "../../store/selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const singIn = useCallback(
    async (values) => {
      try {
        let customer = await loginCustomer(values);
        if (customer.loginOrEmail) {
          dispatch(setErors(customer));
        } else {
          dispatch(setCustomer(customer));
          dispatch(clearErrors());
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch]
  );

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
  const formik = useFormik({
    initialValues: {
      loginOrEmail: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      singIn(values);
    },
  });

  return (
    <div>
      <h1>LOGIN</h1>
      <div className="Form">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="loginOrEmail">Email Address</label>
          <input
            id="email"
            name="loginOrEmail"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.loginOrEmail}
          />
          {formik.touched.loginOrEmail && formik.errors.loginOrEmail ? (
            <div>{formik.errors.loginOrEmail}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <GoogleLogin
          clientId={configData.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <h2> Welcome back {customerName(store)}</h2>
      <h2>{errorloginOrEmail(store)}</h2>
    </div>
  );
};

export default LoginPage;
