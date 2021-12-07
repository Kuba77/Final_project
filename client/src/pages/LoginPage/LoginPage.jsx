import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginCustomer } from "../../api/userApi";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import { LoginSchema } from "../../components/Forms/ValidationSchema";
import LoginForm from "../../components/Forms/LoginForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    email: "",
    password: "",
  };
  const validationSchema = LoginSchema;

  const onSubmit = (values) => {
    singIn(values);
    history.push("/");
  };

  return (
    <>
      <Header />
      <LoginForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
      <Footer />
    </>
  );
};

export default LoginPage;
