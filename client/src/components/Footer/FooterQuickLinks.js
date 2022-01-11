import React from "react";
import FooterLink from "./FooterLink"

const FooterQuickList = () =>{

    return(
        <>
            <FooterLink 
                name={"Products"}
                to={"/products"}
            />
            <FooterLink 
                name={"Registration"}
                to={"/registration"}
            />
            <FooterLink 
                name={"Sign Un"}
                to={"/login"}
            />
        </>
    )
}

export default FooterQuickList;