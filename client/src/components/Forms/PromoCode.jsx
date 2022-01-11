import React from "react";
import { useFormik } from "formik";

const PromoCodeForm = (props) => {
  const { addPromoCode } = props;
  const formik = useFormik({
    initialValues: {
      promo: "",
    },
    onSubmit: (values) => {
      let word = values.promo;
      addPromoCode(word);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="promo"
        name="promo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.promo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default PromoCodeForm;
