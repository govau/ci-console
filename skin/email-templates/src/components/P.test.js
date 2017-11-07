import React from "react";
import renderer from "react-test-renderer";

import P from "./P";

test("renders without crashing", () => {
  const tree = renderer.create(<P>content</P>);
  expect(tree).toMatchSnapshot();
});
