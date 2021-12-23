import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCustomer } from "../../store/customer/reducer";
import { setErors, clearErrors } from "../../store/errors/reducer";
import { registerCustomer, loginCustomer } from "../../services/user";
import { RegistrationSchema } from "../../components/Forms/ValidationSchema";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { errorMessage } from "../../store/selectors";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { stateCart } from "../../store/selectors";
import { customerCartMovement } from "../../utils/utils";
import { setItemInCart, clearCart } from "../../store/cart/reducer";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singUp = useCallback(
    async (value) => {
      try {
        let newCustomer = await registerCustomer(value);
        if (newCustomer.data._id) {
          let customer = await loginCustomer({
            loginOrEmail: value.email,
            password: value.password,
          });
          if (customer.id) {
            try {
              const customerCart = await customerCartMovement(stateCart(store));
              dispatch(clearCart());
              customerCart.forEach(function (item) {
                dispatch(setItemInCart(item));
              });
            } catch (error) {
              dispatch(setErors(error.response));
            }
            dispatch(setCustomer(customer));
            dispatch(clearErrors());
            history.push("/");
          } else {
            dispatch(setErors(customer));
          }
        }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },

    [dispatch, history, store]
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
    if (error.length === 0) {
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
