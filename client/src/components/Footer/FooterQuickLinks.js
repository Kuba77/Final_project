import React from "react";
import FooterLink from "./FooterLink"

const FooterQuickList = () =>{

    return(
        <>
            <FooterLink 
                name={"Contact us"}
                to={"/contact"}
            />
            <FooterLink 
                name={"Products"}
                to={"/products"}
            />
            <FooterLink 
                name={"Login"}
                to={"/login"}
            />
            <FooterLink 
                name={"Sign Up"}
                to={"/sign"}
            />
        </>
    )
}

export default FooterQuickList;