import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OrderForm from "../Forms/OrderForm";
import { OrderSchema } from "../Forms/ValidationSchema";
import { createOrder } from "../../store/order/reducer";
import { updateCustomer } from "../../store/customer/reducer";

import { itemsInCart } from "../../store/selectors";

const OrderPage = () => {
  //потом поправить
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const customerData = store.customer.customerData;

  useEffect(() => {
    if (itemsInCart(store).length === 0) history.push("/");
  }, [store]);

  const initialValuesUserForm = {
    deliveryAdress: {
      country: customerData.deliveryAdress?.country
        ? customerData?.deliveryAdress.country
        : "",
      city: customerData?.deliveryAdress?.city
        ? customerData?.deliveryAdress?.city
        : "",
      adress: customerData.deliveryAdress?.adress
        ? customerData?.deliveryAdress.adress
        : "",
      postal: customerData.deliveryAdress?.postal
        ? customerData?.deliveryAdress.postal
        : "",
    },
    email: customerData?.email ? customerData?.email : "",
    mobile: customerData?.mobile ? customerData?.mobile : "",
    shipping: "Kiev 50UAH",
    paymentInfo: "Credit card",
    status: "not shipped",
  };

  const onSubmit = (value) => {
    dispatch(createOrder(value));
    dispatch(updateCustomer(value));
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
