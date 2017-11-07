import React from "react";
import renderer from "react-test-renderer";

import A from "./A";

test("renders without crashing", () => {
  const tree = renderer.create(
    <A href="https://example.com" className="override">
      content
    </A>
  );
  expect(tree).toMatchSnapshot();
});
