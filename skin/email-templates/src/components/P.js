import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin: 10px 0;
  padding: 0;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  line-height: 150%;
  text-align: left;
`;

export default ({ children }) => <P>{children}</P>;
