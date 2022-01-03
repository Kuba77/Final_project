import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../../services/products";
import { MdOutlineCancel } from "react-icons/md";
import {
  createProductComment,
  deleteProductComment,
  getAllProductComments,
} from "../../../services/comments";
import { BsBasket, BsFillHeartFill, BsFillTrashFill } from "react-icons/bs";
import { useFormik } from "formik";
import classes from "./Product.module.scss";
import Button from "../../Button/Button";
import { customerData } from "../../../store/selectors";
import PropTypes from "prop-types";

const ProductComments = (props) => {
  const { item } = props;

  let { productId } = useParams();
  const store = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  // const [toggle, setToggle] = useState(0);
  // const isItemInFavorites = itemsInFavorite(store).some(
  //   (item) => item._id === product._id
  // );
  // const isItemInCart = itemsInCart(store)?.some(
  //   (item) => item.product._id === product._id
  // );

  // const getProduct = useCallback(async () => {
  //   const products = await getSelectedProduct(productId);
  //   setProduct(products);
  // }, [setProduct, productId]);

  // useEffect(() => {
  //   getProduct();
  // }, [getProduct, productId]);

  const getComments = useCallback(async () => {
    const product = await getSelectedProduct(productId);
    const productCommentsArray = await getAllProductComments(product._id);
    setComments(productCommentsArray);
  }, [productId]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  const deleteComment = useCallback(
    async (value) => {
      await deleteProductComment(value);
      getComments();
    }, [getComments]);

  const deleteCommentButtonClick = useCallback(() => {
    if (customerData(store).id === item.customer._id) {
      deleteComment(item._id)
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: async function setValues(value) {
      let commentObject = {
        product: item,
        customer: customerData(store),
        content: value,
      };
      try {
        await createProductComment(commentObject);
        formik.handleReset();
        getComments();
      } catch (error) {
        alert(error);
      }
    },
  });

  const commentsBlock = (array) => {
    if (array.length === 0) {
      return (
        <div className={classes.review__dis}>
          <p className={classes.review__text}>
            This product don't have review. Yours 'll be the first.
          </p>
        </div>)
    } else {
      array.map((item) => {
        return (
          <div key={item._id} className={classes.review}>
            <div className={classes.review__header}>
              <p className={classes.review__customer}>
                {item.customer.firstName} {item.customer.lastName}
              </p>
              <Button
                type="main"
                onClick={deleteCommentButtonClick()}
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
        );
      })
    }
  }

  const sendComment = () => {
    <div className={classes.product_block__review}>
      <form onSubmit={formik.handleSubmit}>
        <textarea
          id="content"
          name="content"
          type="text"
          placeholder="Please, live your comment here..."
          onChange={formik.handleChange}
          value={formik.values.content}
        ></textarea>

        <div className={classes.review__buttons}>
          <Button type="reset" size="m" onClick={formik.handleReset}>
            Reset
          </Button>

          <Button
            type="submit"
            size="m"
            onClick={() => {
              if (!customerData(store).id)
                alert("You must be authorized to leave a comment");
            }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  }

  return (
    <React.Fragment>
      {sendComment()}
      {commentsBlock(comments)}
    </React.Fragment>
  );
};

ProductComments.propTypes = {
  comments: PropTypes.array,
  // commentClick: PropTypes.func,
};

export default ProductComments;