import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import CollectionPage from "./CollectionPage";

describe("Testing of collection page component", () => {
  test("rendering of collection page component", () => {
    render(
      <MemoryRouter>
        <CollectionPage />
      </MemoryRouter>
    );
    screen.debug();
  });
});
