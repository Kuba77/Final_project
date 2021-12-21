import React from "react";
import OrderForm from "../Forms/OrderForm";
import { OrderSchema } from "../Forms/ValidationSchema";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OrderPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    adress: "",
    postal: "",
  };
  const validationSchema = OrderSchema;
  return (
    <>
      <Header />
      <OrderForm
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
      <Footer />
    </>
  );
};

export default OrderPage;
