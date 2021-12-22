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
    const product = resp.products[0].product;

    const newOrder = {
      customerId: customer._id,
      deliveryAdress: values.deliveryAdress,
      shipping: "Kiev 50UAH",
      paymentInfo: "Credit card",
      status: "not shipped",
      email: customer.email,
      mobile: values.mobile,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml:
        "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
    };

    console.log(customer);
    console.log(newOrder);
  };
  const initialValues = {
    customerId: ``,
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
