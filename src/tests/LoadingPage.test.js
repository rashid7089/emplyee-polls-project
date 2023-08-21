import { render } from "@testing-library/react";
import React from "react";
import { Provider, } from "react-redux";
import store from "../reduxStore";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";

describe("Loading Page Element", () => {
    it("Loading Page Element must match the snapshot", () => {
        const utils = render(<LoadingPage />, { wrapper: ({ children }) => <Provider store={store}>{children}</Provider> });
        expect(utils).toMatchSnapshot();
    })
})

        