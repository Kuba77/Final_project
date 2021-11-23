import React from "react";
import deliveryImg from "./img/delivery.png";
import paymentImg from "./img/payment.png";
import qualityImg from "./img/quality.png";
import guaranteeImg from "./img/guarantee.png";
import "./StoreFeatures.scss";

const StoreFeatures = () => {
    return (
        <div className="store-features">
            <div className="store-features__item">
                <img src={deliveryImg} alt="delivery" />
                <h3 className="store-features__item--title">Quick Delivery</h3>
                <p className="store-features__item--text">Self-delivery from the "NOVA POSHTA" branch, "JUSTIN" branch. Courier delivery.</p>
            </div>
             <div className="store-features__item">
                <img src={paymentImg} alt="payment" />
                <h3 className="store-features__item--title">Secure Payment</h3>
                <p className="store-features__item--text">Cash on delivery at the branch. To the courier when ordering with delivery. Card payment.</p>
            </div>
             <div className="store-features__item">
                <img src={qualityImg} alt="quality" />
                <h3 className="store-features__item--title">Best Quality</h3>
                <p className="store-features__item--text">We work for you! Individual approach to each customer - our constant rule.</p>
            </div>
             <div className="store-features__item">
                <img src={guaranteeImg} alt="guarantee" />
                <h3 className="store-features__item--title">Return Guarantee</h3>
                <p className="store-features__item--text">You can return the item within 14 days.</p>
            </div>
        </div>
    )
}

export default StoreFeatures;