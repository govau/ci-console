import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: none;
  font-size: 0px;
  line-height: 0px;
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  msohide: all;
`;

export default ({ children }) => <Span>{children}</Span>;
