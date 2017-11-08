import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 10px 0;
  padding: 0;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  line-height: 150%;
  text-align: ${({ align }) => align};
`;

const P = ({ children, align }) => <StyledP align={align}>{children}</StyledP>;

P.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]).isRequired
};

P.defaultProps = {
  align: "left"
};

export default P;
