import React from "react";
import renderer from "react-test-renderer";

import H1 from "./H1";

test("renders without crashing", () => {
  const tree = renderer.create(<H1>content</H1>);
  expect(tree).toMatchSnapshot();
});
