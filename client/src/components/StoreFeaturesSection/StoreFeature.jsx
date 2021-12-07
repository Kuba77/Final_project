import React from "react";

const StoreFeature = (props) => {
    return (
        <div className="store-features__item">
            <img src={props.img} alt={props.imgAlt} />
            <h3 className="store-features__item--title">{props.title}</h3>
            <p className="store-features__item--text">{props.text}</p>
        </div>
    )
}

export default StoreFeature;