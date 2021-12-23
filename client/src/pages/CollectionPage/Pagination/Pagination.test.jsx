import React from "react";
import Pagination from "./Pagination";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const productsInPage = 10;
const totalProducts = 30;
const onClickHandlerPagination = jest.fn();

describe("Testing of pagination component", () => {
  it("rendering pagination component with props", () => {
    render(
      <Pagination
        productsInPage={productsInPage}
        totalProducts={totalProducts}
      />
    );
    screen.debug();
  });
  it("rendering pagination component without props", () => {
    render(<Pagination />);
    screen.debug();
  });
  it("pagination renders like list", () => {
    render(<Pagination />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  it("renders with snapshots", () => {
    const listSnap = render(
      <Pagination
        productsInPage={productsInPage}
        totalProducts={totalProducts}
      />
    );
    expect(listSnap).toMatchSnapshot();
  });
  it("renders with snapshots and empty props", () => {
    const listSnap = render(<Pagination />);
    expect(listSnap).toMatchSnapshot();
  });
  it("onclick cheking", () => {
    render(
      <Pagination
        paginate={onClickHandlerPagination}
        productsInPage={productsInPage}
        totalProducts={totalProducts}
      />
    );
    const btnPaginate = screen.getByText(1);
    fireEvent.click(btnPaginate);
  });
});
