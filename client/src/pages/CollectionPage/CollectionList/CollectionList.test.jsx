import React from "react";
import CollectionList from "./CollectionList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

const collection = [
  {
    name: "John",
    imageUrls: ["http://google.com", "http://google.com", "http://google.com"],
    author: "Kennedy",
    currentPrice: 800,
    itemNo: 2,
  },
  {
    name: "John",
    imageUrls: ["http://google.com", "http://google.com", "http://google.com"],
    author: "Wilson",
    currentPrice: 800,
    itemNo: 2,
  },
  {
    name: "Amre",
    imageUrls: ["http://google.com", "http://google.com", "http://google.com"],
    author: "asdas",
    currentPrice: 800,
    itemNo: 2,
  },
];
describe("Testing of CollectionList component", () => {
  test("rendering of book item", () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <CollectionList collection={collection} />
      </MemoryRouter>
    );
    expect(screen.getByText(/kennedy/i)).toBeInTheDocument();
  });
});
