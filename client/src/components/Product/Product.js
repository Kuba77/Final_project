import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../services/products";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import { setFavoriteItems, deleteFavorites } from '../../store/favorites/reducer'
import { BsBasket, BsFillHeartFill } from "react-icons/bs";
import { MdOutlineCancel } from 'react-icons/md'
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductAutor from "./ProductAutor/ProductAutor";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductPriceBlock from "./ProductPriceBlock/ProductPriceBlock";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImg from "./ProductImg/ProductImg";
import classes from "./Product.module.scss";
import Button from "../Button/Button";

import { addProductToCart } from "../../services/cart";
import { customerData } from "../../store/selectors";

const Product = () => {
  let { productId } = useParams();
  const store = useSelector((state) => state);

  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.favorites.favoriteItems)
  const cart = useSelector((state) => state.cart.itemsInCart)
  const [product, setProduct] = useState({});
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
                <ProductAutor
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
              <form>
                <textarea
                  id="review"
                  name="Textarea"
                  placeholder="Please, live your comment here..."
                ></textarea>
                <div className={classes.review__buttons}>
                  <Button type="main" size="m">
                    Reset
                  </Button>
                  <Button type="main" size="m">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
