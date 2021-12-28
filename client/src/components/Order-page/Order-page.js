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
// import { successOrderNotification } from "./Order-toasts/Order-toasts";
// import { toast } from "react-toastify";
import axios from "../../services/htttWraper";
import configData from "../../config/config.json";

const OrderPage = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const customerData = store.customer.customerData;
  const customerCart = store.cart.products;
  // const newPaymentMethod = {
  //   customId: "payment-method-1",
  //   name: "Payment Method #1",
  //   paymentProcessor: "Adyen",
  // };
  // const handleClickPost = () => {
  //   axios
  //     .post(`${configData.PAYMENT_URL}`, newPaymentMethod)
  //     .then((newPaymentMethod) => {
  //       console.log(newPaymentMethod);
  //     });
  // };
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
  const onSubmitAuthorized = async (values) => {
    console.log(customerData);
    const resp = await getCustomerCart();
    const customer = resp.customerId;
    console.log(customer);
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
    createOrderObject(newOrder);
    alert("your order is comleted");
    setTimeout(() => {
      history.push("/");
    }, 2000);
    // handleClickPost();
  };
  const onSubmitUnauthorized = async (values) => {
    // console.log(store.cart.products);
    const newOrder = {
      products: customerCart,
      deliveryAdress: values.deliveryAdress,
      shipping: "Kiev 50UAH",
      paymentInfo: "Credit card",
      status: "not shipped",
      email: values.email,
      mobile: values.mobile,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml:
        "<h1>Your order is placed. OrderNo is </h1><p>{Other details about order in your HTML}</p>",
    };
    createOrderObject(newOrder);
  };
  const initialValuesUserForm = {
    deliveryAdress: {
      country: "",
      city: "",
      adress: "",
      postal: "",
    },
    email: !customerData ? "" : customerData.email,
    mobile: "",
  };

  const validationSchema = OrderSchema;
  return (
    <>
      <Header />
      <OrderForm
        initialValues={initialValuesUserForm}
        validationSchema={validationSchema}
        onSubmit={
          customerData.length == 0 ? onSubmitUnauthorized : onSubmitAuthorized
        }
        errorMessage={error}
      />
      <Footer />
    </>
  );
};

export default OrderPage;
