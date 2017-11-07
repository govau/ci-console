import React from "react";
import renderer from "react-test-renderer";

import { If, Range, Value, ValueC } from "./go";

test("If › renders without crashing", () => {
  const tree = renderer.create(
    <If pipeline=".field">
      <div>children</div>
    </If>
  );
  expect(tree).toMatchSnapshot();
});

test("Range › renders without crashing", () => {
  const tree = renderer.create(
    <Range pipeline="$i, $w := .widgets">
      <div>children</div>
    </Range>
  );
  expect(tree).toMatchSnapshot();
});

test("Value › renders without crashing", () => {
  expect(Value(".field")).toEqual(`{{.field}}`);
});

test("ValueC › renders without crashing", () => {
  const tree = renderer.create(
    <ValueC pipeline=".field">
      <div>children</div>
    </ValueC>
  );
  expect(tree).toMatchSnapshot();
});
