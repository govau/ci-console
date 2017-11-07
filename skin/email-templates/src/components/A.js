import React from "react";
import styled from "styled-components";

const A = styled.a`
  color: ${({ theme }) => theme.linkColor};
`;

export default ({ children, href, className }) => (
  <A href={href} className={className}>
    {children}
  </A>
);
