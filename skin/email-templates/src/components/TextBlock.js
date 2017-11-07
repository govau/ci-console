import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Table, { Td } from "./Table";

const Block = styled(Table)`
  min-width: 100%;
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const BlockInner = styled(Td)`
  padding-top: 9px;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const ContentContainer = styled(Table)`
  max-width: 100%;
  min-width: 100%;
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const Content = styled(Td)`
  padding-top: 0;
  padding-right: 18px;
  padding-bottom: 9px;
  padding-left: 18px;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-break: break-word;
  color: ${({ theme, color }) => color || theme.textColor};
  font-family: Helvetica;
  line-height: 150%;
  font-family: ${theme => theme.fontFamily};
  text-align: ${({ align }) => align};
  font-size: ${({ fontSize }) => fontSize}px;
`;

const TextBlock = ({ children, align, color, fontSize, ...rest }) => {
  return (
    <Block border="0" cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <BlockInner valign="top">
            <ContentContainer
              align="left"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
            >
              <tbody>
                <tr>
                  <Content
                    align={align}
                    color={color}
                    fontSize={fontSize}
                    valign="top"
                  >
                    {children}
                  </Content>
                </tr>
              </tbody>
            </ContentContainer>
          </BlockInner>
        </tr>
      </tbody>
    </Block>
  );
};

TextBlock.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]).isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number.isRequired
};

TextBlock.defaultProps = {
  align: "left",
  fontSize: 16
};

export default TextBlock;
