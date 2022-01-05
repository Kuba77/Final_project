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
import { getCustomerCart } from "../../services/cart";
import axios from "../../services/htttWraper";
import configData from "../../config/config.json";

import { letterHtml, letterSubject } from "./letterConfig";

const OrderPage = () => {
  // const customerCartData = await getCustomerCart();

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const history = useHistory();

  const createOrderObject = useCallback(
    async (values) => {
      try {
        let newOrder = await createNewOrder(values);
        if (newOrder.message) {
          dispatch(setErors(newOrder.message));
        } else {
          dispatch(setNewOrder(newOrder.data));
          dispatch(clearErrors());
        }
      } catch (er) {
        dispatch(setErors(er.response));
      }
    },
    [dispatch]
  );
  const error = errorMessage(store);
  const onSubmit = async (values) => {
    const resp = await getCustomerCart();
    const customer = resp.customerId;
    // const product = resp.products[0].product;

    const newOrder = {
      customerId: customer._id,
      deliveryAdress: values.deliveryAdress,
      shipping: "Kiev 50UAH",
      paymentInfo: "Credit card",
      status: "not shipped",
      email: customer.email,
      mobile: values.mobile,
      letterSubject: letterHtml,
      letterHtml: letterSubject,
    };
    createOrderObject(newOrder);

    axios.get(configData.ORDERS_URL).then((resp) => {
      alert(`Your order #${resp.data[0].orderNo}`);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    });
  };
  const initialValues = {
    deliveryAdress: {
      country: "",
      city: "",
      adress: "",
      postal: "",
    },
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
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
