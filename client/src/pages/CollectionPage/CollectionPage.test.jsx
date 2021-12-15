import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CollectionPage from "./CollectionPage";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import * as redux from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

const test = () => {
  return render(
    <Provider store={store}>
      <CollectionPage />
    </Provider>
  );
};

describe("Testing of collection page component", () => {
  it("rendering of collection page component", () => {
    const { container } = test();
    const state = { test };

    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));
    expect(container).toBeInTheDocument();
  });
});
