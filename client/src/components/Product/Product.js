import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../services/products";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../store/cart/reducer";
import { BsBasket, BsFillHeartFill } from "react-icons/bs";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductAutor from "./ProductAutor/ProductAutor";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductPriceBlock from "./ProductPriceBlock/ProductPriceBlock";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImg from "./ProductImg/ProductImg";
import classes from "./Product.module.scss";
import Button from "../Button/Button";

const Product = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
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
  }, [getProduct]);

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
