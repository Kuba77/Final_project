import * as Yup from "yup";

export const RegistrationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  login: Yup.string()
    .min(3, "Must be min 3 and max 10 characters ")
    .max(10, "Must be min 3 and max 10 characters"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Must be 5 characters or more")
    .required("Required"),
});

export const LoginSchema = Yup.object({
  loginOrEmail: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(7, "Must be 5 characters or more")
    .required("Required"),
});
