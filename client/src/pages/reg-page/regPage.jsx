import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerCustomer } from "../../api/userApi";
import { logoutUser, setUser } from "../../store/actions";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import * as Yup from "yup";

const RegPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const state = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      login: Yup.string()
        .min(3, "Must be min 3 and max 10 characters ")
        .max(10, "Must be min 3 and max 10 characters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(7, "Must be 5 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      registerCustomer(values, dispatch);
    },
  });

  const googleSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;
    try {
      console.log("click");
      dispatch(setUser(result));
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  const googleFailure = (error) => {
    console.log("ne Voshel");
    console.log(error);
  };

  const logout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <div>
      <h1>REGISTRATION</h1>
      <div className="Form zone">
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

          <label
            htmlFor="lastName"
            onClick={() => {
              console.log("user", user);
              console.log("state", state);
              // console.log("errors", errors);
            }}
          >
            Last Name
          </label>
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
      {user.name && <h1>hi {user.name}</h1>}

      <button onClick={logout} type="button">
        LOG OUT
      </button>
    </div>
  );
};

export default RegPage;
