import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import theme from "../theme";

const Body = styled.body`
  color: ${({ theme }) => theme.primaryColor}; // TODO
`;

const Email = ({ children, subject, previewText }) => {
  return (
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{subject}</title>
        {"/* style-tags */"}
      </head>
      <ThemeProvider theme={theme}>
        <Body>
          <center>{children}</center>
        </Body>
      </ThemeProvider>
    </html>
  );
};

Email.propTypes = {
  subject: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired
};

export default Email;
