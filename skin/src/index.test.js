import { config } from "./index";

test("header › links › all secure", () => {
  const { header } = config;
  const { links } = header;
  for (const link of links) {
    expect(link.url.indexOf("https://")).toBe(0);
  }
});
