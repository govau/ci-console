import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Unlink from "./Unlink";

test("renders without crashing", () => {
  const tree = renderer.create(
    <ThemeProvider
      theme={{
        textColor: "#ffcc00"
      }}
    >
      <Unlink>www.example.com</Unlink>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
