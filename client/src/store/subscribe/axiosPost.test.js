// import React from "react";
// import "@testing-library/jest-dom/extend-expect";
// import createNewSubscribe from "./middleware";
// import * as axios from "axios";

// describe("axios post test", () => {

// })

const axios = require("axios");
const { createNewSubscribe } = require("./middleware");

jest.mock("axios");

test("mock axios post function", async () => {
    expect.assertions(1);
    const values = {
      email: "asd@i.ua",
      letterHtml: "hi subscriber",
      letterSubscribe: "thanks for subscribe",
    };
    const payload = [ values ];
    // Now mock axios get method
    axios.post = jest.fn().mockResolvedValue(payload);
    
  });