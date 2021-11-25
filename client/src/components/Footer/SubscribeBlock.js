import React from "react";
import classes from "./Footer.module.scss"
import FormSubscribe from "./FormSubscribe";

const SubscribeBlock = () =>{
    
    return(
        <div className={classes.footer_subscribe_block}>
                <h3 className={classes.footer_subscribe_title}>Subscribe our newsletter for newest books updates</h3>
                <div className={classes.footer_subscribe}>
                    <FormSubscribe />
                </div>
        </div>
    )
}

export default SubscribeBlock;