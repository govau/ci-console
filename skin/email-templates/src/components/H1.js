import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 24px;
  text-align: ${({ align }) => align};
`;

const H1 = ({ children, align }) => (
  <StyledH1 align={align}>{children}</StyledH1>
);

H1.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]).isRequired
};

H1.defaultProps = {
  align: "left"
};

export default H1;
