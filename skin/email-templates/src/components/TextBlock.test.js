import React from "react";
import renderer from "react-test-renderer";

import TextBlock from "./TextBlock";

test("renders without crashing", () => {
  const tree = renderer.create(<TextBlock>content</TextBlock>);
  expect(tree).toMatchSnapshot();
});
