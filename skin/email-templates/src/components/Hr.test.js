import React from "react";
import renderer from "react-test-renderer";

import Hr from "./Hr";

test("renders without crashing", () => {
  const tree = renderer.create(<Hr />);
  expect(tree).toMatchSnapshot();
});
