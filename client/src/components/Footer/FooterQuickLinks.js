import React from "react";
import FooterLink from "./FooteLink"

const FooterQuickList = () =>{

    return(
        <>
            <FooterLink 
                name={"About us"}
                to={"/about"}
            />
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