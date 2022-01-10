import React from "react";
import { LiqPayPay, LiqPaySubscribe } from "react-liqpay";

const LiqPayForm = () => {
  const payInfo = {
    amount: 999,
    currency: "USD",
    title: "PAY",
  };
  const ButtonComponent = () => {
    return (
      <button
        style={{
          backgroundColor: "#337ab7",
          color: "#fff",
          borderColor: "#2e6da4",
          border: "1px solid transparent",
          borderRadius: "4px",
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >{`${payInfo.title} ${payInfo.amount} ${payInfo.currency}`}</button>
    );
  };
  return (
    <LiqPayPay
      publicKey={process.env.REACT_APP_PUBLIC_KEY}
      privateKey={process.env.REACT_APP_PRIVATE_KEY}
      description="Payment for product"
      orderId={Math.floor(1 + Math.random() * 900000000)}
      result_url="http://localhost:3000/"
      server_url=""
      product_description="Manga"
      style={{ margin: "8px" }}
      extra={[<ButtonComponent key="1" />]}
    />
  );
};
export default LiqPayForm;
