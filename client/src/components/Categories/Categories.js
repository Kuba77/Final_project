import React from "react";
import classes from "./Categories.module.scss"

const CategoriesBlock = () => {


    return(
        <>
            <div className={classes.categories_wrapper}>
                <div className={classes.categories_block}>
                    <h1 className={classes.categories_title}>Categories</h1>
                    <div className={classes.categories_module}>
                        <a className={classes.action_book} href="#">Action
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                        <a className={classes.adventure_book} href="#">Adventure
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                        <a className={classes.comedy_book} href="#">Comedy
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                        <a className={classes.drama_book} href="#">Drama
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                        <a className={classes.romance_book} href="#">Romance
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                        <a className={classes.sports_book} href="#">Sports
                            <div className={classes.calc_item}>
                                <p className={classes.calc}>Calc+</p>
                                <p className={classes.item}>Item</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CategoriesBlock;