import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProduct } from "../../../services/products";
import {
  createProductComment,
  deleteProductComment,
  getAllProductComments,
} from "../../../services/comments";
import { BsFillTrashFill } from "react-icons/bs";
import classes from "./ProductComments.module.scss";
import Button from "../../Button/Button";
import CommentForm from "../../Forms/CommentForm/CommentsForm";
import { CommentSchema } from "../../Forms/ValidationSchema";
import { customerData } from "../../../store/selectors";
import PropTypes from "prop-types";

const ProductComments = (props) => {
  const { product } = props;
  let { productId } = useParams();
  const [comments, setComments] = useState([]);
  const validationSchema = CommentSchema;
  const store = useSelector((state) => state);
  const initialValues = {
    content: ""
  };

  const authorizationCheck = () => {
    if (!customerData(store).id)
      alert("You must be authorized to leave a comment");
  };

  const onSubmit = async (value, { resetForm }) => {
    const newComment = {
      product: product,
      customer: customerData(store),
      content: value,
    };
    authorizationCheck();
    try {
      await createProductComment(newComment);
      getComments();
      resetForm();
    } catch (error) {
      alert(error);
    }
  }

  const getComments = useCallback(async () => {
    const productItem = await getSelectedProduct(productId);
    const productCommentsArray = await getAllProductComments(productItem._id);
    setComments(productCommentsArray);
  }, [productId]);

  useEffect(() => {
    getComments();
  }, []);

  const deleteComment = useCallback(
    async (value) => {
      await deleteProductComment(value);
      getComments();
    }, []);

  const NoComments = () => {
    return (
      <div className={classes.review__dis} >
        <p className={classes.review__text}>
          This product don't have review. Yours 'll be the first.
        </p>
      </div>)
  }

  const CommentsArray = comments.map((item) => {
    return <div key={item._id} className={classes.review}>
      <div className={classes.review__header}>
        <p className={classes.review__customer}>
          {item.customer.firstName} {item.customer.lastName}
        </p>
        <Button
          type="main"
          onClick={() => {
            if (customerData(store).id === item.customer._id) {
              deleteComment(item._id);
            }
          }}
        >
          <BsFillTrashFill color="#8D28AD" size={16} />
        </Button>
      </div>
      <p className={classes.review__text}>{item.content}</p>
    </div>
  })

  const CommentsBlock = () => {
    return (
      comments.length === 0 ? <NoComments /> : CommentsArray
    )
  }

  return (
    <React.Fragment>
      <CommentForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
      <CommentsBlock />
    </React.Fragment>
  );
};

ProductComments.propTypes = {
  product: PropTypes.object,
};

export default ProductComments;