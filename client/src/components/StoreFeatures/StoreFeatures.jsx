import React from "react";
import "./StoreFeatures.scss";
import StoreFeature from "./StoreFeature";
const dataContent = require("./FeaturesContent.json");

const StoreFeatures = () => {
    const arrContent = JSON.parse(JSON.stringify(dataContent));
    
    return (
        <div className="store-features">
            {arrContent.map((item, index) => <StoreFeature key={index}
                img={item.img}
                imgAlt={item.imgAlt}
                title={item.title}
                text={item.text} />)}
        </div>
    )
}

export default StoreFeatures;