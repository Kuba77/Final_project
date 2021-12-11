import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginCustomer } from "../../services/user";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { setCustomer } from "../../store/customer/reducer";
import { LoginSchema } from "../../components/Forms/ValidationSchema";
import LoginForm from "../../components/Forms/LoginForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singIn = useCallback(
    async (values) => {
      try {
        let customer = await loginCustomer(values);
        if (customer.id) {
          dispatch(setCustomer(customer));
          dispatch(clearErrors());
          history.push("/");
        } else {
          dispatch(setErors(customer));
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch]
  );

  const initialValues = {
    loginOrEmail: "",
    password: "",
  };
  const validationSchema = LoginSchema;


  const onSubmit = (values) => {
    singIn(values);
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
