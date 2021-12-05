import React from 'react';
import classes from './SearchContent.module.scss'

const SearchContent = (props) => {

    const {imageSrc, title, price} = props;

    return(
        <div className={classes.content__container}>
            <div className={classes.content__container_item}>
                <img src={imageSrc}/>
            </div>
            <div className={classes.content__container_item_title}>
                {title}
            </div>
            <div className={classes.content__container_item_price}>
                {price}
            </div>
        </div>
    )
}


export default SearchContent