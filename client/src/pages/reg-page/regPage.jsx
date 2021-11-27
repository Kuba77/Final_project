import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setCustomer, removeCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { logOrRegisterCustomer, registerCustomer } from "../../api/userApi";
import { GoogleLogin } from "react-google-login";
import configData from "../../config/config.json";
import { RegistrationSchema } from "../../components/forms/components/formValidation";

const RegPage = () => {
  const dispatch = useDispatch();

  async function singUp(value) {
    try {
      let newCustomer = await registerCustomer(value);
      if (newCustomer.message) {
        dispatch(setErors(newCustomer.message));
      } else {
        dispatch(setCustomer(newCustomer.data));
        dispatch(clearErrors());
      }
    } catch (err) {
      dispatch(setErors(err.response));
    }
  }

  async function responseSuccessGoogle(response) {
    try {
      let customer = await logOrRegisterCustomer(response);
      if (customer.message) {
        dispatch(setErors(customer.message));
      } else {
        dispatch(setCustomer(customer));
      }
    } catch (e) {
      dispatch(setErors(e.response));
    }
  }

  const responseErrorGoogle = (response) => {
    dispatch(setErors(response.message));
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      singUp(values);
    },
  });

  return (
    <div>
      <h1> REGISTRATION</h1>
      <div className="Form">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="login">WHAT to call you?</label>
          <input
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          {formik.touched.login && formik.errors.login ? (
            <div>{formik.errors.login}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
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
      <GoogleLogin
        clientId={configData.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <button
        type="button"
        onClick={() => {
          dispatch(removeCustomer());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default RegPage;
