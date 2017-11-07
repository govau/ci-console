import React from "react";
import renderer from "react-test-renderer";

import Unlink from "./Unlink";

test("renders without crashing", () => {
  const tree = renderer.create(<Unlink>www.example.com</Unlink>);
  expect(tree).toMatchSnapshot();
});
