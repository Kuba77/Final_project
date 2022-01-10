import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegExp = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;  

const postalRegExp = /^\d{4,16}/;


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
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  deliveryAdress: Yup.object({
    country: Yup.string()
    .matches(nameRegExp, "The name of the country is wrong")
    .required("Required"),
    city: Yup.string()
    .matches(nameRegExp, "The name of the city is wrong")
    .required("Required"),
    adress: Yup.string().required("Required"),
    postal: Yup.string()
      .matches(postalRegExp, "Postal code is not valid")
      .max(16, "Must be 5 numbers of postal index")
      .min(4, "Must be 5 numbers of postal index")
      .required("Required"),
  }),
});
