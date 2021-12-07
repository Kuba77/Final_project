import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../../api/userApi";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import ValidationSchema from "../../components/form/ValidationSchema";
import LoginForm from "../../components/form/LoginForm";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { Formik } from "formik";



const LoginPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const singIn = useCallback(
    async (values) => {
      try {
        let customer = await loginCustomer(values);
        if (customer.email) {
          dispatch(setErors(customer));
        } else {
          dispatch(setCustomer(customer));
          dispatch(clearErrors());
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch]
  );

  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = ValidationSchema;


  const onSubmit = values => {
    singIn(values);
  }

  return (
  
    <>
      <Header />
        <LoginForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
        {/* <h2> Welcome back {customerName(store)}</h2>
        <h2>{errorloginOrEmail(store)}</h2> */}
         <Footer /> 
    </>
  );
};

export default LoginPage;
