import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../Forms/OrderForm";
import { OrderSchema } from "../Forms/ValidationSchema";
import { createOrder } from "../../store/order/reducer";

const OrderPage = () => {
  //потом поправить
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const customerData = store.customer.customerData;

  const initialValuesUserForm = {
    deliveryAdress: {
      country: "",
      city: "",
      adress: "",
      postal: "",
    },
    email: !customerData ? "" : customerData.email,
    mobile: "",
    shipping: "Kiev 50UAH",
    paymentInfo: "Credit card",
    status: "not shipped",
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml:
      "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
  };

  const onSubmit = (value) => {
    dispatch(createOrder(value));
  };

  const validationSchema = OrderSchema;
  return (
    <OrderForm
      initialValues={initialValuesUserForm}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default OrderPage;
