import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProduct } from "../../../services/products";
import {
  createProductComment,
  deleteProductComment,
  getAllProductComments,
} from "../../../services/comments";
import { BsFillTrashFill } from "react-icons/bs";
// import { useFormik } from "formik";
import classes from "./Product.module.scss";
import Button from "../../Button/Button";
import ProductCommentForm from "../../Forms/CommentForm/CommentsForm";
import { CommentSchema } from "../../Forms/ValidationSchema";
// import { setNewComment } from "../../../store/comment/commentReducer"
import { setErors, clearErrors } from "../../../store/errors/reducer";
import { customerData } from "../../../store/selectors";
import PropTypes from "prop-types";

const ProductComments = (props) => {
  const { product } = props;

  let { productId } = useParams();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const validationSchema = CommentSchema;
  const store = useSelector((state) => state);
  const initialValues = {
    content: "Please, live your comment here..."
  };

  const authorizationCheck = () => {
    if (!customerData(store).id)
      alert("You must be authorized to leave a comment");
  };

  const createComment = useCallback(
    async (value) => {
      try {
        await createProductComment(value)
        // let newComment = await createProductComment(value);
        // if (newComment.message) {
        //   dispatch(setErors(newComment.message));
        // } else {
        //   dispatch(setNewComment(newComment.data));
        //   dispatch(clearErrors());
        // }
      } catch (error) {
        dispatch(setErors(error.response));
      }
    },
    [dispatch]
  );

  const getComments = useCallback(async () => {
    const productItem = await getSelectedProduct(productId);
    const productCommentsArray = await getAllProductComments(productItem._id);
    setComments(productCommentsArray);
  }, [productId]);

  useEffect(() => {
    getComments();
  }, []);

  // const deleteComment = useCallback(
  //   async (value) => {
  //     await deleteProductComment(value);
  //     getComments();
  //   }, [getComments]);

  // const deleteCommentButtonClick = useCallback(() => {
  //   if (customerData(store).id === item.customer._id) {
  //     deleteComment(item._id)
  //   }
  // }, [item._id]);
  const noComments = () => {
    return (
      <div className={classes.review__dis} >
        <p className={classes.review__text}>
          This product don't have review. Yours 'll be the first.
        </p>
      </div>)
  }

  const commentsArray = comments.map((item) => {
    return <div key={item._id} className={classes.review}>
      <div className={classes.review__header}>
        <p className={classes.review__customer}>
          {item.customer.firstName} {item.customer.lastName}
        </p>
        <Button
          type="main"
        // onClick={deleteCommentButtonClick()}
        // onClick={() => {
        //   if (customerData(store).id === item.customer._id) {
        //     deleteComment(item._id);
        //   }
        // }}
        >
          <BsFillTrashFill color="#8D28AD" size={16} />
        </Button>
      </div>
      <p className={classes.review__text}>{item.content}</p>
    </div>
  })

  const commentsBlock = () => {
    return (
      comments.length === 0 ? noComments : commentsArray
    )
  }

  const onSubmit = async (value) => {
    const newComment = {
      product: product,
      customer: customerData(store),
      content: value,
    };
    authorizationCheck();
    createComment(newComment);
    getComments();
  }

  return (
    <React.Fragment>
      <ProductCommentForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      // onFocus={ }
      />
      {commentsBlock}
    </React.Fragment>
  );
};

// const formik = useFormik({
//   initialValues: {
//     content: "",
//   },
//   onSubmit: async function setValues(value) {
//     let commentObject = {
//       product: item,
//       customer: customerData(store),
//       content: value,
//     };
//     try {
//       await createProductComment(commentObject);
//       formik.handleReset();
//       getComments();
//     } catch (error) {
//       alert(error);
//     }
//   },
// });


ProductComments.propTypes = {
  product: PropTypes.object,
};

export default ProductComments;