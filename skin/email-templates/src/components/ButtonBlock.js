import React from "react";
import styled from "styled-components";

import Table, { Td } from "./Table";
import { default as BaseA } from "./A";

const Block = styled(Table)`
  min-width: 100%;
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const BlockInner = styled(Td)`
  padding-top: 0;
  padding-right: 18px;
  padding-bottom: 18px;
  padding-left: 18px;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const ContentContainer = styled(Table)`
  border-collapse: separate;
  border-radius: 3px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: ${({ theme }) => theme.button.primary.color};
`;

const Content = styled(Td)`
  font-size: 16px;
  padding: 15px;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: ${({ theme }) => theme.button.fontFamily};
`;

const A = styled(BaseA)`
  font-weight: normal;
  letter-spacing: normal;
  line-height: 100%;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  display: block;
`;

const ButtonBlock = ({ children, ...rest }) => {
  return (
    <Block border="0" cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <BlockInner align="center" valign="top">
            <ContentContainer border="0" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <Content align="center" valign="middle">
                    <A title={children} target="_blank" {...rest}>
                      {children}
                    </A>
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

export default ButtonBlock;
