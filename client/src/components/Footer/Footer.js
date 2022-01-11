import React from "react";
import classes from "./Footer.module.scss"
import logo from "./Footer_img/icon.png"
import FooterCustomerAreaList from "./FooterCustomerAreaLinks";
import SubscribeBlock from "../../components/Subscribe/SubscribeBlock";
import FooterQuickList from "./FooterQuickLinks";

const Footer = () => {
    return (
        <>
            <SubscribeBlock />
            <div className={classes.footer_container}>
                <div className={classes.footer_follow_us}>
                    <div className={classes.footer_block_logo_title}>
                        <img className={classes.footer_block_logo} src={logo} alt="Clever" />
                        <p className={classes.footer_block_text}>Manga Store</p>
                    </div>
                    <p className={classes.footer_block_description}>Manga Store is a online website who sells all genres of
                        manga from around the world. Find your manga here now</p>
                </div>
                <div className={classes.footer_quick_links}>
                    <p className={classes.footer_quick_links_title}>Quick Links</p>
                    <FooterQuickList />                
                </div>
                <div className={classes.footer_customer_area}>
                    <p className={classes.footer_customer_area_tittle}>Customer Area</p>
                    <FooterCustomerAreaList />
                </div>
            </div>
        </>
    )
}

export default Footer;