import React from "react";
import classes from "./Product.module.scss";
import "./Product.module.scss";

const Product = (props) => {

    function changeProductImg(event) {
        if (event.target.id == "itemA" || event.target.id == "itemB" || event.target.id == "itemC") {
            let mainImg = document.getElementById("gallery_item__large");
            let iconImg = event.target.getAttribute("src")
            mainImg.setAttribute('src', iconImg);
        }
    }

    return (
        <React.Fragment>
            <div className={classes.product__header}>
                <p>Home/Books/{props.product.title}</p>
            </div>

            <div className={classes.product_block}>

                <div className={classes.product_block__main}>

                    <div className={classes.title_block}>
                        <h2 className={classes.product_info__title}>{props.product.title}</h2>
                        <h5 className={classes.product_info__autor}>{props.product.author}</h5>
                    </div>

                    <div className={classes.product_info}>
                        <p className={classes.product_info__text}>{props.product.description}</p>

                        <div className={classes.price_block}>
                            <p className={classes.product_info__price}>&#36; {props.product.price}</p>
                            <p className={classes.product_info__store}>In stock {props.product.storage}</p>
                        </div>

                        <div className={classes.product_button}>
                            <div className={classes.product_button__counter}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>                           
                            <button><i className="fas fa-shopping-cart"></i></button>
                            <button><i className="fas fa-heart"></i></button>
                        </div>
                    </div>

                    <div className={classes.product_img}>
                        <div className={classes.product_img__large} ><img id="gallery_item__large" className="gallery_item__large" src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu4_goablb.jpg" alt={props.product.title} /></div>
                        
                        <div className={classes.gallery} onClick={changeProductImg} >
                            <img id="itemA" className={classes.gallery__item} src={props.product.img1} alt="Haikyuu!!" />
                            <img id="itemB" className={classes.gallery__item} src={props.product.img2} alt="Haikyuu!!" />
                            <img id="itemC" className={classes.gallery__item} src={props.product.img3} alt="Haikyuu!!" />
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