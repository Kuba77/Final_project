import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { registerCustomer } from "../../services/user";
import { RegistrationSchema } from "../../components/Forms/ValidationSchema";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { errorMessage } from "../../store/selectors";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singUp = useCallback(
    async (value) => {
      try {
        let newCustomer = await registerCustomer(value);
        if (newCustomer.message) {
          dispatch(setErors(newCustomer.message));
        } else {
          dispatch(setCustomer(newCustomer.data));
          dispatch(clearErrors());
        }
      } catch (err) {
        dispatch(setErors(err.response));
      }
    },
    [dispatch]
  );

  const initialValues = {
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = RegistrationSchema;
  const error = errorMessage(store);
  
  

  const onSubmit = (values) => {
    singUp(values);
    if(error.length === 0) {
       history.push("/");
    }
   
  };

  return (
    <>
      <Header />
      <RegistrationForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        errorMessage={error}
      />
      <Footer />
    </>
  );
};

export default RegistrationPage;
