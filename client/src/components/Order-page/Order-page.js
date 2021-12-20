import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewOrder } from "../../store/order/reducer";
import { useHistory } from "react-router-dom";
import { setErors, clearErrors } from "../../store/errors/reducer";
import OrderForm from "../Forms/OrderForm";
import { OrderSchema } from "../Forms/ValidationSchema";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { createNewOrder } from "../../services/order";
import { errorMessage } from "../../store/selectors";

const OrderPage = () => {
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state);
  // const history = useHistory();

  // const createOrderObject = useCallback(
  //   async (values) => {
  //     try {
  //       let newOrder = await createNewOrder(values);
  //       if (newOrder.message) {
  //         dispatch(setErors(newOrder.message));
  //       } else {
  //         dispatch(setNewOrder(newOrder.data));
  //         dispatch(clearErrors());
  //       }
  //     } catch (er) {
  //       dispatch(setErors(er.response));
  //     }
  //   },
  //   [dispatch]
  // );
  // const error = errorMessage(store);
  const onSubmit = (values) => {
    console.log(values);
  };
  const initialValues = {
    deliveryAdress: {
      country: "asd",
      city: "asd",
      adress: "asd",
      postal: "12345",
    },
    firstName: "asd",
    lastName: "asd",
    email: "asd@qwe.qwe",
    mobile: "1234567",
  };
  const validationSchema = OrderSchema;
  return (
    <>
      <Header />
      <OrderForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // errorMessage={error}
      />
      <Footer />
    </>
  );
};

export default OrderPage;
