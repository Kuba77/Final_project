import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const lettersRegExp = /^[a-zA-Z ]+$/;
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
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  deliveryAdress: Yup.object({
    country: Yup.string()
      .required("Required")
      .matches(lettersRegExp, "Must input only letters")
      .min(3, "Must be 25 characters or less")
      .max(25, "Must be 25 characters or less"),
    city: Yup.string()
      .required("Required")
      .matches(lettersRegExp, "Must input only letters")
      .min(3, "Must be 25 characters or less")
      .max(25, "Must be 25 characters or less"),
    adress: Yup.string()
      .required("Required")
      .min(3, "Must be 25 characters or less")
      .max(25, "Must be 25 characters or less"),
    postal: Yup.string()
      .max(5, "Must be 5 numbers of postal index")
      .min(5, "Must be 5 numbers of postal index")
      .required("Required"),
  }),
});
