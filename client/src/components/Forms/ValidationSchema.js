import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const LoginSchema = Yup.object({
  loginOrEmail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Must be 7 characters or more")
    .required("Required"),
});

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
    .min(7, "Must be 7 characters or more")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(7, "Must be 7 characters or more")
    .required("Required"),
});

export const OrderSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),

  country: Yup.string().required(),
  city: Yup.string().required(),
  adress: Yup.string().required(),
  postal: Yup.string()
    .max(5, "Must be 5 numbers of postal index")
    .min(5, "Must be 5 numbers of postal index")
    .required("Required"),
});

export const CommentSchema = Yup.object({
  content: Yup.string()
  .max(180, "Must be 180 characters or less")
  .min(1, "Must be 1 characters or more")
});