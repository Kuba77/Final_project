import React from "react";
import classes from "./Footer.module.scss"

const FooterLink = (props) => {
    const {href, name} = props
    return(
        <a className={classes.footer_quick_links_link} href={href}>{name}</a>
    )
}

export default FooterLink;