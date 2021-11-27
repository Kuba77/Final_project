import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { logOrRegisterCustomer, loginCustomer } from "../../api/userApi";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";

import * as Yup from "yup";

const LoginPage = () => {
  const dispatch = useDispatch();

  async function singIn(info) {
    try {
      let customer = await loginCustomer(info);
      if (customer.loginOrEmail) {
        dispatch(setErors(customer));
      } else {
        dispatch(setCustomer(customer));
        dispatch(clearErrors());
      }
    } catch (e) {
      console.log(e.response);
      dispatch(setErors(e.response));
    }
  }

  async function responseSuccessGoogle(response) {
    try {
      let customer = await logOrRegisterCustomer(response);
      dispatch(setCustomer(customer));
    } catch (e) {
      dispatch(setErors(e.response));
    }
  }

  const responseErrorGoogle = (response) => {
    dispatch(setErors(response.message));
  };

  const formik = useFormik({
    initialValues: {
      loginOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      loginOrEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(7, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      singIn(values);
    },
  });

  return (
    <div>
      <h1>LOGIN</h1>
      <div className="Form zone">
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
    </div>
  );
};

export default LoginPage;
