import React from "react";
import renderer from "react-test-renderer";

import PreviewText from "./PreviewText";

test("renders without crashing", () => {
  const tree = renderer.create(<PreviewText>preview</PreviewText>);
  expect(tree).toMatchSnapshot();
});
