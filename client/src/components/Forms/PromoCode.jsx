import React from "react";
import { useFormik } from "formik";
import classes from "./PromoCode.module.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';

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
        <div class={classes.promocode__box}>
            <input
              className={classes.promocode__input}
              placeholder='Enter promo code here'
              id="promo"
              name="promo"
              type="text"
            />
            <button type="submit" className={classes.promocode__btn}>
              <AiOutlineArrowRight/>
           </button>
      </div>
    
    </form>
  );
};
export default PromoCodeForm;
