import React from "react";
import classes from "./Product.module.scss";
import "./Product.module.scss";

const Product = (props) => {

    return (
        <React.Fragment>
            <div className={classes.product__header}>
                <p>Home/Books/{props.product.title}</p>
            </div>

            <div className={classes.product_block}>

                <div className={classes.product_block__main}>
                    <div className={classes.product_info}>

                        <div className={classes.title_block}>
                            <h2 className={classes.product_info__title}>{props.product.title}</h2>
                            {/* <a className={classes.review} href="#review">Reviews</a> */}
                        </div>

                        <h5 className={classes.product_info__autor}>{props.product.author}</h5>
                        <p className={classes.product_info__text}>{props.product.description}</p>
                        <p className={classes.product_info__price}>&#36; {props.product.price}</p>
                        <div className={classes.product_button}>
                            <div className={classes.product_button__counter}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button><i class="fas fa-shopping-cart"></i></button>
                            <button><i class="fas fa-heart"></i></button>
                        </div>
                    </div>
                    <div className={classes.product_img}>
                        <div className={classes.product_img__large}><img className={classes.gallery__item} src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu4_goablb.jpg" alt="Haikyuu!!" /></div>
                        <ul className={classes.gallery}>
                            <li><img className={classes.gallery__item} src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu4_goablb.jpg" alt="Haikyuu!!" /></li>
                            <li><img className={classes.gallery__item} src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602209/Haikyuu3_ov2wvz.jpg" alt="Haikyuu!!" /></li>
                            <li><img className={classes.gallery__item} src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602206/Haikyuu2_gzvz0r.jpg" alt="Haikyuu!!" /></li>
                        </ul>
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
                        <p>{props.product.title}</p>
                        <p>{props.product.author}</p>
                        <p>{props.product.id}</p>
                        <p>{props.product.book_format}</p>
                        <p>{props.product.date_published}</p>
                        <p>{props.product.publisher}</p>
                        <p>{props.product.genre}</p>
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
        </React.Fragment>
    )
}

export default Product;
