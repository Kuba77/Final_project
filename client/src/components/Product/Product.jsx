import React, { useEffect, useState, useCallback, useSelector } from "react";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../services/products";
import { createProductComment, deleteProductComment, getAllProductComments } from "../../services/comments";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../store/cart/reducer";
import { BsBasket, BsFillHeartFill, BsFillTrashFill } from "react-icons/bs";
import { useFormik } from "formik";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductAuthor from "./ProductAuthor/ProductAuthor";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductPriceBlock from "./ProductPriceBlock/ProductPriceBlock";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImg from "./ProductImg/ProductImg";
import classes from "./Product.module.scss";
import Button from "../Button/Button";
import { customerData } from "../../store/selectors";

const Product = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState({});
  const [toggle, setToggle] = useState(0);

  function addToCart(info) {
    try {
      dispatch(setItemInCart(info));
    } catch (error) {
      console.error(error.message);
    }
  }

  const getProduct = useCallback(async () => {
    const products = await getSelectedProduct(productId);
    setProduct(products);
  }, [setProduct, productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct, productId]);
  /*
    const getComments = useCallback(async () => {
      const comments = await getAllProductComments(productId);
      setComments(comments);
    }, [setComments, productId]);
  
    useEffect(() => {
      getComments();
    }, [getComments, productId]);

 const deleteComments = useCallback(async ({comment._id}) => {
      const comments = await deleteProductComment({comment._id});
      setComments(comments);
    }, [setComments, comment._id]);

    useEffect(() => {
      deleteComment();
    }, [deleteComment, {comment._id}]);
*/
  const formik = useFormik({
    initialValues: {
      customer: customerData._id,
      product: product._id,
      category: product.categories,
      content: "",
      date: Date.now()
    },
    onSubmit: async values => {
      try {
        await createProductComment(values)
      } catch (error) {
        alert(error)
      }
    }
  })

  return (
    <React.Fragment>
      {!!product.name && (
        <div>
          <div className={classes.product__header}>
            <p>
              <Link to="/">Home</Link>/ <Link to="/products">Books</Link>/
              {product.name}
            </p>
          </div>

          <div className={classes.product_block}>
            <div className={classes.product_block__main}>
              <div className={classes.title_block}>
                <ProductTitle
                  className={classes.product_info__title}
                  title={product.name}
                />
                <ProductAuthor
                  className={classes.product_info__author}
                  author={product.author}
                />
              </div>

              <div className={classes.product_info}>
                <ProductDescription
                  className={classes.product_info__text}
                  description={product.description}
                />
                <ProductPriceBlock product={product} />

                <div className={classes.product_button}>
                  <Button
                    type="main"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    <BsBasket color="white" size={26} />
                  </Button>

                  <Button type="main">
                    <BsFillHeartFill color="white" size={26} />
                  </Button>
                </div>
              </div>

              <div className={classes.product_img}>
                <div className={classes.product_img__large}>
                  <ProductImg
                    className={classes.gallery_item__large}
                    item={product.imageUrls[toggle]}
                    alt={product.name}
                  />
                </div>

                <div className={classes.gallery}>
                  {product.imageUrls.map((item, index) => (
                    <ProductImg
                      key={index}
                      className={classes.gallery__item}
                      item={item}
                      alt={product.name}
                      onClick={() => setToggle(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className={classes.product_block__title}>Details</h3>

            <ProductDetails product={product} />

            <h3 className={classes.product_block__title} id="review">
              Customer Reviews
            </h3>

            <div className={classes.product_block__review}>
              <form
                onSubmit={
                  // customerData._id(store) ? 
                  formik.handleSubmit
                  // : alert("You must be authorized to leave a comment")
                }
              >
                <textarea
                  id="content"
                  name="content"
                  type="text"
                  placeholder="Please, live your comment here..."
                  onChange={formik.handleChange}
                  value={formik.values.content}>
                </textarea>

                <div className={classes.review__buttons}>
                  <Button type="reset" size="m" onClick={formik.handleReset}>
                    Reset
                  </Button>

                  <Button type="submit" size="m">
                    Send
                  </Button>
                </div>
              </form>
            </div>

            {/*don't delete    render comments 

            {comments ?
              comments.map((comments, index) => (
                <div key={comments._id} className={classes.review}>
                  <div className={classes.review__header}>
                    <p className={classes.review__customer}>{comments.customer}firstName lastName</p>
                    <Button type="main"
                    // onClick={deleteComment}
                    >
                      <BsFillTrashFill color="white" size={16} /></Button>
                  </div>
                  <p className={classes.review__text}>{comments.content} content</p>
                </div>
              )) :
            <div key={comments._id} className={classes.review}>
              <p className={classes.review__text}>This product don't have review. Yours'll be the first. </p>
            </div>
            } */}

          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
