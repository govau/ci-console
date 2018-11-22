import React from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal, ThemeProvider } from "styled-components";

import theme from "../theme";
import PreviewText from "./PreviewText";
import Table, { Td } from "./Table";
import A from "./A";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

export const injectGlobalStyles = () => injectGlobal`
  a {
    color: ${theme.linkColor};
  }
`;

const Body = styled.body`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #fafafa;
`;

const BodyTable = styled(Table)`
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #fafafa;
`;

const BodyTableCell = styled(Td)`
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  margin: 0;
  padding: 10px;
  width: 100%;
  border-top: 0;
`;

const Container = styled(Table)`
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  border: 0;
  max-width: 600px;
`;

const Preheader = styled(Td)`
  background: #fafafa none no-repeat center/cover;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #fafafa;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top: 0;
  border-bottom: 0;
  padding-top: 9px;
  padding-bottom: 9px;
`;

const Header = styled(Td)`
  background: #ffffff none no-repeat center/cover;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #ffffff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top: 0;
  border-bottom: 0;
  padding-top: 9px;
  padding-bottom: 0;
`;

const Content = styled(Td)`
  background: #ffffff none no-repeat center/cover;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #ffffff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top: 0;
  border-bottom: 2px solid #eaeaea;
  padding-top: 0;
  padding-bottom: 9px;
`;

const Footer = styled(Td)`
  background: #fafafa none no-repeat center/cover;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #fafafa;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top: 0;
  border-bottom: 0;
  padding-top: 9px;
  padding-bottom: 9px;
`;

const Email = ({ children, subject, previewText }) => {
  return (
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{subject}</title>
        {"/* global-style-tags */"}
        {"/* style-tags */"}
      </head>
      <ThemeProvider theme={theme}>
        <Body>
          {!!previewText && <PreviewText>{previewText}</PreviewText>}
          <center>
            <BodyTable
              align="center"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              height="100%"
              width="100%"
            >
              <tbody>
                <tr>
                  <BodyTableCell align="center" valign="top">
                    <Container
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <Preheader valign="top">
                            <ImageBlock
                              src="https://cloud.gov.au/console-email-assets/aus-gov-dta-wordmark.png"
                              alt="Australian Government Digital Transformation Agency"
                              width={250}
                              maxWidth="500px"
                              link={{ href: "https://cloud.gov.au" }}
                            />
                          </Preheader>
                        </tr>
                        <tr>
                          <Header valign="top" />
                        </tr>
                        <tr>
                          <Content valign="top">{children}</Content>
                        </tr>
                        <tr>
                          <Footer valign="top">
                            <ImageBlock
                              src="https://cloud.gov.au/console-email-assets/aus-gov-dta-wordmark.png"
                              alt="Australian Government Digital Transformation Agency"
                              width={250}
                              maxWidth="500px"
                              link={{ href: "https://cloud.gov.au" }}
                            />
                            <TextBlock
                              align="center"
                              color={theme.footer.textColor}
                              fontSize={12}
                            >
                              © {new Date().getFullYear()} Commonwealth of
                              Australia. Made by Australia’s{" "}
                              <A href="https://www.dta.gov.au">
                                Digital Transformation Agency
                              </A>.
                            </TextBlock>
                          </Footer>
                        </tr>
                      </tbody>
                    </Container>
                  </BodyTableCell>
                </tr>
              </tbody>
            </BodyTable>
          </center>
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
