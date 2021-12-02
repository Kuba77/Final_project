import React, { useEffect, useState, useCallback } from "react";
import classes from "./Product.module.scss";
import "./Product.module.scss";

import { useParams, Link } from "react-router-dom";
import { getSelectedProduct } from "../../api/productsApi";
import Image from "../Image/Image";
import { useDispatch } from "react-redux";

import { setItemInCart } from "../../store/cart/reducer";

const Product = () => {
  let { productId } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  function addToCart(info) {
    try {
      dispatch(setItemInCart(info));
    } catch (error) {
      console.error(error.message);
    }
  }

  const getProduct = useCallback(async () => {
    const products = await getSelectedProduct(productId);
    console.log(products);
    setProduct(products);
  }, [setProduct]);

  useEffect(() => {
    getProduct();
  }, []);

  function changeProductImg(event) {
    if (
      event.target.id == "1" ||
      event.target.id == "2" ||
      event.target.id == "3"
    ) {
      let mainImg = document.getElementById("gallery_item__large");
      let iconImg = event.target.getAttribute("src");
      mainImg.setAttribute("src", iconImg);
    }
  }

  return (
    <React.Fragment>
      {!!product.name && (
        <div>
          <div className={classes.product__header}>
            <p>Home/Books/{product.name}</p>
          </div>

          <div className={classes.product_block}>
            <div className={classes.product_block__main}>
              <div className={classes.title_block}>
                <h2 className={classes.product_info__title}>{product.name}</h2>
                <h5 className={classes.product_info__autor}>
                  {product.author}
                </h5>
              </div>

              <div className={classes.product_info}>
                <p className={classes.product_info__text}>
                  {product.description}
                </p>

                <div className={classes.price_block}>
                  <p className={classes.product_info__price}>
                    &#36; {product.currentPrice}
                  </p>
                  <p className={classes.product_info__store}>
                    In stock {product.quantity}
                  </p>
                </div>

                <div className={classes.product_button}>
                  <div className={classes.product_button__counter}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button>
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>

              <div className={classes.product_img}>
                <div className={classes.product_img__large}>
                  <Image
                    id="gallery_item__large"
                    className="gallery_item__large"
                    item={product.imageUrls[0]}
                  />
                </div>

                <div className={classes.gallery} onClick={changeProductImg}>
                  {product.imageUrls.map((item, index) => (
                    <Image
                      id={index}
                      key={index}
                      className={classes.gallery__item}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className={classes.product_block__title}>Details</h3>

            <div className={classes.product_block__details}>
              <div className={classes.product_categories}>
                <p>Book Title</p>
                <p>Author</p>
                <p>Product Code</p>
                <p>Book Format</p>
                <p>Date Published</p>
                <p>Date Published</p>
                <p>Genre</p>
              </div>

              <div className={classes.product_data}>
                <p>{product.name}</p>
                <p>{product.author}</p>
                <p>{product.itemNo}</p>
                <p>{product.book_format}</p>
                <p>{product.date_published}</p>
                <p>{product.publisher}</p>
                {product.genre.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>

            {/* <h3 className={classes.product_block__title} id="review">Customer Reviews</h3>

                <div className={classes.product_block__review}>
                    <form >
                        <textarea name="Textarea" placeholder="Live your comment here..."></textarea>
                        <div className={classes.review__buttons}>
                            <button type="reset">Reset</button>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
