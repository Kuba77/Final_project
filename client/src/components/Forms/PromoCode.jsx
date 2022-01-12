import React from "react";
import { useFormik } from "formik";
import classes from "../Cart/cart.module.scss"

const PromoCodeForm = (props) => {
  const { addPromoCode } = props;
  const formik = useFormik({
    initialValues: {
      promo: "",
    },
    onSubmit: (values, {resetForm}) => {
      let word = values.promo;
      addPromoCode(word);
      resetForm();
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className={classes.input_promo}
        id="promo"
        name="promo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.promo}
      />
      <button className={classes.button_submit} type="submit">USE</button>
    </form>
  );
};
export default PromoCodeForm;
