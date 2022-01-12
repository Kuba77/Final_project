import React from "react";
import FormikControl from "../FormikControl";
import { Formik, Form } from "formik";
import classes from "./CommentForm.module.scss";
import Button from "../../Button/Button";
import PropTypes from "prop-types";

const CommentForm = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="textarea"
              type="text"
              name="content"
              placeholder="Please, live your comment here..."
              onChange={formik.handleChange}
              value={formik.values.content}
            />

            <div className={classes.review__buttons}>
              <Button type="reset" size="m" onClick={formik.handleReset}>
                Reset
              </Button>

              <Button
                type="submit"
                size="m"
              >
                Send
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  )
};

CommentForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};

export default CommentForm;
