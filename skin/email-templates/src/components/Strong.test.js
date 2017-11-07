import React from "react";
import renderer from "react-test-renderer";

import Strong from "./Strong";

test("renders without crashing", () => {
  const tree = renderer.create(<Strong>content</Strong>);
  expect(tree).toMatchSnapshot();
});
