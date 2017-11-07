import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import ButtonBlock from "./ButtonBlock";

test("renders without crashing", () => {
  const tree = renderer.create(
    <ThemeProvider
      theme={{
        button: {
          fontFamily: "Roboto",
          primary: {
            color: "#ffcc00"
          }
        }
      }}
    >
      <ButtonBlock href="https://example.com">content</ButtonBlock>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
