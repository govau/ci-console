import React from "react";
import PropTypes from "prop-types";

// Unlink attempts to trick mail clients that parse links and auto-wrapping them
// in anchor tags.
// Does not work in Apple Mail.
const Unlink = ({ children }) => {
  const parts = children.split(".");
  return parts.map((part, i) => {
    const separator = i < parts.length - 1 ? "." : "";
    return <span key={i}>{`${part}${separator}`}</span>;
  });
};

Unlink.propTypes = {
  children: PropTypes.string.isRequired
};

export default Unlink;
