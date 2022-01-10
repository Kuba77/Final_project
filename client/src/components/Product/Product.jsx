import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../services/products";
import { addOrRemoveProductToCart } from "../../store/cart/reducer";
import { addOrRemoveProductToFavorite } from "../../store/favorites/reducer";
import { MdOutlineCancel } from "react-icons/md";
import { BsBasket, BsFillHeartFill } from "react-icons/bs";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductAuthor from "./ProductAuthor/ProductAuthor";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductPriceBlock from "./ProductPriceBlock/ProductPriceBlock";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImg from "./ProductImg/ProductImg";
import ProductComments from "./ProductComments/ProductComments";
import classes from "./Product.module.scss";
import Button from "../Button/Button";
import {
  itemsInCart,
  itemsInFavorite, 
} from "../../store/selectors";
import PuffLoader from "react-spinners/PuffLoader";

const Product = () => {
  let { productId } = useParams();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(0);

  const isItemInFavorites = itemsInFavorite(store).some(
    (item) => item._id === product._id
  );
  const isItemInCart = itemsInCart(store)?.some(
    (item) => item.product._id === product._id
  );

  const getProduct = useCallback(async () => {
    const productItem = await getSelectedProduct(productId);
    setProduct(productItem)
    setLoading(false);
  }, [setProduct, productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct, productId]);

  const LoadSpiner = () => {
    return isLoading && (
      <div className={classes.loader} >
        <PuffLoader color="purple" size={120} />
      </div>
    )
  }

  return (
    <React.Fragment>

      <LoadSpiner />

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
                      dispatch(addOrRemoveProductToCart(product));
                    }}
                  >
                    {isItemInCart ? (
                      <MdOutlineCancel color="white" size={30} />
                    ) : (
                      <BsBasket color="white" size={26} />
                    )}
                  </Button>
                  <Button
                    type={isItemInFavorites ? "transparent" : "main"}
                    onClick={() => {
                      dispatch(addOrRemoveProductToFavorite(product._id));
                    }}
                  >
                    <BsFillHeartFill
                      color={isItemInFavorites ? "red" : "white"}
                      size={26}
                    />
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

            <ProductComments product={product} />

          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
