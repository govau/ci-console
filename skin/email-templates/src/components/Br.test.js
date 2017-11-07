import React from "react";
import renderer from "react-test-renderer";

import Br from "./Br";

test("renders without crashing", () => {
  const tree = renderer.create(<Br />);
  expect(tree).toMatchSnapshot();
});
