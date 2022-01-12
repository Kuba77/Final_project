import * as Yup from "yup";

const phoneRegExp = /^\+?3?8?(0\d{9})$/;
const lettersRegExp = /^[a-zA-Zа-яА-Я ]+$/;
const nameRegExp = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/; 
const emailRegex =
  /^(([a-zA-Z\-0-9][^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export const LoginSchema = Yup.object({
  loginOrEmail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Must be 7 characters or more")
    .required("Required"),
});

export const RegistrationSchema = Yup.object({
  firstName: Yup.string()
    .matches(nameRegExp, "Name is not valid")
    .min(1, "Must be 2 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .matches(nameRegExp, "Last name is not valid")
    .min(1, "Must be 2 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  login: Yup.string()
    .min(3, "Must be min 3 and max 10 characters ")
    .max(10, "Must be min 3 and max 10 characters"),
  email: Yup.string()
  .email("Invalid email")
  .required("Required"),
  password: Yup.string()
    .min(7, "Must be 7 characters or more")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(7, "Must be 7 characters or more")
    .required("Required"),
});

export const OrderSchema = Yup.object({
  firstName: Yup.string()
  .matches(nameRegExp, "Name is not valid")
  .min(1, "Must be 2 characters or more")
  .max(20, "Must be 20 characters or less")
  .required("Required"),
lastName: Yup.string()
  .matches(nameRegExp, "Last name is not valid")
  .min(1, "Must be 2 characters or more")
  .max(20, "Must be 20 characters or less")
  .required("Required"),
  email: Yup.string()
    .matches(emailRegex, "Input correct email")
    .required("Required"),
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

export const CommentSchema = Yup.object({
  content: Yup.string()
  .max(180, "Must be 180 characters or less")
  .min(1, "Must be 1 characters or more")
});

export const CommentSchema = Yup.object({
  content: Yup.string()
  .max(180, "Must be 180 characters or less")
  .min(1, "Must be 1 characters or more")
});