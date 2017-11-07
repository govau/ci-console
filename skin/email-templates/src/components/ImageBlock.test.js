import React from "react";
import renderer from "react-test-renderer";

import ImageBlock from "./ImageBlock";

test("renders without crashing", () => {
  const tree = renderer.create(
    <ImageBlock
      src="example.png"
      alt="example.com"
      width={250}
      maxWidth="500px"
      link={{ href: "https://www.example.com" }}
    />
  );
  expect(tree).toMatchSnapshot();
});
