import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Basket.module.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ImBin } from 'react-icons/im'
import { calcTotalPriceOneProd } from "../../utils/utils";

const BusketItem = (props) => {
    const {
        item,
        deleteProductFromCart,
        decreaseProduct,
        increaseProduct,
        customer,
        localAddRemoveQuantity,
      } = props;


    return (
            <div className={classes.basket__item}>
                <div className={classes.basket__item__wrap}>
                    <div className={classes.basket__item__info}>
                        <Link to={`/product/${item.product.itemNo}`}>
                            <img className={classes.basket__item__img} src={item.product.imageUrls[1]} alt={item.product.name}/>
                        </Link>
                        <div className={classes.basket__item__textarea}>
                            <p>{item.product.name}</p>
                            <span>{item.product.author}</span>
                        </div>
                    </div>

                    <div className={classes.basket__counter}>
                        <AiOutlineMinus color='#8D28AD' size={20} onClick={(e) => {
                            if (!customer) {
                            localAddRemoveQuantity(item.product, e.target.name);
                            } else {
                            decreaseProduct(item.product);
                            }
                            }}/>
                            <span>{item.cartQuantity}</span>
                        <AiOutlinePlus color='#8D28AD' size={20} onClick={(e) => {
                            if (!customer) {
                            localAddRemoveQuantity(item.product, e.target.name);
                            } else {
                            increaseProduct(item.product);
                            }
                         }}/>
                    </div>

                    <div className={classes.basket__item__price}>
                        <span>$ {item.product.currentPrice}</span>
                    </div>

                    <div className={classes.basket__item__totalprice}>
                        <span>$ {calcTotalPriceOneProd(item)}</span>
                    </div>

                   
                </div> 

                <div className={classes.basket__item__remove}>
                        <ImBin color='black' onClick={() => {deleteProductFromCart(item.product)}}/>
                </div>
            </div>
    )
}

export default BusketItem
