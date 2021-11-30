import React from 'react'
import classes from './Counter.module.scss';

const Counter = ( { quantity } ) => {
    return quantity > 0 ?(
        <div className={classes.counter}>
            { quantity }
        </div>
    ): null;
}

export default Counter
