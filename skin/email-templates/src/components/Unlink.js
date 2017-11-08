import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const A = styled.a`
  color: ${({ theme }) => theme.textColor};
`;

// Unlink attempts to trick mail clients that parse links and auto-wrapping them
// in anchor tags.
const Unlink = ({ children }) => <A>{children}</A>;

Unlink.propTypes = {
  children: PropTypes.string.isRequired
};

export default Unlink;
