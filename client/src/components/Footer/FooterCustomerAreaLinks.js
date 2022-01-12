import React from "react";
import FooterLink from "./FooterLink"

const FooterCustomerAreaList = () => {

    return(
        <>
           <FooterLink 
                name={"My Account"}
                to={"/profile"}
            />
            <FooterLink 
                name={"Favorites"}
                to={"/favorites"}
            />
            <FooterLink 
                name={"Cart"}
                to={"/cart"}
            />
        </>
    )
}

export default FooterCustomerAreaList;