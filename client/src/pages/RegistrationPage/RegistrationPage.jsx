import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { welcomeToTheNewGuy } from "../../store/customer/reducer";
import { RegistrationSchema } from "../../components/Forms/ValidationSchema";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { errorMessage } from "../../store/selectors";

import { customerName } from "../../store/selectors";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singUp = (value) => {
    dispatch(welcomeToTheNewGuy(value));
  };

  useEffect(() => {
    if (customerName(store)) {
      history.push("/");
    }
  }, [store]);

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
  };

  return (
    <>
      <RegistrationForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        errorMessage={error}
      />
    </>
  );
};

export default RegistrationPage;
