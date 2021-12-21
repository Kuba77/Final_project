import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../services/products";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import { setFavoriteItems, deleteFavorites } from '../../store/favorites/reducer'
import { BsBasket, BsFillHeartFill } from "react-icons/bs";
import { MdOutlineCancel } from 'react-icons/md'
import { createProductComment, deleteProductComment, getAllProductComments } from "../../services/comments";
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

import { addProductToCart } from "../../services/cart";
import { customerData } from "../../store/selectors";

const Product = () => {
  let { productId } = useParams();
  const store = useSelector((state) => state);

  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.favorites.favoriteItems)
  const cart = useSelector((state) => state.cart.itemsInCart)
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const store = useSelector((state) => state);
  const [toggle, setToggle] = useState(0);

  const isItemInFavorites = wishList.some((item) => item.itemNo === productId);
  const isItemInCart = cart.some((item) => item.itemNo === productId);

 
const addToCart = (info) => {
    try {
      if(isItemInCart){
        dispatch(deleteItemFromCart(productId))
      }
      else{
        dispatch(setItemInCart(info))
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const addToWishList = (info) => {
    try {
      if(isItemInFavorites){
        dispatch(deleteFavorites(productId))
      }
      else{
        dispatch(setFavoriteItems(info))
      }
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

  const getComments = useCallback(async () => {
    const product = await getSelectedProduct(productId);
    const productComments = await getAllProductComments(product._id);
    setComments(productComments);
  }, [productId]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  const deleteComment = useCallback(async (value) => {
    await deleteProductComment(value);
    getComments();
  },[getComments]);

  const formik = useFormik({
    initialValues: {
      content: ""
    },
    onSubmit: async function setValues(value) {
      let commentObject = {
        product: product,
        customer: customerData(store),
        content: value
      }
      try {
        await createProductComment(commentObject);
        formik.handleReset()
        getComments();
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
                    {isItemInCart ? <MdOutlineCancel color="white" size={30}/> : <BsBasket color="white" size={26} /> }

                  </Button>
                  <Button 
                  type={isItemInFavorites ? 'transparent' : 'main'}
                  onClick={() => {
                    addToWishList(product);
                  }}
                  >
                    <BsFillHeartFill color={isItemInFavorites ? 'red' : 'white'} size={26} />
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
              <form onSubmit={formik.handleSubmit}>
                <textarea
                  id="content"
                  name="content"
                  type="text"
                  placeholder="Please, live your comment here..."
                  onChange={formik.handleChange}
                  value={formik.values.content}>
                </textarea>

                <div className={classes.review__buttons}>
                  <Button
                    type="reset"
                    size="m"
                    onClick={formik.handleReset}>
                    Reset
                  </Button>

                  <Button
                    type="submit"
                    size="m"
                    onClick={() => {
                      if (!customerData(store).id) alert("You must be authorized to leave a comment")
                    }}>
                    Send
                  </Button>
                </div>
              </form>
            </div>

            {comments.length === 0 ?
              (<div className={classes.review__dis}>
                <p className={classes.review__text}>This product don't have review. Yours 'll be the first.</p>
              </div>)
              :
              (comments.map((item) => {
                return (
                  <div key={item._id} className={classes.review}
                  >
                    <div className={classes.review__header}>
                      <p className={classes.review__customer}>{item.customer.firstName} {item.customer.lastName}</p>
                      <Button
                        type="main"
                        onClick={() => {
                          if (customerData(store).id === item.customer._id) {
                            deleteComment(item._id)
                          }
                        }}
                      >
                        <BsFillTrashFill color="#8D28AD" size={16} /></Button>
                    </div>
                    <p className={classes.review__text}>{item.content}</p>
                  </div>)
              }))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;