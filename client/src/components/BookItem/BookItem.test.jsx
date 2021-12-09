import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import BookItem from "./BookItem";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
describe("Testing of book item", () => {
  test("rendering of book item", () => {
    render(
      <MemoryRouter>
        <BookItem />
      </MemoryRouter>
    );
    screen.debug();
  });
  test("testing of link", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BookItem />
      </Router>
    );

    userEvent.click(screen.getByRole("img"));
    expect(history.location.pathname).toBe("/product/undefined");
  });
});
