import React from "react";
import classes from "./Footer.module.scss"
import {Link} from "react-router-dom"

const FooterLink = (props) => {
    const {name, to} = props
    return(
        <Link className={classes.footer_quick_links_link} to={to}>{name}</Link>
    )
}

export default FooterLink;