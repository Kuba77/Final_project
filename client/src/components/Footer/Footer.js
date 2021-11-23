import React from "react";
import classes from "./Footer.module.scss"
import logo from "./Footer_img/icon.png"
import facebook from "./Footer_img/facebook.png"
import youtube from "./Footer_img/youtube.png"
import twitter from "./Footer_img/twitter.png"
import linked from "./Footer_img/linked.png"
import insta from "./Footer_img/insta.png"
import FormSubscribe from "./FormSubscribe"

const Footer = () => {


    return (
        <>
            <div className={classes.footer_subscribe_block}>
                <h3 className={classes.footer_subscribe_title}>Subscribe our newsletter for newest books updates</h3>
                <div className={classes.footer_subscribe}>
                    <FormSubscribe />
                </div>
            </div>
            <div className={classes.footer_container}>
                <div className={classes.footer_follow_us}>
                    <div className={classes.footer_block_logo_title}>
                        <img className={classes.footer_block_logo} src={logo} alt="Clever" />
                        <p className={classes.footer_block_text}>Clever</p>
                    </div>
                    <p className={classes.footer_block_description}>Clever is a online bookstore website who sells all genres of
                        books from around the world. Find your book here now</p>
                    <div className={classes.footer_block_follow_us}>
                        <p className={classes.footer_block_followUs_title}>Follow Us</p>
                        <div className={classes.footer_block_icons}>
                            <a className={classes.link_facebook} href="">
                                <img className={classes.icon_img} src={facebook} alt="icon facebook" />
                            </a>
                            <a className={classes.link_youtube} href="">
                                <img className={classes.icon_img} src={youtube} alt="icon youtube" />
                            </a>
                            <a className={classes.link_twitter} href="">
                                <img className={classes.icon_img} src={twitter} alt="icon twitter" />
                            </a>
                            <a className={classes.link_linkedIn} href="">
                                <img className={classes.icon_img} src={linked} alt="icon linkedIn" />
                            </a>
                            <a className={classes.link_instagram} href="">
                                <img className={classes.icon_img} src={insta} alt="icon instagram" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.footer_quick_links}>
                    <p className={classes.footer_quick_links_title}>Quick Links</p>
                    <a className={classes.footer_quick_links_link} href="">About us</a>
                    <a className={classes.footer_quick_links_link} href="">Contact us</a>
                    <a className={classes.footer_quick_links_link} href="">Products</a>
                    <a className={classes.footer_quick_links_link} href="">Login</a>
                    <a className={classes.footer_quick_links_link} href="">Sign Up</a>
                </div>

                <div className={classes.footer_customer_area}>
                    <p className={classes.footer_customer_area_tittle}>Customer Area</p>
                    <a className={classes.footer_quick_links_link} href="">My Account</a>
                    <a className={classes.footer_quick_links_link} href="">Orders</a>
                    <a className={classes.footer_quick_links_link} href="">Tracking List</a>
                    <a className={classes.footer_quick_links_link} href="">Terms</a>
                    <a className={classes.footer_quick_links_link} href="">Privacy Policy</a>
                    <a className={classes.footer_quick_links_link} href="">FAQ</a>
                </div>
            </div>
        </>
    )
}

export default Footer;