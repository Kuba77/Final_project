import React from "react";
import FooterLink from "./FooteLink"

const FooterCustomerAreaList = () => {

    return(
        <>
            <FooterLink 
                name={"My Account"}
                to={"/account"}
            />
            <FooterLink 
                name={"Orders"}
                to={"/orders"}
            />
            <FooterLink 
                name={"Tracking List"}
                to={"/tracking"}
            />
            <FooterLink 
                name={"Terms"}
                to={"/terms"}
            />
            <FooterLink 
                name={"Privacy Policy"}
                to={"/privacy"}
            />
            <FooterLink 
                name={"FAQ"}
                to={"/faq"}
            />
        </>
    )
}

export default FooterCustomerAreaList;