import React from "react";
import FormikControl from "../FormikControl";
import { Formik, Form } from "formik";
import classes from "./CommentForm.module.scss";
import Button from "../../Button/Button";
import PropTypes from "prop-types";

const ProductCommentForm = (props) => {
  const { initialValues, validationSchema, onSubmit, onClick, onFocus } = props;
 
  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onFocus={onFocus}
    >
      {(formik) => {
        return (
          <div className={classes.product_block__review}>
            <Form>
              <FormikControl
                control="textarea"
                type="text"
                name="content"
              />

              <div className={classes.review__buttons}>
                <Button type="reset" size="m" onClick={formik.handleReset}>
                  Reset
                </Button>

                <Button
                  type="submit"
                  size="m"
                  disabled={!formik.isValid}
                  onClick={onClick}
                >
                  Send
                </Button>
              </div>

            </Form>
          </div>
        );
      }}
    </Formik>
  )
};

ProductCommentForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

export default ProductCommentForm;