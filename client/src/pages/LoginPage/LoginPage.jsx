import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { letHimComeIn } from "../../store/customer/reducer";
import { LoginSchema } from "../../components/Forms/ValidationSchema";
import LoginForm from "../../components/Forms/LoginForm";
import { customerName } from "../../store/selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singIn = (value) => {
    dispatch(letHimComeIn(value));
  };

  useEffect(() => {
    if (customerName(store)) {
      history.push("/");
    }
  }, [store]);

  const initialValues = {
    loginOrEmail: "",
    password: "",
  };
  const validationSchema = LoginSchema;

  const onSubmit = (value) => {
    singIn(value);
  };

  return (
    <>
      <LoginForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default LoginPage;
