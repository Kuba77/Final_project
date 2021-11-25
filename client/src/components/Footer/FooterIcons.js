import React from "react";
import classes from "./Footer.module.scss"
import facebook from "./Footer_img/facebook.png"
import youtube from "./Footer_img/youtube.png"
import twitter from "./Footer_img/twitter.png"
import linked from "./Footer_img/linked.png"
import insta from "./Footer_img/insta.png"


const FooterIcons = () =>{
    
    return(
        <div className={classes.footer_block_follow_us}>
            <p className={classes.footer_block_followUs_title}>Follow Us</p>
                <div className={classes.footer_block_icons}>
                        <a className={classes.link_facebook} href="https://www.facebook.com/">
                            <img className={classes.icon_img} src={facebook} alt="icon facebook" />
                        </a>
                        <a className={classes.link_youtube} href="https://www.youtube.com/">
                            <img className={classes.icon_img} src={youtube} alt="icon youtube" />
                        </a>
                        <a className={classes.link_twitter} href="https://twitter.com/">
                            <img className={classes.icon_img} src={twitter} alt="icon twiter" />
                        </a>
                        <a className={classes.link_linkedIn} href="https://www.linkedin.com/">
                            <img className={classes.icon_img} src={linked} alt="icon linkedIn" />
                        </a>
                        <a className={classes.link_instagram} href="https://www.instagram.com">
                            <img className={classes.icon_img} src={insta} alt="icon instagram" />
                        </a>
                </div>
        </div>
    )
}

export default FooterIcons;