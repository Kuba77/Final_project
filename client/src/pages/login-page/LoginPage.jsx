import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer, logOrRegisterCustomer } from "../../api/userApi";

import { GoogleLogin } from "react-google-login";

import * as Yup from "yup";

const LoginPage = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const responseSuccessGoogle = (response) => {
    logOrRegisterCustomer(response);
    console.log("GOOGLE", response);
  };
  const responseErrorGoogle = (response) => {};

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
      loginCustomer(values, dispatch);
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
        {user.name && <h1>hi {user.name}</h1>}
      </div>
      <div>
        <GoogleLogin
          clientId="649718085227-lo924pc5nifh55shg8u0gf3vm7olsmvn.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
      </div>
    </div>
  );
};

export default LoginPage;
