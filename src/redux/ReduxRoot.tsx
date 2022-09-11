import React from "react";
import { Provider } from "react-redux";
import Content from "./Content";
import { store } from "./store";

export default function ReduxRoot() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}
