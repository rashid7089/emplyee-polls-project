import { render } from "@testing-library/react";
import React from "react";
import { Provider, } from "react-redux";
import store from "../reduxStore";
import Footer from "../components/Footer";

describe("Footer Element", () => {
    it("Footer Element must match the snapshot", () => {
        const utils = render(<Footer />, { wrapper: ({ children }) => <Provider store={store}>{children}</Provider> });
        expect(utils).toMatchSnapshot();
    })
    
})