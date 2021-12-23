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
import { successOrderNotification } from "./Order-toasts/Order-toasts";

const OrderPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const history = useHistory();
  const customerData = store.customer.customerData;
  const createOrderObject = useCallback(
    async (values) => {
      try {
        let newOrder = await createNewOrder(values);
        if (newOrder.message) {
          dispatch(setErors(newOrder.message));
        } else {
          dispatch(setNewOrder(newOrder.data));
          dispatch(clearErrors());
          // successOrderNotification(orderNumber);
        }
      } catch (er) {
        dispatch(setErors(er.response));
      }
    },
    [dispatch]
  );
  // const customerData = store.customer.customerData;
  console.log(customerData);

  const error = errorMessage(store);
  const onSubmit = async (values) => {
    const resp = await getCustomerCart();
    const customer = resp.customerId;

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
    // axios.get(configData.ORDERS_URL).then((resp) => {
    //   console.log(resp);
    //   alert(`Your order #${resp.data[0].orderNo}`);
    //   // setTimeout(() => {
    //   //   history.push("/");
    //   // }, 2000);
    // });
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
        onSubmit={onSubmit}
        errorMessage={error}
      />
      <Footer />
    </>
  );
};

export default OrderPage;
