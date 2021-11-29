import React, { useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logOrRegisterCustomer, loginCustomer } from "../../api/userApi";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";
import { LoginSchema } from "../../components/forms/components/formValidation";

const LoginPage = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customerData);
  const error = useSelector((state) => state.errors.errorsData);

  const singIn = useCallback(
    async (info) => {
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
    },
    [customer]
  );
  ////////////////////////////////////////////////////////////////
  const responseSuccessGoogle = useCallback(
    async (response) => {
      try {
        let customer = await logOrRegisterCustomer(response);
        dispatch(setCustomer(customer));
      } catch (e) {
        dispatch(setErors(e.response));
      }
    },
    [customer]
  );

  async function responseErrorGoogle(response) {}

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
      <h2> Welcome back {customer.firstName}</h2>
      <h2>{error.loginOrEmail}</h2>
    </div>
  );
};

export default LoginPage;
