import React from "react";
import { render, screen } from "@testing-library/react";
import ProductPriceBlock from "./ProductPriceBlock";
import "@testing-library/jest-dom/extend-expect";

const product = {
  enabled: true,
  imageUrls: [
    "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Haikyuu4_goablb.jpg",
    "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637700283/gantz8_mvivmi.jpg",
    "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637700283/gantz_bwddpz.jpg",
    "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637700283/gantz7_bpvcbl.jpg"],
  genre: ["Action", "Drama", "Romance", "Supernatural", "Action", "Drama", "Romance", "Supernatural"],
  quantity: 9,
  _id: "61a3749def63640c078ca7f2",
  name: "gantz",
  author: "Oku Hiroya",
  categories: "manhwa",
  currentPrice: 222,
  previousPrice: 333,
  book_format: "Paperback",
  date_published: "June 29, 2000 – June 20, 2013",
  publisher: "Shueisha",
  description: "Somewhere in Tokyo, there is a room. In that room is a black sphere. Periodically, people who should otherwise have died are transferred to the room. There, the sphere gives them special suits and weapons, and sends them out on a mission to kill aliens here on Earth. While these missions take place, the rest of the world is largely oblivious to them. Somewhere in Tokyo, there is a room. Somewhere in Tokyo, there is a room. ",
  "vol": 37,
  "country": "Japan",
  "itemNo": "841621",
  "date": "2021-11-28T12:22:53.845Z",
  __v: 0
}
describe("Testing of ProductPrice component", () => {
  test("render ProductPriceBlock", () => {
    render(
      <ProductPriceBlock product={product} />
    );
    screen.debug();
  });
});