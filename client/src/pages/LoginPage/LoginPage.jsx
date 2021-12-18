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
import { getCustomerCart, moveCartToDB, updateCart } from "../../services/cart";
import { setItemInCart } from "../../store/cart/reducer";

///
import { InCart } from "../../store/selectors";
import { prepToMove } from "../../utils/utils";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);

  const singIn = useCallback(
    async (values) => {
      try {
        let customer = await loginCustomer(values);
        if (customer.id) {
          try {
            const customerCart = await getCustomerCart();
            if (customerCart === null && InCart(store).length > 0) {
              const localCart = prepToMove(InCart(store));
              await moveCartToDB(localCart);
              console.log("1");
            }
            if (customerCart !== null && InCart(store).length > 0) {
              const localCart = prepToMove(InCart(store));
              await updateCart(localCart);
              console.log("2");
            } else {
              customerCart.products.forEach(function (item) {
                dispatch(setItemInCart(item));
                console.log("3");
              });
            }
          } catch (error) {
            dispatch(setErors(error.response));
          }
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
    console.log("InCart(store222)", InCart(store));
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
