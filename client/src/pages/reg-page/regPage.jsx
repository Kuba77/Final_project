import React from "react";
import { useFormik } from "formik";
import { registerCustomer } from "../../api/userApi";
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
const RegPage = () => {
  ////////////////---ФОРМА---/////////////////////
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      email: "",
      password: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      registerCustomer(values);
      console.log(values);
    },
  });

  return (
    <div>
      <h1>REGISTRATION</h1>

      <div className="Form zone">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegPage;
