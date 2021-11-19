import React from "react";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";/
import { loginCustomer, logOutCustomer } from "../../api/userApi";
// import { isAuth, setUser } from "../store/actions";

///////////////////ПРАВИЛА ИНПУТОВ////////////////////////

// const validationSchema = yup.object({
//   loginOrEmail: yup
//     .string("Enter your email")
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup
//     .string("Enter your password")
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });
const LoginPage = () => {
  ////////////////---ФОРМА---/////////////////////
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      password: "",
      email: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      loginCustomer(values);
    },
  });

  return (
    <div>
      <h1>LoginPage</h1>

      <div className="Form zone">
        <div>
          <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            /> */}
            <label htmlFor="lastName">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <button type="submit">Submit</button>
          </form>

          <button
            onClick={() => {
              logOutCustomer();
              // dispatch(isAuth(false));
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
