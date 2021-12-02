import React from "react";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";

const ProductPage = () => {

    let product = {
        id: 32542,
        title: "Haikyuu!!",
        author: "Furudate Haruichi",
        price: 270,
        book_format: "Paperback",
        date_published: "February 20, 2012 – July 20, 2020",
        publisher: "Shueisha",
        description: "Ever since he saw the legendary player known as the “Little Giant“ compete at the national volleyball finals, Shoyo Hinata has aimed to be the best volleyball player ever! He decides to join the team at the high school the Little Giant went to – and then surpass him.Who says you need to be tall to play volleyball when you can jump higher than anyone else?",
        genre: ["Comedy", "Drama"],
        vol: 45,
        img1: "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu4_goablb.jpg",
        img2: "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602209/Haikyuu3_ov2wvz.jpg",
        img3: "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602206/Haikyuu2_gzvz0r.jpg",
        img4: "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu1_sno4kw.jpg",
        storage: 46
    }

    return (
        <React.Fragment>
            <Header />
            <Product product={product} />
        </React.Fragment>
    )
};

export default ProductPage;
