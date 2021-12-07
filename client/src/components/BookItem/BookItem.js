import React from 'react';
import { Link } from 'react-router-dom'
import classes from './BookItem.module.scss';

const BookItem = (props) => {
    const { imageSrc, title, price, author, itemNo} = props;

    return (
        <Link to={`/product/${itemNo}`}>
            <div className={classes.collection__item}>
                <div className={classes.collection__item_img}>
                    <img src={imageSrc} alt={title}/>   
                </div>
                
                <div className={classes.collection__item_info}>
                    <div>
                        <h4>{title}</h4>
                        <span>{author}</span>
                    </div>
                        <div>
                            <h4 className={classes.collection__item_price}>${price}</h4>
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default BookItem
